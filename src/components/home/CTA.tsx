import { Link } from "react-router-dom";
import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta">

      <div className="container">

        <h2>
          Ready to Restore Mobility?
        </h2>

        <p>
          Book a consultation with OrthoproIndia experts today.
        </p>

        <Link to="/book-now" className="primary-btn">
          Book Appointment
        </Link>

      </div>

    </section>
  );
};

export default CTA;