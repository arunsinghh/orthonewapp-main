import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import "./Doctor.css";

const ClinicalSection = () => {
  return (
    <section className="clinical">

      {/* Floating Accent Shapes */}
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>

      <div className="container clinical-grid">

        <motion.div
          className="clinical-image"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img src="/images/slide_c.webp" alt="OrthoproIndia Facility" />
        </motion.div>

        <motion.div
          className="clinical-content"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >

          <h2 className="gradient-heading">
            Clinical Excellence in Prosthetic & Orthotic Rehabilitation
          </h2>

          <p>
            OrthoproIndia is a specialized rehabilitation center committed to
            restoring mobility, confidence and independence through
            evidence-based care, modern biomechanical systems and
            international clinical standards.
          </p>

          {/* Trust Counters */}
          <div className="trust-counters">

            <div>
              <h3>
                <CountUp end={8} duration={3} />+
              </h3>
                <p>Years of Clinical Experience</p>
            </div>

            <div>
              <h3>
                <CountUp end={1000} duration={3} />+
              </h3>
              <p>Successful Patient Cases</p>
            </div>

            <div>
              <h3>
                <CountUp end={100} duration={3} />%
              </h3>
              <p>Personalized Treatment Approach</p>
            </div>

          </div>

          <ul className="clinical-points">
            <li>✔ Certified Rehabilitation Team</li>
            <li>✔ Advanced 3D Prosthetic Technology</li>
            <li>✔ Multidisciplinary Care Model</li>
            <li>✔ International Hygiene Standards</li>
          </ul>

          <Link to="/book-now" className="primary-btn">
            Schedule Consultation
          </Link>

        </motion.div>

      </div>

    </section>
  );
};

export default ClinicalSection;