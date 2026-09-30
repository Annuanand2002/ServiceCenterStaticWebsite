import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import WhyChooseUs from '../components/WhyChooseUs';

const words = ['Good advice, before work begins', 'Careful work inside your home', 'A real person when you need help'];
export default function HomePage() {
  return <>
    <Hero />
    <div className="story-bridge"><span className="bridge-line" /><span>THE SMALL THINGS MAKE A HOME</span><span className="bridge-line" /></div>
    <ServicesPreview />
    <section className="home-story" data-reveal><div className="story-photo" role="img" aria-label="A bright, welcoming home" /><div className="story-copy"><p className="eyebrow"><span /> THE WAY WE WORK</p><h2>First, we listen.<br /><em>Then we make a plan.</em></h2><p>Repair should feel straightforward. Tell us what’s wrong, get a clear explanation, and decide what works for you before the repair begins.</p><ul>{words.map((word) => <li key={word}><span aria-hidden="true">✓</span>{word}</li>)}</ul><a href="/why-us" className="text-link">See how we care <span aria-hidden="true">↗</span></a></div></section>
    <WhyChooseUs />
    <section className="home-endorsement" data-reveal><span className="quote-mark">“</span><blockquote>Appreciated the quick response — the technician arrived promptly and fixed the issue quickly.</blockquote><div className="quote-credit"><span className="quote-rule" /><span><strong>Amritha Nikesh</strong><small>Customer feedback · Anthol</small></span></div><a href="/testimonials" className="text-link">More customer stories <span aria-hidden="true">↗</span></a></section>
    <section className="home-last"><div><p className="eyebrow eyebrow-light"><span /> YOUR HOME, BACK IN RHYTHM</p><h2>Ready when<br /><em>you need us.</em></h2></div><a className="button button-lime" href="/contact">Find your next step <span aria-hidden="true">↗</span></a></section>
  </>;
}
