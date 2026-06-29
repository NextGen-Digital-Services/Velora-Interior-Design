/* FILE: src/components/ui/ProjectCard.jsx */
import React from 'react';
import { Link } from 'react-router-dom';

export const ProjectCard = ({ image, title, category, slug, className = '' }) => {
  return (
    <div className={`project-card-wrapper ${className}`}>
      <img 
        src={image} 
        alt={title} 
        className="project-card-image" 
        loading="lazy" 
      />
      <div className="project-card-overlay">
        <span className="project-card-category">{category}</span>
        <h3 className="project-card-title">{title}</h3>
        <Link to={`/portfolio/${slug}`} className="project-card-link clickable">
          View Details &rarr;
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
