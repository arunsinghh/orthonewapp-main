import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./ThankYou.css";

const ThankYou = () => {
  return (
    <section className="thankyou">

      <motion.div
        className="thankyou-box"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Thank You! 🎉</h2>

        <p>
          Your appointment request has been successfully submitted.
          Our team will contact you shortly to confirm your consultation.
        </p>

        <Link to="/" className="primary-btn">
          Back to Home
        </Link>

      </motion.div>

    </section>
  );
};

export default ThankYou;