import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./OurJourney.css";

interface JourneyPost {
  id: number;
  title: string;
  content: string;
  date: string;
  image_url: string;
}

const OurJourney = () => {
  const [posts, setPosts] = useState<JourneyPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/journey`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="loading-screen">Loading Our Journey...</div>;

  return (
    <div className="journey-page">
      {/* Header Section */}
      <motion.header 
        className="journey-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <h1>Healing Hearts, Restoring Lives</h1>
          <p>Every patient has a story of courage. Here are the milestones of our collective journey.</p>
        </div>
      </motion.header>

      {/* Timeline Layout */}
      <section className="timeline-section container">
        {posts.length === 0 ? (
          <p className="no-posts">No stories published yet. Stay tuned!</p>
        ) : (
          <div className="timeline">
            {posts.map((post, index) => (
              <motion.div 
                key={post.id}
                className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-date">{post.date}</div>
                <div className="timeline-content">
                  {post.image_url && (
                    <div className="post-img-wrapper">
                      <img src={post.image_url} alt={post.title} loading="lazy" />
                    </div>
                  )}
                  <h2>{post.title}</h2>
                  <p>{post.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* CTA Footer */}
      <motion.section 
        className="journey-footer container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="cta-box">
          <h3>Your Story Could Be Next</h3>
          <p>If you have a story to share about your experience with OrthoproIndia, we'd love to hear it.</p>
          <a href="#testimonial-form" className="primary-btn">Share My Experience</a>
        </div>
      </motion.section>
    </div>
  );
};

export default OurJourney;
