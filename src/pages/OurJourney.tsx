import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./OurJourney.css";

interface Post {
  id: number;
  title: string;
  content: string;
  image_url: string;
  date: string;
}

const OurJourney = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/journey`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching journey:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="journey-page">
      <section className="journey-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Sharing Our Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Stories of resilience, recovery, and life-changing rehabilitation at OrthoproIndia.
          </motion.p>
        </div>
      </section>

      <div className="container posts-grid">
        {loading ? (
          <p>Loading our stories...</p>
        ) : posts.length > 0 ? (
          posts.map((post) => (
            <motion.article
              key={post.id}
              className="post-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="post-image">
                <img src={post.image_url || "/images/journey-placeholder.jpg"} alt={post.title} />
              </div>
              <div className="post-content">
                <span className="post-date">{post.date}</span>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
              </div>
            </motion.article>
          ))
        ) : (
          <div className="no-posts">
            <p>No stories shared yet. Check back soon for inspiring patient journeys!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurJourney;
