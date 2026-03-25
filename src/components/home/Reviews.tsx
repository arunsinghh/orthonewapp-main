import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Reviews.css";
import ReviewForm from "./ReviewForm";

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reviews, setReviews] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/reviews`)
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setReviews(data);
        } else {
          // Fallback to static if no reviews in DB
          setReviews([
            { name: "Rahul Sharma", text: "OrthoproIndia completely transformed my mobility journey.", rating: 5 },
            { name: "Anita Verma", text: "The rehabilitation team is highly professional.", rating: 5 }
          ]);
        }
      })
      .catch(() => {
         setReviews([
            { name: "Rahul Sharma", text: "OrthoproIndia completely transformed my mobility journey.", rating: 5 },
            { name: "Anita Verma", text: "The rehabilitation team is highly professional.", rating: 5 }
          ]);
      });
  }, []);

  return (
    <section className="reviews">

      {/* Floating Background Icons */}
      <div className="floating-medical icon-a">+</div>
      <div className="floating-medical icon-b">⚕</div>
      <div className="floating-medical icon-c">+</div>

      <div className="parallax-bg"></div>

      <div className="container">

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Patient Reviews
        </motion.h2>

        <div className="rating-badge">
          ⭐ 4.9 / 5 (200+ Google Reviews)
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000 }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="review-card large"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeIndex === index ? 1 : 0.6 }}
                transition={{ duration: 0.6 }}
              >
                <div className="quote-icon">“</div>

                <div className="stars">
                  {"★".repeat(review.rating)}
                </div>

                <p>{review.text}</p>

                <h4>{review.name}</h4>

              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <ReviewForm />

      </div>
    </section>
  );
};

export default Reviews;