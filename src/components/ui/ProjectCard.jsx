/* FILE: src/components/ui/ProjectCard.jsx */
import React from 'react';
import { Link } from 'react-router-dom';

export const ProjectCard = (props) => {
  const project = props.project || {
    heroImage: props.image,
    image: props.image,
    title: props.title,
    category: props.category,
    slug: props.slug
  };
  const className = props.className || '';

  return (
    <div className={`project-card project-card-wrapper ${className}`}>
      <img 
        src={project.heroImage || project.image} 
        alt={project.title}
        onError={(e) => { e.target.src = 'https://picsum.photos/seed/fallback/800/600' }}
        style={{width:'100%', height:'100%', objectFit:'cover'}}
      />
      <div className="project-card-overlay">
        <span className="project-card-category">{project.category}</span>
        <h3 className="project-card-title">{project.title}</h3>
        <Link to={`/portfolio/${project.slug}`} className="project-card-link clickable">
          View Details &rarr;
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
