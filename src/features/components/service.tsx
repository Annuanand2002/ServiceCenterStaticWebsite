const services = [
  {
    title: "Refrigerator Repair",
    description:
      "Expert repair for cooling problems, leaks, unusual noises and more.",
    icon: "❄️",
  },
  {
    title: "Washing Machine Repair",
    description:
      "Fixing drainage, spinning, vibration and other washing machine issues.",
    icon: "🫧",
  },
  {
    title: "Air Conditioner Repair",
    description:
      "Professional AC servicing and repair to keep your home comfortable.",
    icon: "❄️",
  },
  {
    title: "Microwave Repair",
    description:
      "Reliable repair for heating problems, power issues and other faults.",
    icon: "📡",
  },
];

function ServicesPreview() {
  return (
    <section id="services" className="services-preview">
      <div className="section-header">
        <p>OUR SERVICES</p>

        <h2>We Keep Your Home Running Smoothly</h2>

        <span>
          From everyday appliances to essential home systems, our technicians
          are ready to help.
        </span>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <button>Learn More →</button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ServicesPreview;