const steps = [
  { number: '01', title: 'Start with a conversation', description: 'Tell us what’s happening. We listen first, then help work out the right next step.' },
  { number: '02', title: 'Know before we begin', description: 'We explain what we find and talk through the work before a repair gets underway.' },
  { number: '03', title: 'Leave it in good hands', description: 'Our technicians bring care and experience to the details that get your home running again.' },
];

function WhyChooseUs() {
  return <section id="why-us" className="why-choose-us" data-reveal>
    <div className="why-art" aria-hidden="true"><div className="why-disc"><span className="disc-center">✳</span><span className="disc-word disc-word-one">CARE</span><span className="disc-word disc-word-two">CRAFT</span><span className="disc-orbit" /></div><span className="art-caption">A GOOD FIX FEELS<br />LIKE A DEEP BREATH.</span></div>
    <div className="why-content"><p className="eyebrow eyebrow-light"><span /> A BETTER KIND OF SERVICE</p><h2>Good repair<br />starts with <em>care.</em></h2><p className="why-lede">Trust isn’t a badge on a page. It’s how we treat you, your home, and the moment you call us.</p>
      <div className="steps">{steps.map((step) => <article className="step" key={step.number} data-reveal><span className="step-number">{step.number}</span><div><h3>{step.title}</h3><p>{step.description}</p></div><span className="step-arrow" aria-hidden="true">↗</span></article>)}</div>
      <div className="why-location"><span className="location-dot" /><span>LOCAL CARE, RIGHT HERE</span><strong>Ernakulam &amp; Thrissur</strong></div>
    </div>
  </section>;
}

export default WhyChooseUs;
