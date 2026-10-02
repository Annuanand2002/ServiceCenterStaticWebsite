import { useEffect, useState } from 'react';

// 1. The baseline internal paths
const rawLinks = [
  ['Services', '/services'], ['About', '/about'], ['Gallery', '/gallery'],
  ['Why Us', '/why-us'], ['Reviews', '/testimonials'], ['Contact', '/contact'],
];

// 2. The repo name prefix required for GitHub Pages
const repoPrefix = '/ServiceCenterStaticWebsite';

// 3. Map the links to automatically include the repo prefix for their href targets
const links = rawLinks.map(([label, to]) => [label, `${repoPrefix}${to}`]);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // 4. Read raw path and strip the repo prefix so active state highlights work locally and remotely
  let currentPath = window.location.pathname;
  if (currentPath.startsWith(repoPrefix)) {
    currentPath = currentPath.substring(repoPrefix.length);
  }
  const location = currentPath.replace(/\/+\$/, '') || '/';

  useEffect(() => setOpen(false), [location]);
  
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return <header className="navbar reference-navbar">
    <div className="navbar-container">
      {/* 5. Update Home link targets to map to the root of the repo directory */}
      <a href={`${repoPrefix}/`} className="brand" aria-label="Wetech home">
        <span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none"><path d="M4 22 24 5l20 17M10 19v23h28V19M18 42V29h12v13M13 22l11-10 11 10" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/><path d="m20 23 5-5 4 4-6 6v6l-5 4v-9l2-2" fill="currentColor"/></svg></span>
        <span>we<span className="brand-accent">tech</span><small>HOME APPLIANCE CARE</small></span>
      </a>
      <button className={`menu-toggle ${open ? 'is-open' : ''}`} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}><span /><span /></button>
      <nav id="primary-navigation" className={`navbar-links ${open ? 'is-open' : ''}`} aria-label="Main navigation">
        <a href={`${repoPrefix}/`} className={`home-link ${location === '/' ? 'active' : ''}`}>Home</a>
        {/* 6. Render the prefixed href paths, matching against un-prefixed active paths */}
        {links.map(([label, href], index) => {
          const rawPath = rawLinks[index][1];
          return <a key={href} href={href} className={location === rawPath ? 'active' : ''}>{label}</a>;
        })}
      </nav>
      <div className="nav-actions">
        <a href="tel:+919995513149" className="nav-phone" aria-label="Call Wetech at +91 99955 13149"><span className="nav-phone-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M6.6 3.8 9.2 3l2.1 5-2.1 1.7a15.1 15.1 0 0 0 5.1 5.1l1.7-2.1 5 2.1-.8 2.6a2.4 2.4 0 0 1-2.6 1.7A16.2 16.2 0 0 1 4.9 6.4a2.4 2.4 0 0 1 1.7-2.6Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span><strong>+91 99955 13149</strong><small>Call for service</small></span></a>
        <a href="https://wa.me/919995513149" className="nav-cta" target="_blank" rel="noreferrer"><svg className="calendar-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3.5" y="5" width="17" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.8"/><path d="M7.5 3v4M16.5 3v4M4 9h16M8 12.5h2M14 12.5h2M8 16h2M14 16h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg> Book a service</a>
      </div>
    </div>
  </header>;
}
