import PageHero from '../components/PageHero';

const questions = [
  ['How often should I schedule AC maintenance?', 'Regular servicing helps keep an air conditioner working efficiently. The right interval depends on how often you use it and the conditions around your home. Contact us and we can help you decide what makes sense.'],
  ['What washing machine problems can you help with?', 'We can help diagnose common issues such as drainage trouble, spin-cycle problems, leaks, unusual vibration, and machines that will not start. Tell us what you are noticing when you get in touch.'],
  ['Are there safety risks with AC repair?', 'Air conditioning systems involve electrical components and refrigerants. Please switch the unit off if you notice a burning smell, sparking, or exposed wiring, and contact a qualified technician rather than opening the unit yourself.'],
  ['What should I do if my washing machine is leaking?', 'If it is safe, stop the cycle, switch off the machine, and turn off its water supply. Avoid touching wet electrical connections. Contact us so we can help with the next step.'],
  ['Which areas do you serve?', 'Wetech serves customers across Ernakulam and Thrissur. Contact us with your locality and appliance details so we can confirm availability.'],
  ['How do I book a service?', 'Call or message us on WhatsApp. Share the appliance type, the issue you are seeing, and your area. Our team can then guide you through the next step.'],
];
export default function FaqPage() {
  return <><PageHero eyebrow="GOOD QUESTIONS" title="A few things" accent="you might wonder." intro="Straight answers to help you feel more comfortable before booking an appliance repair." number="05" />
    <section className="faq-section page-section"><div className="faq-aside" data-reveal><p className="eyebrow"><span /> HERE TO HELP</p><h2>Still have<br /><em>a question?</em></h2><p>We’re happy to talk it through. Tell us what’s going on and we’ll do our best to point you in the right direction.</p><a className="button button-dark" href="/contact">Contact Wetech <span>↗</span></a></div><div className="faq-list">{questions.map(([question, answer], index) => <details className="faq-item" key={question} data-reveal><summary><span className="faq-no">0{index + 1}</span><span>{question}</span><i aria-hidden="true">+</i></summary><p>{answer}</p></details>)}</div></section>
  </>;
}
