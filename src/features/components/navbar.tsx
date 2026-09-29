function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a href="#home" className="navbar-logo">
          Repair<span>Pro</span>
        </a>

        {/* Navigation Links */}
        <nav className="navbar-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#why-us">Why Choose Us</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* CTA */}
        <a href="#contact" className="navbar-button">
          Book a Service
        </a>

      </div>
    </header>
  );
}

export default Navbar;