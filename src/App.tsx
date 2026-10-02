import Navbar from './features/components/navbar';
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
  // 1. Check if a redirect parameter exists from 404.html
  const urlParams = new URLSearchParams(window.location.search);
  const redirectedPath = urlParams.get('p');

  let pathname = window.location.pathname;

  // 2. If we came from a redirect, use that path instead and clean up the URL window state
  if (redirectedPath) {
    pathname = '/' + redirectedPath.replace(/~and~/g, '&');
    // Clean up the browser URL bar so the "?p=" query string is hidden from users
    window.history.replaceState(null, '', window.location.pathname + (pathname === '/' ? '' : pathname.substring(1)));
  } else {
    // Standard path resolution logic for normal navigation loops
    const repoPrefix = '/ServiceCenterStaticWebsite';
    if (pathname.startsWith(repoPrefix)) {
      pathname = pathname.substring(repoPrefix.length);
    }
  }

  // 3. Clean up trailing slashes and select the active page component
  pathname = pathname.replace(/\/+$/, '') || '/';
  const Page = pages[pathname] ?? HomePage;

  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <ScrollMotion pathname={pathname} />
    <div className="scroll-progress" aria-hidden="true"><span /></div>
    <Navbar />
    <main id="main-content" className="route-stage"><Page /></main>
    <Footer />
    <a className="mobile-book" href="https://wa.me" target="_blank" rel="noreferrer"><span aria-hidden="true">↗</span> Book a repair</a>
  </>;
}



export default App;
