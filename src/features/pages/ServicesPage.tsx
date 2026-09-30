import PageHero from '../components/PageHero';

const services = [
  { no: '01', title: 'Air Conditioner Repair', label: 'AC SERVICE', detail: 'Cooling problems, water leaks, unusual sounds, or a system that simply won’t start. We help diagnose the issue and talk through the repair.' },
  { no: '02', title: 'Washing Machine Repair', label: 'LAUNDRY CARE', detail: 'Drainage trouble, spin-cycle problems, excess vibration, and other faults that make laundry day harder than it should be.' },
  { no: '03', title: 'Oven Repair', label: 'KITCHEN CARE', detail: 'Heating and power faults that interrupt the everyday rituals of cooking. We’ll help identify what’s going on.' },
  { no: '04', title: 'Refrigerator Repair', label: 'KITCHEN CARE', detail: 'When cooling becomes inconsistent, water appears where it shouldn’t, or a new sound raises a question.' },
  { no: '05', title: 'Microwave Repair', label: 'KITCHEN CARE', detail: 'Heating issues and power faults that make a useful everyday appliance difficult to rely on.' },
];

export default function ServicesPage() {
  return <><PageHero eyebrow="WHAT WE CAN HELP WITH" title="The things that" accent="keep home going." intro="Appliance repair and servicing with clear communication, careful hands, and respect for your home." number="01" />
    <section className="service-list page-section">{services.map((service) => <article className="service-row" key={service.no} data-reveal><span className="service-row-no">{service.no}</span><div><span className="service-detail">{service.label}</span><h2>{service.title}</h2></div><p>{service.detail}</p><a className="round-link" href="/contact" aria-label={`Ask about ${service.title}`}>↗</a></article>)}</section>
    <section className="process-band" data-reveal><p className="eyebrow eyebrow-light"><span /> FROM HELLO TO HOME AGAIN</p><h2>Simple, from the<br /><em>first conversation.</em></h2><div className="process-steps"><div><span>01</span><strong>Tell us what’s happening</strong></div><div><span>02</span><strong>We diagnose and explain</strong></div><div><span>03</span><strong>You choose how to proceed</strong></div></div><a className="button button-lime" href="/contact">Talk to our team <span>↗</span></a></section>
  </>;
}
