export default function Footer() {
  return <footer className="footer">
    <a href="/" className="brand brand-footer" aria-label="Wetech home"><span className="brand-mark" aria-hidden="true"><span /><span /><span /></span><span>we<span className="brand-accent">tech</span><small>HOME APPLIANCE CARE</small></span></a>
    <span className="footer-note">Good work. Good people. A home that works.</span>
    <nav className="footer-links" aria-label="Footer navigation"><a href="/services">Services</a><a href="/about">About</a><a href="/faq">FAQs</a><a href="/contact">Contact</a></nav>
    <a className="footer-email" href="mailto:support@wetech.co.in">support@wetech.co.in <span aria-hidden="true">↗</span></a>
    <span className="copyright">© {new Date().getFullYear()} Wetech</span>
  </footer>;
}
