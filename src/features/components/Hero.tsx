function Hero() {
  return <section id="home" className="hero">
    <div className="hero-grain" aria-hidden="true" />
    <div className="hero-content">
      <p className="eyebrow eyebrow-light"><span /> APPLIANCE CARE · ERNAKULAM &amp; THRISSUR</p>
      <h1>Home appliance repairs.<br /><em>Done with care.</em></h1>
      <p className="hero-description">AC, washing machine, refrigerator and kitchen appliance repairs at home across Ernakulam and Thrissur. Tell us what’s wrong; we’ll help you understand the next step.</p>
      <div className="hero-actions"><a className="button button-lime" href="https://wa.me/919995513149" target="_blank" rel="noreferrer">Tell us what’s wrong <span aria-hidden="true">↗</span></a><a className="button button-quiet" href="#services"><span className="play-ring" aria-hidden="true">↓</span> Explore our services</a></div>
      <div className="hero-trust"><span className="trust-spark" aria-hidden="true">✳</span><p>Clear advice. Careful work.<br /><strong>Real people who pick up.</strong></p><span className="trust-divider" /><p className="trust-location">HERE FOR HOMES<br /><strong>Across Central Kerala</strong></p></div>
    </div>
    <div className="hero-visual">
      <div className="hero-photo" role="img" aria-label="Technician carefully working on a home appliance" />
      <div className="photo-shade" />
      <div className="visual-caption"><span className="caption-kicker">THE WETECH PROMISE</span><span className="caption-title">We fix what makes<br />a house feel like home.</span><span className="caption-rule" /></div>
      <div className="floating-note"><span className="note-icon">✳</span><span><small>GOOD TO KNOW</small><strong>You hear the plan<br />before the tools come out.</strong></span></div>
      <span className="image-index">01 <i /> HOME, RESTORED</span>
    </div>
    <a href="#services" className="scroll-cue"><span className="scroll-stem" /> SCROLL TO FOLLOW THE STORY</a>
  </section>;
}

export default Hero;
