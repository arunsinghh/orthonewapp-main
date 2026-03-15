import { motion } from "framer-motion";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {

  const navigate = useNavigate(); // ✅ MOVE IT HERE

  return (
    <section className="hero">

      <div className="container hero-grid">

        {/* IMAGE */}
        <motion.div
          className="hero-img"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/images/slide_a.webp" alt="clinic" />
        </motion.div>

        {/* TEXT CONTENT */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            OrthoPro Artificial <br />
            Limb Center
          </h1>

          <p>
            Helping patients restore mobility,
            confidence and independence.
          </p>

          <div className="hero-btns">

            <button
              className="primary-btn"
              onClick={() => navigate("/book-now")}
            >
              Book Consultation
            </button>

            <a
              href="https://wa.me/918130546090"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              WhatsApp Expert
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;