import Navbar from './features/components/Navbar';
import ScrollMotion from './features/components/ScrollMotion';
import Footer from './features/components/Footer';
import HomePage from './features/pages/HomePage';
import ServicesPage from './features/pages/ServicesPage';
import AboutPage from './features/pages/AboutPage';
import GalleryPage from './features/pages/GalleryPage';
import WhyPage from './features/pages/WhyPage';
import FaqPage from './features/pages/FaqPage';
import TestimonialsPage from './features/pages/TestimonialsPage';
import ContactPage from './features/pages/ContactPage';
import type { ComponentType } from 'react';

const pages: Record<string, ComponentType> = {
  '/': HomePage, '/services': ServicesPage, '/about': AboutPage, '/gallery': GalleryPage,
  '/why-us': WhyPage, '/faq': FaqPage, '/testimonials': TestimonialsPage, '/contact': ContactPage,
};

function App() {
  let pathname = window.location.pathname;

  const repoPrefix = '/ServiceCenterStaticWebsite';
  if (pathname.startsWith(repoPrefix)) {
    pathname = pathname.substring(repoPrefix.length);
  }

  pathname = pathname.replace(/\/+$/, '') || '/';

  const Page = pages[pathname] ?? HomePage;

  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <ScrollMotion pathname={pathname} />
    <div className="scroll-progress" aria-hidden="true"><span /></div>
    <Navbar />
    <main id="main-content" className="route-stage"><Page /></main>
    <Footer />
    <a className="mobile-book" href="https://wa.me/919995513149" target="_blank" rel="noreferrer"><span aria-hidden="true">↗</span> Book a repair</a>
  </>;
}


export default App;
