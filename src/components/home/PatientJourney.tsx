import { motion } from "framer-motion";
import { FaUserMd, FaClipboardCheck, FaDraftingCompass, FaTools, FaRunning } from "react-icons/fa";
import "./Journey.css";

const steps = [
  {
    icon: <FaUserMd />,
    title: "Consultation",
    desc: "Initial discussion to understand patient needs."
  },
  {
    icon: <FaClipboardCheck />,
    title: "Assessment",
    desc: "Detailed evaluation and biomechanical analysis."
  },
  {
    icon: <FaDraftingCompass />,
    title: "Design",
    desc: "Customized prosthetic solution planning."
  },
  {
    icon: <FaTools />,
    title: "Fitting",
    desc: "Precision fitting and comfort adjustments."
  },
  {
    icon: <FaRunning />,
    title: "Rehabilitation",
    desc: "Guided recovery and mobility training."
  }
];

const PatientJourney = () => {
  return (
    <section className="journey">

      <div className="container">

        <h2 className="section-title">
          Patient Treatment Journey
        </h2>

        {/* Animated Timeline Line */}
        <div className="timeline-line"></div>

        <div className="journey-grid">

          {steps.map((step, index) => (
            <motion.div
              className="journey-card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >

              <div className="icon-wrapper">
                {step.icon}
              </div>

              <h3>{step.title}</h3>
              <p>{step.desc}</p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default PatientJourney;