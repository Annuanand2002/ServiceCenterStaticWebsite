import PageHero from '../components/PageHero';

const stories = [
  { quote: 'Appreciated the quick response provided by Wetech. The technician arrived promptly and fixed the issue quickly.', name: 'Amritha Nikesh', area: 'Anthol, Thrissur', mark: 'A' },
  { quote: 'Appreciated the fast and reliable service. The technician arrived on time and fixed the issue quickly.', name: 'Nissam Ahmmed', area: 'Edappally, Ernakulam', mark: 'N' },
  { quote: 'Appreciated the professional and efficient service. The price was right and the work was completed satisfactorily.', name: 'Jerrom Fernandos', area: 'Vyttila, Ernakulam', mark: 'J' },
];
export default function TestimonialsPage() {
  return <><PageHero eyebrow="KIND WORDS, REAL HOMES" title="The best part" accent="is getting it right." intro="A few notes from customers who invited us into their homes to help." number="06" />
    <section className="testimonial-grid page-section">{stories.map((story, i) => <article className="testimonial-card" key={story.name} data-reveal><span className="quote-mark">“</span><p>{story.quote}</p><div className="testimonial-by"><span className="customer-mark">{story.mark}</span><span><strong>{story.name}</strong><small>{story.area}</small></span><span className="review-index">0{i + 1}</span></div></article>)}</section>
    <p className="review-note">Customer feedback shared on Wetech’s website.</p>
  </>;
}
