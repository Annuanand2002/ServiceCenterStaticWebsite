function Hero() {
  return <section id="home" className="hero reference-hero">
    <div className="hero-content">
      <p className="eyebrow eyebrow-light"><span /> APPLIANCE REPAIR SERVICE</p>
      <h1>Keeping<br />Your Home<br /><em>Running</em></h1>
      <p className="hero-description">Expert repairs for air conditioners, washing machines, refrigerators and kitchen appliances—at home across Ernakulam and Thrissur.</p>
      <div className="hero-actions">
        <a className="hero-explore" href="#services" aria-label="Explore our appliance repair services"><span className="hero-explore-arrow" aria-hidden="true">→</span><span>EXPLORE SERVICES</span></a>
      </div>
      <div className="hero-trust" aria-label="What to expect from Wetech">
        <div className="hero-trust-item"><span className="trust-icon" aria-hidden="true">✓</span><span><strong>Experienced</strong><small>Technicians</small></span></div>
        <span className="trust-divider" aria-hidden="true" />
        <div className="hero-trust-item"><span className="trust-icon" aria-hidden="true">✳</span><span><strong>Clear repair</strong><small>Plans</small></span></div>
        <span className="trust-divider" aria-hidden="true" />
        <div className="hero-trust-item"><span className="trust-icon" aria-hidden="true">⌖</span><span><strong>Central</strong><small>Kerala</small></span></div>
      </div>
    </div>
    <div className="hero-visual reference-hero-visual">
     <img className="hero-photo" src="/ServiceCenterStaticWebsite/images/wetech-hero.png" alt="Wetech technician servicing a wall-mounted air conditioner in a home" />
      <div className="photo-shade" aria-hidden="true" />
    </div>
    <svg className="hero-bottom-wave" viewBox="0 0 1600 190" preserveAspectRatio="none" aria-hidden="true">
      <path fill="#C6A15B" d="M0 38 C150 128 270 174 455 137 C650 98 735 111 900 143 C1080 178 1302 129 1437 58 C1500 25 1550 9 1600 13 L1600 190 L0 190Z" />
      <path fill="#F4EEE3" d="M0 47 C150 137 270 183 455 146 C650 107 735 120 900 152 C1080 187 1302 138 1437 67 C1500 34 1550 18 1600 22 L1600 190 L0 190Z" />
    </svg>
    <a href="#services" className="scroll-cue"><span className="scroll-stem" /> SCROLL</a>
  </section>;
}

export default Hero;
