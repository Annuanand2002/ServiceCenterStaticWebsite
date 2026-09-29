const benefits = [
  {
    number: "01",
    title: "Experienced Technicians",
    description:
      "Our technicians have the skills and experience to diagnose and repair a wide range of home appliances.",
  },
  {
    number: "02",
    title: "Quick Response",
    description:
      "We understand that a broken appliance can disrupt your day. That's why we focus on quick and convenient service.",
  },
  {
    number: "03",
    title: "Transparent Pricing",
    description:
      "Know the repair cost before the work begins. We believe in clear and honest pricing.",
  },
  {
    number: "04",
    title: "Quality Service",
    description:
      "We focus on dependable repairs and quality workmanship to keep your appliances running longer.",
  },
];

function WhyChooseUs() {
  return (
    <section id="why-us" className="why-choose-us">
      <div className="why-content">
        <p className="section-label">WHY CHOOSE US</p>

        <h2>
          Repair Service You
          <br />
          Can Count On.
        </h2>

        <p>
          We make appliance repair simple, convenient and reliable. From
          diagnosis to repair, our team is focused on providing a smooth
          experience for every customer.
        </p>

        <button>About Our Company →</button>
      </div>

      <div className="benefits">
        {benefits.map((benefit) => (
          <article className="benefit" key={benefit.number}>
            <span>{benefit.number}</span>

            <div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;