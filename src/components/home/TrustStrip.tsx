import "./Trust.css";

const TrustStrip = () => {
  return (
    <section className="trust-section">
  <div className="container trust-grid">

    <div className="trust-card">
      <div className="trust-icon">✔</div>
      <h3>Certified Experts</h3>
      <p>Experienced prosthetic & orthotic specialists.</p>
    </div>

    <div className="trust-card">
      <div className="trust-icon">⚙</div>
      <h3>Advanced Technology</h3>
      <p>3D scanning & modern rehabilitation systems.</p>
    </div>

    <div className="trust-card">
      <div className="trust-icon">💙</div>
      <h3>Personalized Care</h3>
      <p>Custom treatment plans for every patient.</p>
    </div>

    <div className="trust-card">
      <div className="trust-icon">🌍</div>
      <h3>International Standards</h3>
      <p>World-class clinical protocols & hygiene.</p>
    </div>

  </div>
</section>
  );
};

export default TrustStrip;