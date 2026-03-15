import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    title: "Prosthetic Solutions",
    desc: "Advanced artificial limb solutions for mobility restoration.",
    icon: "🦿",
    link: "/prosthetic-services"
  },
  {
    title: "Orthotic Solutions",
    desc: "Custom braces & support systems for better movement.",
    icon: "🦾",
    link: "/orthotic-services"
  },
  {
    title: "Pediatric Care",
    desc: "Special rehabilitation care for children.",
    icon: "👶",
    link: "/pediatric-care"
  },
  {
    title: "Diabetic Foot Care",
    desc: "Preventive and corrective diabetic foot management.",
    icon: "🦶",
    link: "/diabetic-care"
  }
];

const Services = () => {
  return (
    <section className="services">

      <div className="container">

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Specialized Solutions
        </motion.h2>

        <div className="service-grid">

          {services.map((item, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.03 }}
            >

              <div className="service-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <Link to={item.link} className="service-btn">
                Learn More →
              </Link>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Services;