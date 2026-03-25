import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Admin.css";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("analytics");
  const [stats, setStats] = useState({ areas: [] as any[], services: [] as any[] });
  const [patients, setPatients] = useState<any[]>([]);
  const [pendingReviews, setPendingReviews] = useState<any[]>([]);
  const [searchId, setSearchId] = useState("");
  const [searchResult, setSearchResult] = useState<any>(null);
  const [patientData, setPatientData] = useState({ name: "", phone: "", area: "", service: "", notes: "", next_visit_date: "" });
  const [journeyData, setJourneyData] = useState({ title: "", content: "", date: "", image_url: "" });
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetchStats();
    fetchPatients();
    fetchPendingReviews();
  }, []);

  const fetchPendingReviews = async () => {
    try {
      const res = await fetch(`${API}/api/admin/reviews`);
      const data = await res.json();
      setPendingReviews(data.filter((r: any) => r.status === "pending"));
    } catch { /* ignore */ }
  };

  const approveReview = async (id: number) => {
    await fetch(`${API}/api/reviews/${id}/approve`, { method: "PATCH" });
    fetchPendingReviews();
  };

  const handlePatientSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Registering...");
    const res = await fetch(`${API}/api/patients`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patientData),
    });
    if (res.ok) {
      const data = await res.json();
      setStatus(`✅ Patient ID: ${data.patient_id}`);
      setPatientData({ name: "", phone: "", area: "", service: "", notes: "", next_visit_date: "" });
      fetchPatients();
      fetchStats();
    }
  };

  const fetchStats = async () => {
    try {
      const [areaRes, serviceRes] = await Promise.all([
        fetch(`${API}/api/analytics/areas`),
        fetch(`${API}/api/analytics/services`),
      ]);
      setStats({ areas: await areaRes.json(), services: await serviceRes.json() });
    } catch { /* ignore */ }
  };

  const fetchPatients = async () => {
    try {
      const res = await fetch(`${API}/api/patients`);
      setPatients(await res.json());
    } catch { /* ignore */ }
  };

  const handleSearch = async () => {
    if (!searchId) return;
    const res = await fetch(`${API}/api/patients/${searchId}`);
    if (res.ok) setSearchResult(await res.json());
    else alert("Patient not found");
  };

  const handleJourneySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Posting...");
    const response = await fetch(`${API}/api/journey`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(journeyData),
    });
    if (response.ok) {
      setStatus("✅ Journey posted!");
      setJourneyData({ title: "", content: "", date: "", image_url: "" });
    }
  };

  const tabs = [
    { id: "analytics", label: "📊 Analytics", count: 0 },
    { id: "patients", label: "📋 Records", count: 0 },
    { id: "register", label: "➕ New Patient", count: 0 },
    { id: "journey", label: "📖 Journey", count: 0 },
    { id: "reviews", label: "⭐ Reviews", count: pendingReviews.length },
  ];

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h2>🏥 Admin</h2>
          <span className="sidebar-subtitle">OrthoproIndia</span>
        </div>
        <nav className="sidebar-nav">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`sidebar-btn ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => { setActiveTab(tab.id); setStatus(""); }}
            >
              <span>{tab.label}</span>
              {tab.count > 0 && <span className="badge">{tab.count}</span>}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <AnimatePresence mode="wait">
          {/* ANALYTICS */}
          {activeTab === "analytics" && (
            <motion.div key="analytics" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="tab-content">
              <h2 className="tab-title">Insights Dashboard</h2>
              <div className="overview-cards">
                <div className="overview-card"><span className="overview-num">{patients.length}</span><span>Total Patients</span></div>
                <div className="overview-card blue"><span className="overview-num">{stats.services.reduce((a: number, b: any) => a + b.count, 0)}</span><span>Total Appointments</span></div>
                <div className="overview-card green"><span className="overview-num">{stats.areas.length}</span><span>Regions Served</span></div>
                <div className="overview-card orange"><span className="overview-num">{pendingReviews.length}</span><span>Pending Reviews</span></div>
              </div>
              <div className="chart-grid">
                <div className="chart-card">
                  <h3>Patient Geography</h3>
                  {stats.areas.length === 0 && <p className="empty-state">No data yet. Register patients to see insights.</p>}
                  <ul className="bar-list">
                    {stats.areas.map((s: any) => (
                      <li key={s.area}>
                        <span className="bar-label">{s.area}</span>
                        <div className="bar-track"><div className="bar-fill" style={{ width: `${Math.min((s.count / (patients.length || 1)) * 100, 100)}%` }} /></div>
                        <span className="bar-count">{s.count}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="chart-card">
                  <h3>Service Demand</h3>
                  {stats.services.length === 0 && <p className="empty-state">No data yet.</p>}
                  <ul className="bar-list">
                    {stats.services.map((s: any) => (
                      <li key={s.service}>
                        <span className="bar-label">{s.service}</span>
                        <div className="bar-track"><div className="bar-fill alt" style={{ width: `${Math.min((s.count / (patients.length || 1)) * 100, 100)}%` }} /></div>
                        <span className="bar-count">{s.count}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {/* PATIENT RECORDS */}
          {activeTab === "patients" && (
            <motion.div key="patients" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="tab-content">
              <h2 className="tab-title">Patient Records</h2>
              <div className="search-row">
                <input className="search-input" placeholder="Search by Unique ID (e.g., OP-2026-001)" value={searchId} onChange={(e) => setSearchId(e.target.value)} onKeyDown={e => e.key === "Enter" && handleSearch()} />
                <button onClick={handleSearch} className="btn btn-primary">🔍 Find</button>
              </div>

              {searchResult && (
                <motion.div className="detail-card" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}>
                  <div className="detail-header">
                    <h3>{searchResult.name}</h3>
                    <span className="id-badge">{searchResult.patient_id}</span>
                  </div>
                  <div className="detail-meta">
                    <span>📍 {searchResult.area}</span>
                    <span>📞 {searchResult.phone}</span>
                  </div>
                  <h4>Treatment History</h4>
                  {searchResult.history?.map((h: any) => (
                    <div key={h.id} className="history-row">
                      <div className="history-date">{new Date(h.visit_date).toLocaleDateString()}</div>
                      <div className="history-body">
                        <strong>{h.service}</strong>
                        <p>{h.notes}</p>
                        {h.next_visit_date && <span className="next-visit-badge">Next: {new Date(h.next_visit_date).toLocaleDateString()}</span>}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              <div className="table-wrapper">
                <table className="data-table">
                  <thead><tr><th>Patient ID</th><th>Name</th><th>Phone</th><th>Area</th><th>Registered</th></tr></thead>
                  <tbody>
                    {patients.length === 0 && <tr><td colSpan={5} className="empty-state">No patients registered yet.</td></tr>}
                    {patients.map((p) => (
                      <tr key={p.id} onClick={() => { setSearchId(p.patient_id); setSearchResult(null); handleSearch(); }} className="clickable-row">
                        <td><span className="id-badge-sm">{p.patient_id}</span></td>
                        <td>{p.name}</td>
                        <td>{p.phone}</td>
                        <td>{p.area}</td>
                        <td>{new Date(p.created_at).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* REGISTER */}
          {activeTab === "register" && (
            <motion.div key="register" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="tab-content">
              <h2 className="tab-title">Register New Patient</h2>
              <form onSubmit={handlePatientSubmit} className="structured-form">
                <fieldset>
                  <legend>Personal Information</legend>
                  <div className="form-grid-2">
                    <div className="field">
                      <label>Full Name *</label>
                      <input placeholder="e.g., Rajesh Kumar" value={patientData.name} onChange={e => setPatientData({...patientData, name: e.target.value})} required />
                    </div>
                    <div className="field">
                      <label>Phone Number *</label>
                      <input type="tel" placeholder="e.g., 9876543210" value={patientData.phone} onChange={e => setPatientData({...patientData, phone: e.target.value})} required />
                    </div>
                  </div>
                  <div className="field">
                    <label>Area / Location *</label>
                    <input placeholder="e.g., Malviya Nagar, New Delhi" value={patientData.area} onChange={e => setPatientData({...patientData, area: e.target.value})} required />
                  </div>
                </fieldset>

                <fieldset>
                  <legend>Treatment Details</legend>
                  <div className="form-grid-2">
                    <div className="field">
                      <label>Service Required *</label>
                      <select value={patientData.service} onChange={e => setPatientData({...patientData, service: e.target.value})} required>
                        <option value="">— Select Service —</option>
                        <option value="Prosthetics">Prosthetics</option>
                        <option value="Orthotics">Orthotics</option>
                        <option value="Pediatric Care">Pediatric Care</option>
                        <option value="Diabetic Care">Diabetic Care</option>
                      </select>
                    </div>
                    <div className="field">
                      <label>Next Visit Date</label>
                      <input type="date" value={patientData.next_visit_date} onChange={e => setPatientData({...patientData, next_visit_date: e.target.value})} />
                    </div>
                  </div>
                  <div className="field">
                    <label>Clinical Notes / Observations</label>
                    <textarea placeholder="Write observations, diagnosis, or special instructions..." value={patientData.notes} onChange={e => setPatientData({...patientData, notes: e.target.value})} rows={4} />
                  </div>
                </fieldset>

                <button type="submit" className="btn btn-primary btn-lg">Register &amp; Generate Patient ID</button>
                {status && <div className="form-status">{status}</div>}
              </form>
            </motion.div>
          )}

          {/* JOURNEY */}
          {activeTab === "journey" && (
            <motion.div key="journey" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="tab-content">
              <h2 className="tab-title">Post Patient Story</h2>
              <form onSubmit={handleJourneySubmit} className="structured-form">
                <fieldset>
                  <legend>Story Details</legend>
                  <div className="field">
                    <label>Story Title *</label>
                    <input placeholder="e.g., Walking Again After 10 Years" value={journeyData.title} onChange={e => setJourneyData({...journeyData, title: e.target.value})} required />
                  </div>
                  <div className="field">
                    <label>Story Content *</label>
                    <textarea placeholder="Describe the patient's recovery journey in detail..." value={journeyData.content} onChange={e => setJourneyData({...journeyData, content: e.target.value})} rows={6} required />
                  </div>
                  <div className="form-grid-2">
                    <div className="field">
                      <label>Date *</label>
                      <input placeholder="e.g., March 2024" value={journeyData.date} onChange={e => setJourneyData({...journeyData, date: e.target.value})} required />
                    </div>
                    <div className="field">
                      <label>Image URL (optional)</label>
                      <input placeholder="https://example.com/photo.jpg" value={journeyData.image_url} onChange={e => setJourneyData({...journeyData, image_url: e.target.value})} />
                    </div>
                  </div>
                </fieldset>
                <button type="submit" className="btn btn-primary btn-lg">Publish Story</button>
                {status && <div className="form-status">{status}</div>}
              </form>
            </motion.div>
          )}

          {/* REVIEWS */}
          {activeTab === "reviews" && (
            <motion.div key="reviews" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="tab-content">
              <h2 className="tab-title">Review Moderation</h2>
              {pendingReviews.length === 0 && <div className="empty-state-box">✅ No pending reviews. All caught up!</div>}
              <div className="review-grid">
                {pendingReviews.map((r) => (
                  <div key={r.id} className="review-card-admin">
                    <div className="review-header-admin">
                      <strong>{r.name}</strong>
                      <span className="stars">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</span>
                    </div>
                    <p className="review-text-admin">{r.text}</p>
                    <div className="review-actions">
                      <button onClick={() => approveReview(r.id)} className="btn btn-success">✅ Approve &amp; Publish</button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Admin;
