import React from "react";
import "./FloatingContact.css";

const FloatingContact: React.FC = () => {
  return (
    <div className="floating-contact">

      <a href="tel:+918130546090" className="call">
        📞
      </a>

      <a
        href="https://wa.me/918130546090"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp"
      >
        💬
      </a>

    </div>
  );
};

export default FloatingContact;