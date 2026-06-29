/* FILE: src/components/sections/PortfolioPreview.jsx */
import React from 'react';
import { SectionLabel } from '../ui/SectionLabel';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../ui/ProjectCard';
import { Button } from '../ui/Button';
import { projects } from '../../data/projects';

export const PortfolioPreview = () => {
  // Take first 6 projects
  const previewProjects = projects.slice(0, 6);

  return (
    <section className="section-padding reveal" style={{ backgroundColor: 'var(--color-slate)' }}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <SectionLabel text="Featured Portfolio" />
          <SectionHeading 
            title="Selected Architectural Works" 
            subtitle="Explore our elite collection of masterfully curated spaces representing structural luxury, pure materials, and rich aesthetics."
          />
        </div>

        <div className="portfolio-preview-grid">
          {previewProjects.map((project, index) => (
            <div key={project.id} className={`reveal stagger-${(index % 3) + 1}`}>
              <ProjectCard 
                image={project.heroImage}
                title={project.title}
                category={project.category}
                slug={project.slug}
              />
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px' }} className="reveal">
          <Button variant="outline" size="lg" href="/portfolio">
            Explore Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
