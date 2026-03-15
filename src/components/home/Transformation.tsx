import { motion } from "framer-motion";
import "./Transformation.css";

const cases = [
  {
    title: "Before → After Mobility",
    before: "/images/slide_b.webp",
    after: "/images/slide_a.webp"
  },
  {
    title: "Walking Recovery",
    before: "/images/slide_e.webp",
    after: "/images/slide_a.webp"
  },
  {
    title: "Rehabilitation Success",
    before: "/images/slide_c.webp",
    after: "/images/slide_d.webp"
  }
];

const Transformation = () => {
  return (
    <section className="transform">

      <div className="container">

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Patient Success Stories
        </motion.h2>

        <div className="transform-grid">

          {cases.map((item, index) => (
            <motion.div
              className="case-card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="image-wrapper">
                <div className="image-box">
                  <img src={item.before} alt="before" />
                  <span className="label before">Before</span>
                </div>

                <div className="image-box">
                  <img src={item.after} alt="after" />
                  <span className="label after">After</span>
                </div>
              </div>

              <h3>{item.title}</h3>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Transformation;