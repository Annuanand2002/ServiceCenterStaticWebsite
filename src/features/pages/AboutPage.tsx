import PageHero from '../components/PageHero';

const values = [
  ['01', 'Respect for your time', 'We know a broken appliance can throw a whole day off. We work to make getting help feel straightforward.'],
  ['02', 'Clear communication', 'We explain what we find and keep the conversation open before repair work begins.'],
  ['03', 'Careful workmanship', 'Our technicians bring practical experience and attention to the work inside your home.'],
  ['04', 'Service close to home', 'We serve homes across Ernakulam and Thrissur, with a local team ready to help.'],
];
export default function AboutPage() {
  return <><PageHero eyebrow="A LITTLE ABOUT US" title="Good work is" accent="personal." intro="We’re Wetech: a home appliance repair team helping households across Ernakulam and Thrissur get back to their day." number="02" />
    <section className="about-story page-section" data-reveal><div className="about-story-art"><span className="about-sun" /><span className="about-art-label">HOME IS THE<br />EVERYDAY.</span><span className="about-art-sub">WE TAKE CARE OF THE DETAILS.</span></div><div className="about-story-copy"><p className="eyebrow"><span /> WHY WE SHOW UP</p><h2>Because small<br />things make a<br /><em>big difference.</em></h2><p>A washing machine that works. A cool room on a warm day. Dinner that makes it to the table. When an appliance stops doing its job, the whole rhythm of home changes.</p><p>Our job is to make the next step feel easier—with helpful people, practical know-how, and a thoughtful repair experience from the first conversation.</p><a className="text-link" href="/services">What we repair <span>↗</span></a></div></section>
    <section className="values-section"><div className="values-heading" data-reveal><p className="eyebrow"><span /> WHAT WE BELIEVE</p><h2>The details are<br /><em>the difference.</em></h2></div><div className="values-list">{values.map(([no,title,description]) => <article className="value-row" key={no} data-reveal><span>{no}</span><div><h3>{title}</h3><p>{description}</p></div><i aria-hidden="true">✳</i></article>)}</div></section>
  </>;
}
