function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">Trusted Home Appliance Repair</p>

        <h1>
          Reliable Repairs.
          <br />
          <span>Right at Your Door.</span>
        </h1>

        <p className="hero-description">
          Fast and professional repair services for your home appliances.
          Our experienced technicians help get your appliances back to
          working perfectly.
        </p>

        <div className="hero-actions">
          <button>Book a Service</button>
          <button>View Services</button>
        </div>

        <div className="hero-trust">
          <div>
            <strong>10+</strong>
            <span>Years Experience</span>
          </div>

          <div>
            <strong>5K+</strong>
            <span>Repairs Completed</span>
          </div>

          <div>
            <strong>4.8/5</strong>
            <span>Customer Rating</span>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="/images/technician.png"
          alt="Home appliance repair technician"
        />
      </div>
    </section>
  );
}

export default Hero;