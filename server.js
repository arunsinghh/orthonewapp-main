import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || "ortho-secret-key-2024";
const ADMIN_USER = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASS = process.env.ADMIN_PASSWORD || "admin123";

// Middleware: Authenticate JWT
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: "Access denied. No token provided." });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid or expired token." });
    req.user = user;
    next();
  });
};

// Database Initialization
let db;
(async () => {
  try {
    db = await open({
      filename: "./ortho_database.db",
      driver: sqlite3.Database
    });

    // Create Tables
    await db.exec(`
      CREATE TABLE IF NOT EXISTS patients (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        patient_id TEXT UNIQUE,
        name TEXT,
        phone TEXT,
        area TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS appointments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        patient_id TEXT,
        service TEXT,
        notes TEXT,
        visit_date DATETIME DEFAULT CURRENT_TIMESTAMP,
        next_visit_date DATETIME,
        FOREIGN KEY (patient_id) REFERENCES patients(patient_id)
      );

      CREATE TABLE IF NOT EXISTS journey_posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        content TEXT,
        image_url TEXT,
        date TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS reviews (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        text TEXT,
        rating INTEGER,
        status TEXT DEFAULT 'pending',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );

      -- Legacy compatibility for bookings
      CREATE TABLE IF NOT EXISTS bookings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        phone TEXT,
        service TEXT,
        message TEXT,
        status TEXT DEFAULT 'pending',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Ensure 'status' column exists in reviews (for migrations)
    try {
      await db.run("ALTER TABLE reviews ADD COLUMN status TEXT DEFAULT 'pending'");
    } catch (e) {
      // Ignore error if column already exists
    }

    console.log("Database initialized and missing columns added.");
  } catch (err) {
    console.error("Database Init Error:", err);
  }
})();

// Helper: Generate Unique Patient ID
async function generatePatientId() {
  const row = await db.get("SELECT COUNT(*) as count FROM patients");
  const count = (row.count + 1).toString().padStart(3, '0');
  const year = new Date().getFullYear();
  return `OP-${year}-${count}`;
}

// Email Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// --- AUTH ---
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    const token = jwt.sign({ user: ADMIN_USER }, JWT_SECRET, { expiresIn: '12h' });
    return res.json({ token });
  }
  res.status(401).json({ message: "Invalid credentials" });
});

// --- API ENDPOINTS ---

// Patient Management
app.post("/api/patients", authenticateToken, asyncHandler(async (req, res) => {
  const { name, phone, area, service, notes, next_visit_date } = req.body;
  
  // 1. Generate ID
  const pId = await generatePatientId();

  // 2. Save Patient
  await db.run(
    'INSERT INTO patients (patient_id, name, phone, area) VALUES (?, ?, ?, ?)',
    [pId, name, phone, area]
  );

  // 3. Create initial appointment record
  await db.run(
    'INSERT INTO appointments (patient_id, service, notes, next_visit_date) VALUES (?, ?, ?, ?)',
    [pId, service, notes, next_visit_date]
  );

  res.status(201).json({ 
    message: "Patient record created", 
    patient_id: pId 
  });
}));

app.get("/api/patients/:id", authenticateToken, asyncHandler(async (req, res) => {
  const patient = await db.get('SELECT * FROM patients WHERE patient_id = ?', [req.params.id]);
  if (!patient) return res.status(404).json({ message: "Patient not found" });

  const history = await db.all('SELECT * FROM appointments WHERE patient_id = ? ORDER BY visit_date DESC', [req.params.id]);
  res.json({ ...patient, history });
}));

app.get("/api/patients", authenticateToken, asyncHandler(async (req, res) => {
  const patients = await db.all('SELECT * FROM patients ORDER BY created_at DESC');
  res.json(patients);
}));

// Appointments
app.post("/api/appointments", authenticateToken, asyncHandler(async (req, res) => {
  const { patient_id, service, notes, next_visit_date } = req.body;
  await db.run(
    'INSERT INTO appointments (patient_id, service, notes, next_visit_date) VALUES (?, ?, ?, ?)',
    [patient_id, service, notes, next_visit_date]
  );
  res.status(201).json({ message: "Appointment added" });
}));

// Analytics
app.get("/api/analytics/areas", authenticateToken, asyncHandler(async (req, res) => {
  const stats = await db.all('SELECT area, COUNT(*) as count FROM patients GROUP BY area ORDER BY count DESC');
  res.json(stats);
}));

app.get("/api/analytics/services", authenticateToken, asyncHandler(async (req, res) => {
  const stats = await db.all('SELECT service, COUNT(*) as count FROM appointments GROUP BY service ORDER BY count DESC');
  res.json(stats);
}));

// Reviews (with submission and approval status)
app.get("/api/reviews", asyncHandler(async (req, res) => {
  // Only show approved reviews on website
  const reviews = await db.all("SELECT * FROM reviews WHERE status = 'approved' ORDER BY created_at DESC");
  res.json(reviews);
}));

app.get("/api/admin/reviews", authenticateToken, asyncHandler(async (req, res) => {
  const reviews = await db.all("SELECT * FROM reviews ORDER BY created_at DESC");
  res.json(reviews);
}));

app.post("/api/reviews", asyncHandler(async (req, res) => {
  const { name, text, rating } = req.body;
  await db.run(
    "INSERT INTO reviews (name, text, rating, status) VALUES (?, ?, ?, 'pending')",
    [name, text, rating]
  );
  res.status(201).json({ message: "Review submitted for approval" });
}));

app.patch("/api/reviews/:id/approve", authenticateToken, asyncHandler(async (req, res) => {
  await db.run("UPDATE reviews SET status = 'approved' WHERE id = ?", [req.params.id]);
  res.json({ message: "Review approved" });
}));

// Journey Posts
app.get("/api/journey", asyncHandler(async (req, res) => {
  const posts = await db.all('SELECT * FROM journey_posts ORDER BY created_at DESC');
  res.json(posts);
}));

app.post("/api/journey", authenticateToken, asyncHandler(async (req, res) => {
  const { title, content, image_url, date } = req.body;
  await db.run(
    'INSERT INTO journey_posts (title, content, image_url, date) VALUES (?, ?, ?, ?)',
    [title, content, image_url, date]
  );
  res.status(201).json({ message: "Journey post added" });
}));

// Legacy Booking (Redirects to patient creation conceptually)
app.post("/api/bookings", asyncHandler(async (req, res) => {
  const { name, phone, service, message } = req.body;
  await db.run(
    'INSERT INTO bookings (name, phone, service, message) VALUES (?, ?, ?, ?)',
    [name, phone, service, message]
  );
  res.status(201).json({ message: "Booking recorded" });
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});