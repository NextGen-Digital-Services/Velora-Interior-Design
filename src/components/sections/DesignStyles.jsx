/* FILE: src/components/sections/DesignStyles.jsx */
import React from 'react';
import { SectionLabel } from '../ui/SectionLabel';
import { SectionHeading } from '../ui/SectionHeading';
import { designStyles } from '../../data/designStyles';

export const DesignStyles = () => {
  return (
    <section className="section-padding reveal">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <SectionLabel text="Aesthetic Masterclass" />
          <SectionHeading 
            title="Design Aesthetics We Master" 
            subtitle="From streamlined modern layouts to bold geometric structures, we deliver spaces built with highly intentional artistic direction."
          />
        </div>

        {/* Horizontal scrollable container */}
        <div className="horizontal-scroll-container reveal">
          {designStyles.map((style) => (
            <div key={style.id} className="scroll-card">
              <img 
                src={style.image} 
                alt={style.name} 
                className="scroll-card-image"
                loading="lazy"
              />
              <div className="scroll-card-overlay">
                <h3 className="scroll-card-title">{style.name}</h3>
                <p className="scroll-card-desc">{style.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignStyles;
