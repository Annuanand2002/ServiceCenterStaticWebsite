import PageHero from '../components/PageHero';
import WhyChooseUs from '../components/WhyChooseUs';
export default function WhyPage() {
  return <><PageHero eyebrow="THE WETECH DIFFERENCE" title="A repair should" accent="feel reassuring." intro="A good service experience is more than the fix. It’s how you’re treated all the way through." number="04" />
    <WhyChooseUs />
    <section className="why-proof page-section"><p className="eyebrow"><span /> OUR PROMISE, IN PRACTICE</p><div className="promise-grid"><article data-reveal><span>01</span><h3>We listen first</h3><p>Your description matters. We start by understanding what you’re experiencing.</p></article><article data-reveal><span>02</span><h3>We explain clearly</h3><p>We tell you what we find and discuss the work before moving forward.</p></article><article data-reveal><span>03</span><h3>We respect your home</h3><p>We approach each visit with care for your space and the people who live in it.</p></article></div><a href="/testimonials" className="text-link">Hear from our customers <span>↗</span></a></section>
  </>;
}
