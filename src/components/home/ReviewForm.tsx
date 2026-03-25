import { useState } from "react";
import { motion } from "framer-motion";
import "./ReviewForm.css";

const ReviewForm = () => {
  const [formData, setFormData] = useState({ name: "", text: "", rating: 5 });
  const [submitted, setSubmitted] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div 
        className="review-success"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <span className="success-icon">✅</span>
        <h3>Thank You!</h3>
        <p>Your review has been submitted and will appear after approval.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="review-form-wrapper"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="review-form-header">
        <h3>Share Your Experience</h3>
        <p>Your feedback helps us serve you better</p>
      </div>
      <form className="review-form-body" onSubmit={handleSubmit}>
        <div className="rf-field">
          <label>Your Name</label>
          <input
            placeholder="e.g., Rajesh Kumar"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div className="rf-field">
          <label>Your Rating</label>
          <div className="star-picker">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className={`star-btn ${star <= (hoveredStar || formData.rating) ? "filled" : ""}`}
                onClick={() => setFormData({ ...formData, rating: star })}
                onMouseEnter={() => setHoveredStar(star)}
                onMouseLeave={() => setHoveredStar(0)}
              >
                ★
              </button>
            ))}
            <span className="rating-label">
              {formData.rating === 5 ? "Excellent" : formData.rating === 4 ? "Very Good" : formData.rating === 3 ? "Good" : formData.rating === 2 ? "Fair" : "Poor"}
            </span>
          </div>
        </div>

        <div className="rf-field">
          <label>Your Feedback</label>
          <textarea
            placeholder="Tell us about your experience at OrthoproIndia..."
            value={formData.text}
            onChange={(e) => setFormData({ ...formData, text: e.target.value })}
            rows={4}
            required
          />
        </div>

        <button type="submit" className="rf-submit-btn">
          Submit Review
        </button>
      </form>
    </motion.div>
  );
};

export default ReviewForm;
