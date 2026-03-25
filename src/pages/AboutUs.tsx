import { motion } from "framer-motion";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            About OrthoproIndia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Empowering Lives through Advanced Rehabilitation.
          </motion.p>
        </div>
      </section>

      <section className="about-content container">
        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2>Our Mission</h2>
            <p>
              At OrthoproIndia, our mission is to provide world-class prosthetic and orthotic solutions
              that restore mobility and independence to our patients. We believe that everyone deserves
              to live a life without limits, and we use the latest technology and compassionate care to
              make that a reality.
            </p>
            <p>
              With over 8 years of experience, our team of certified specialists works closely with each
              patient to design custom solutions tailored to their unique needs and lifestyle.
            </p>
          </motion.div>
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src="/images/clinic-team.jpg" alt="Our Team" />
          </motion.div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          <div className="stat-item">
            <h3>8+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h3>5000+</h3>
            <p>Happy Patients</p>
          </div>
          <div className="stat-item">
            <h3>15+</h3>
            <p>Expert Staff</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Support</p>
          </div>
        </div>
      </section>

      <section className="team-section container">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="icon">🏥</div>
            <h3>Modern Facility</h3>
            <p>Equipped with state-of-the-art diagnostic and fabrication tools.</p>
          </div>
          <div className="feature-card">
            <div className="icon">👨‍⚕️</div>
            <h3>Certified Experts</h3>
            <p>Our prosthetists and orthotists are among the best in the industry.</p>
          </div>
          <div className="feature-card">
            <div className="icon">⚙️</div>
            <h3>Custom Solutions</h3>
            <p>Every device is handcrafted and adjusted for the perfect fit.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
