/* FILE: src/pages/ServicesPage.jsx */
import React from 'react';
import * as MdIcons from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Button } from '../components/ui/Button';
import { services } from '../data/services';

export const ServicesPage = () => {
  const heroStyle = {
    backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '40vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  };

  return (
    <div className="services-page-container">
      {/* 1. Hero Strip */}
      <div style={heroStyle}>
        <div className="services-hero-overlay"></div>
        <div className="services-hero-content reveal">
          <SectionLabel text="Our Capabilities" />
          <h1 className="services-hero-title">Exclusive Interior Services</h1>
        </div>
      </div>

      {/* 2. Alternating Services Sections */}
      {services.map((service, index) => {
        const IconComponent = MdIcons[service.icon] || MdIcons.MdHelpOutline;
        const isOdd = index % 2 !== 0;

        return (
          <section 
            key={service.id} 
            className={`service-strip-section reveal ${isOdd ? 'odd' : 'even'}`}
          >
            <div className="container">
              <div className="service-strip-grid">
                
                {/* Image Column */}
                <div className="service-strip-image-col">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="service-strip-image"
                    loading="lazy"
                  />
                </div>

                {/* Content Column */}
                <div className="service-strip-content-col">
                  <div className="service-strip-icon-wrapper">
                    <IconComponent />
                  </div>
                  <h2 className="service-strip-title">{service.title}</h2>
                  <p className="service-strip-desc">{service.description}</p>
                  
                  <div className="service-inclusions-list">
                    <h4 className="inclusions-heading">What We Deliver:</h4>
                    <ul>
                      {service.inclusions.map((item, idx) => (
                        <li key={idx} className="inclusion-item">
                          <FaCheck className="check-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-cta-btn">
                    <Button variant="outline" size="md" href="/contact">
                      Request Consultation &rarr;
                    </Button>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Divider line between services, except the last one */}
            {index < services.length - 1 && (
              <div className="container">
                <div className="services-strip-divider"></div>
              </div>
            )}
          </section>
        );
      })}

      {/* Custom CSS for Services Page */}
      <style>{`
        .services-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(26, 26, 26, 0.7);
          z-index: 1;
        }
        .services-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
        }
        .services-hero-title {
          font-family: var(--font-display);
          font-size: 52px;
          color: var(--color-white);
          margin-top: 10px;
        }
        .service-strip-section {
          padding: 80px 0;
          background-color: var(--color-bg);
        }
        .service-strip-section.odd {
          background-color: var(--color-slate);
        }
        .service-strip-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
        }
        .service-strip-section.odd .service-strip-grid {
          grid-template-columns: 0.9fr 1.1fr;
        }
        .service-strip-section.odd .service-strip-image-col {
          order: 2;
        }
        .service-strip-section.odd .service-strip-content-col {
          order: 1;
        }
        .service-strip-image {
          width: 100%;
          height: 480px;
          object-fit: cover;
          border-left: 2.5px solid var(--color-gold);
        }
        .service-strip-section.odd .service-strip-image {
          border-left: none;
          border-right: 2.5px solid var(--color-gold);
        }
        .service-strip-icon-wrapper {
          font-size: 40px;
          color: var(--color-gold);
          margin-bottom: 16px;
          display: inline-block;
        }
        .service-strip-title {
          font-family: var(--font-display);
          font-size: 34px;
          color: var(--color-white);
          margin-bottom: 20px;
          font-weight: 500;
        }
        .service-strip-desc {
          font-size: 15.5px;
          line-height: 1.7;
          opacity: 0.8;
          margin-bottom: 30px;
        }
        .service-inclusions-list {
          margin-bottom: 30px;
        }
        .inclusions-heading {
          font-family: var(--font-body);
          font-size: 13px;
          text-transform: uppercase;
          color: var(--color-gold);
          letter-spacing: 0.1em;
          margin-bottom: 16px;
        }
        .inclusion-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14.5px;
          color: var(--color-ivory);
          margin-bottom: 12px;
          list-style: none;
        }
        .check-icon {
          color: var(--color-gold);
          font-size: 12px;
          flex-shrink: 0;
        }
        .services-strip-divider {
          width: 100%;
          height: 1px;
          background: rgba(201, 169, 110, 0.1);
          margin-top: 80px;
        }
        @media (max-width: 991px) {
          .service-strip-grid, .service-strip-section.odd .service-strip-grid {
            grid-template-columns: 1fr !important;
            gap: 40px;
          }
          .service-strip-image-col, .service-strip-section.odd .service-strip-image-col {
            order: 1 !important;
          }
          .service-strip-content-col, .service-strip-section.odd .service-strip-content-col {
            order: 2 !important;
          }
          .service-strip-image {
            height: 350px;
            border-left: 2.5px solid var(--color-gold) !important;
            border-right: none !important;
          }
        }
        @media (max-width: 768px) {
          .services-hero-title {
            font-size: 36px;
          }
          .service-strip-title {
            font-size: 26px;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;
