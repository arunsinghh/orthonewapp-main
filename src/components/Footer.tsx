import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        {/* ===== Clinic Info ===== */}
        <div className="footer-col">
          <h2>OrthoproIndia</h2>

          <p>
            Advanced Prosthetic & Orthotic Rehabilitation Center
            dedicated to restoring mobility, confidence and
            independence through modern rehabilitation solutions.
          </p>
        </div>


        {/* ===== Services Links ===== */}
        <div className="footer-col">
          <h3>Services</h3>

          <ul>
            <li>
              <Link to="/prosthetic-services">
                Prosthetics
              </Link>
            </li>

            <li>
              <Link to="/orthotic-services">
                Orthotics
              </Link>
            </li>

            <li>
              <Link to="/pediatric-care">
                Pediatric Care
              </Link>
            </li>

            <li>
              <Link to="/diabetic-care">
                Diabetic Foot Care
              </Link>
            </li>
          </ul>
        </div>


        {/* ===== Contact ===== */}
        <div className="footer-col">
          <h3>Contact</h3>

          <p>
            <a href="tel:+918130546090">
              📞 +91 81305 46090
            </a>
          </p>

          <p>
            📍 Ground Floor, 87, opposite Select Citywalk Mall, Khirki Extension, Malviya Nagar, New Delhi, Delhi 110017
          </p>

          <p>
            <a href="mailto:info@orthoproindia.com">
              ✉ info@orthoproindia.com
            </a>
          </p>

          <p>
            <a
              href="https://wa.me/918130546090"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp Us
            </a>
          </p>
        </div>

      </div>


      {/* ===== Bottom Bar ===== */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} OrthoproIndia.
        All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;