/* FILE: src/components/sections/HeroSection.jsx */
import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { Button } from '../ui/Button';
import { SectionLabel } from '../ui/SectionLabel';

export const HeroSection = () => {
  const handleScrollDown = () => {
    const nextSection = document.getElementById('stats-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const bgStyle = {
    backgroundImage: "url('https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1920&q=80')"
  };

  return (
    <section className="hero-container" style={bgStyle}>
      <div className="hero-overlay"></div>
      <div className="hero-content reveal">
        <SectionLabel text="Luxury Interior Design" />
        <h1 className="hero-title">Designing Spaces That Speak Luxury</h1>
        <p className="hero-description">
          Premium interior architecture and turnkey designs for high-end residences, corporate workspaces, and custom yacht designs.
        </p>
        <div className="hero-btn-group">
          <Button variant="primary" size="lg" href="/portfolio">
            Explore Portfolio
          </Button>
          <Button variant="outline" size="lg" href="/contact">
            Contact Us
          </Button>
        </div>
      </div>
      <div className="hero-scroll-indicator clickable" onClick={handleScrollDown}>
        <span className="hero-scroll-line"></span>
        <FaArrowDown className="hero-scroll-icon" />
      </div>
    </section>
  );
};

export default HeroSection;
