import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./BookNow.css";

const BookNow = () => {

  const navigate = useNavigate(); // ✅ Properly using navigate

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/send-booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      navigate("/thank-you");
    } else {
      alert("Something went wrong");
    }

  } catch (error) {
    console.error(error);
    alert("Server error");
  }
};

  return (
    <section className="booking">

      <div className="container booking-wrapper">

        {/* LEFT INFO */}
        <motion.div
          className="booking-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Book Your Consultation</h2>

          <p>
            Schedule your appointment with OrthoproIndia specialists.
            Our rehabilitation experts will contact you shortly
            to confirm your visit.
          </p>

          <div className="booking-trust">
            ⭐ 4.9 Rated Clinic <br />
            🏥 8+ Years Experience <br />
            👨‍⚕️ Expert Rehabilitation Team
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          className="booking-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            required
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            required
            onChange={handleChange}
          />

          <select
            name="service"
            value={formData.service}
            required
            onChange={handleChange}
          >
            <option value="">Select Service</option>
            <option value="Prosthetics">Prosthetics</option>
            <option value="Orthotics">Orthotics</option>
            <option value="Pediatric Care">Pediatric Care</option>
            <option value="Diabetic Care">Diabetic Care</option>
          </select>

          <textarea
            name="message"
            placeholder="Additional Notes"
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" className="primary-btn">
            Book Appointment
          </button>

          <a
            href="https://wa.me/918130546090"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            Chat on WhatsApp
          </a>

        </motion.form>

      </div>

    </section>
  );
};

export default BookNow;