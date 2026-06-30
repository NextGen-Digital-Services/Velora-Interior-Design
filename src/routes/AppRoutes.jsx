/* FILE: src/routes/AppRoutes.jsx */
import React, { useEffect } from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import WhatsAppButton from '../components/common/WhatsAppButton';
import BackToTop from '../components/common/BackToTop';
import CustomCursor from '../components/common/CustomCursor';

// Import Pages
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ServicesPage from '../pages/ServicesPage';
import PortfolioPage from '../pages/PortfolioPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';
import ProcessPage from '../pages/ProcessPage';
import TestimonialsPage from '../pages/TestimonialsPage';
import ContactPage from '../pages/ContactPage';

// Scroll Restoration & Dynamic Reveal Re-binding Component
const ScrollToTopAndBindAnimations = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Give React 150ms to finish route rendering and commit DOM elements
    const timer = setTimeout(() => {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);
      const elementsToReveal = document.querySelectorAll(
        '.reveal, .reveal-fade, .reveal-left, .reveal-right'
      );

      elementsToReveal.forEach((el) => {
        // Only observe if it's not already visible to preserve state
        if (!el.classList.contains('visible')) {
          observer.observe(el);
        }
      });
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

// Global Layout Wrap
const Layout = () => {
  return (
    <>
      <ScrollToTopAndBindAnimations />
      <CustomCursor />
      <Navbar />
      
      <main style={{ minHeight: '80vh', paddingTop: '90px' }} className="main-content-panel">
        <Outlet />
      </main>
      
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="portfolio/:slug" element={<ProjectDetailPage />} />
        <Route path="process" element={<ProcessPage />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
