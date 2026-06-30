/* FILE: src/pages/PortfolioPage.jsx */
import React, { useState } from 'react';
import { SectionLabel } from '../components/ui/SectionLabel';
import { ProjectCard } from '../components/ui/ProjectCard';
import { useFilteredProjects } from '../hooks/useFilteredProjects';
import { projects } from '../data/projects';

export const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Luxury Villa',
    'Penthouse',
    'Corporate Office',
    'Modern Kitchen'
  ];

  const filteredProjects = useFilteredProjects(projects, activeCategory);

  const heroStyle = {
    backgroundColor: '#0F0F0F',
    padding: '80px 24px',
    textAlign: 'center',
    borderBottom: '1px solid rgba(201, 169, 110, 0.15)'
  };

  const pageTitleStyle = {
    fontFamily: 'var(--font-display)',
    fontSize: '44px',
    color: 'var(--color-white)',
    fontWeight: '600',
    marginTop: '10px',
    display: 'inline-block',
    position: 'relative'
  };

  return (
    <div className="portfolio-page-container">
      {/* 1. Hero Strip */}
      <div style={heroStyle}>
        <SectionLabel text="Selected Works" />
        <div>
          <h1 style={pageTitleStyle}>
            Our Portfolio
            <span className="portfolio-title-underline"></span>
          </h1>
        </div>
      </div>

      <div className="container" style={{ padding: '60px 24px' }}>
        {/* 2. Filter Bar */}
        <div className="filter-bar reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-button clickable ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3. Portfolio Grid */}
        <div className="portfolio-grid reveal">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="reveal stagger-1">
              <ProjectCard
                image={project.heroImage}
                title={project.title}
                category={project.category}
                slug={project.slug}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .portfolio-title-underline {
          display: block;
          width: 80px;
          height: 1.5px;
          background-color: var(--color-gold);
          margin: 16px auto 0 auto;
        }
        @media (max-width: 768px) {
          .portfolio-page-container h1 {
            font-size: 32px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PortfolioPage;
