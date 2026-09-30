import { useEffect, useState } from 'react';

const links = [
  ['Services', '/services'], ['About Us', '/about'], ['Gallery', '/gallery'],
  ['Why Choose Us', '/why-us'], ['FAQ', '/faq'], ['Testimonials', '/testimonials'], ['Contact', '/contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = window.location.pathname.replace(/\/+$/, '') || '/';
  useEffect(() => setOpen(false), [location]);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return <header className="navbar">
    <div className="navbar-container">
      <a href="/" className="brand" aria-label="Wetech home"><span className="brand-mark" aria-hidden="true"><span /><span /><span /></span><span>we<span className="brand-accent">tech</span><small>HOME APPLIANCE CARE</small></span></a>
      <button className={`menu-toggle ${open ? 'is-open' : ''}`} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}><span /><span /></button>
      <nav id="primary-navigation" className={`navbar-links ${open ? 'is-open' : ''}`} aria-label="Main navigation">
        <a href="/" className={`home-link ${location === '/' ? 'active' : ''}`}>Home</a>
        {links.map(([label, to]) => <a key={to} href={to} className={location === to ? 'active' : ''}>{label}</a>)}
        <a href="https://wa.me/919995513149" className="nav-cta" target="_blank" rel="noreferrer">Book a service <span aria-hidden="true">↗</span></a>
      </nav>
    </div>
  </header>;
}
