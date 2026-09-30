import { useEffect } from 'react';

export default function ScrollMotion({ pathname }: { pathname: string }) {
  useEffect(() => {
    document.documentElement.classList.add('motion-ready');
    window.scrollTo(0, 0);
    const titles: Record<string, string> = {
      '/': 'Wetech — Home appliance care, thoughtfully done.',
      '/services': 'Appliance Repair Services | Wetech',
      '/about': 'About Wetech | Home Appliance Care',
      '/gallery': 'Our Work | Wetech',
      '/why-us': 'Why Choose Wetech | Home Appliance Care',
      '/faq': 'Repair Questions Answered | Wetech',
      '/testimonials': 'Customer Stories | Wetech',
      '/contact': 'Contact Wetech | Ernakulam & Thrissur',
    };
    document.title = titles[pathname] ?? titles['/'];
    const progress = document.querySelector<HTMLElement>('.scroll-progress span');
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (progress) progress.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
      });
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    const nodes = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) nodes.forEach((node) => node.classList.add('is-visible'));
    else {
      const observer = new IntersectionObserver((entries, current) => entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); current.unobserve(entry.target); }
      }), { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });
      nodes.forEach((node) => observer.observe(node));
      return () => { observer.disconnect(); window.removeEventListener('scroll', update); window.removeEventListener('resize', update); cancelAnimationFrame(frame); };
    }
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); cancelAnimationFrame(frame); };
  }, [pathname]);
  return null;
}
