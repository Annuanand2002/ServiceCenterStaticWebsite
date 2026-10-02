import PageHero from '../components/PageHero';

export default function ContactPage() {
  return <><PageHero eyebrow="WE’RE HERE WHEN YOU NEED US" title="Tell us what’s" accent="going on." intro="A quick call or message is a good place to start. Share the appliance, what’s happening, and your area." number="07" />
    <section className="contact-page page-section"><div className="contact-card contact-primary" data-reveal><span className="contact-card-icon">↗</span><p className="eyebrow">QUICKEST WAY TO REACH US</p><h2>Let’s talk<br /><em>on WhatsApp.</em></h2><p>Send a message with your appliance and locality. Our team will help you work out the next step.</p><a className="button button-lime" href="https://wa.me/919207174921" target="_blank" rel="noreferrer">Open WhatsApp <span>↗</span></a></div><div className="contact-details"><article data-reveal><span>01 / CALL</span><h3>Prefer to talk?</h3><a href="tel:+919207174921">+91 99955 13149</a></article><article data-reveal><span>02 / EMAIL</span><h3>Write to us</h3><a href="mailto:support@wetech.co.in">support@wetech.co.in</a></article><article data-reveal><span>03 / SERVICE AREA</span><h3>Close to home</h3><p>Ernakulam &amp; Thrissur, Kerala</p></article></div></section>
  </>;
}
