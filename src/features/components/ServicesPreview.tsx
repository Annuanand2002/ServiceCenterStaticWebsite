const services = [
  { no: '01', title: 'Air conditioning', problem: 'When the room stops feeling like a place to unwind.', detail: 'AC repair & servicing', icon: '✳', tone: 'service-aqua' },
  { no: '02', title: 'Washing machines', problem: 'When laundry day gets stuck on pause.', detail: 'Washer repair', icon: '◌', tone: 'service-sand' },
  { no: '03', title: 'Refrigerators', problem: 'When the little hum that keeps food fresh goes quiet.', detail: 'Fridge repair', icon: '▯', tone: 'service-blue' },
  { no: '04', title: 'Ovens & microwaves', problem: 'When getting dinner on the table gets complicated.', detail: 'Kitchen appliance repair', icon: '⌁', tone: 'service-rose' },
];

function ServicesPreview() {
  return <section id="services" className="services-preview section-wrap" data-reveal>
    <div className="section-intro"><div><p className="eyebrow"><span /> THE EVERYDAY, MADE EASY</p><h2>Home has a rhythm.<br /><em>We help keep it.</em></h2></div><p className="section-aside">From the first diagnosis to the final check, we treat your home and your time with care.</p></div>
    <div className="services-grid">{services.map((service) => <article className={`service-card ${service.tone}`} key={service.no} data-reveal>
      <div className="service-card-top"><span className="service-number">{service.no} / 04</span><span className="service-icon" aria-hidden="true">{service.icon}</span></div>
      <div className="service-card-copy"><span className="service-detail">{service.detail}</span><h3>{service.title}</h3><p>{service.problem}</p></div>
      <a href={`https://wa.me/919995513149?text=${encodeURIComponent(`Hi Wetech, I need help with ${service.title.toLowerCase()}.`)}`} className="service-link" target="_blank" rel="noreferrer" aria-label={`Ask Wetech about ${service.title}`}>LET’S TALK <span aria-hidden="true">↗</span></a>
    </article>)}</div>
    <div className="services-footnote"><span className="footnote-star">✳</span><p>Something else at home stopped working? <strong>Tell us about it.</strong></p><a href="https://wa.me/919995513149" target="_blank" rel="noreferrer">We’re listening <span aria-hidden="true">↗</span></a></div>
  </section>;
}

export default ServicesPreview;
