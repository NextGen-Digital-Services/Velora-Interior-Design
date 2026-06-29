/* FILE: src/pages/BlogPage.jsx */
import React, { useState } from 'react';
import { FaCalendarAlt, FaUser, FaTimes, FaQuoteLeft } from 'react-icons/fa';
import { SectionLabel } from '../components/ui/SectionLabel';
import { blogPosts } from '../data/blogPosts';

export const BlogPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [readingPost, setReadingPost] = useState(null);

  const filters = ['All', 'Design Tips', 'Project Stories', 'Trends', 'Material Guide'];

  const filteredPosts = activeFilter === 'All' 
    ? blogPosts 
    : blogPosts.filter((post) => post.category === activeFilter);

  const handleReadPost = (post) => {
    setReadingPost(post);
  };

  const handleCloseReader = () => {
    setReadingPost(null);
  };

  const heroStyle = {
    backgroundImage: "url('https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=80')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '40vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  };

  // Full article contents based on slug
  const getArticleBody = (slug) => {
    switch (slug) {
      case 'art-of-sourcing-natural-marbles':
        return (
          <div className="article-body">
            <p>Marble has long been the definitive medium of luxury. However, in contemporary high-end design, selecting stone goes far beyond choosing a color. True design excellence requires tracing block origins, understanding geological veins, and enforcing rigid bookmatching. At Velora, we source our Calacatta directly from the Apuan Alps of Carrara, hand-selecting slabs that offer the ideal balance between bold grey veining and clean white backgrounds.</p>
            <h4 className="article-subheading">Geological Vein Mapping</h4>
            <p>We work closely with local stonemasons to map the natural structural lines of each slab digitally before cutting. Slabs are cut sequentially from a single block to allow for symmetrical 'bookmatched' placement. This technique creates a mirrored flow of lines that turns a structural wall cladding or an island waterfall counter into an organic, natural art piece.</p>
            <blockquote className="article-pull-quote">
              <FaQuoteLeft />
              "Stone vein matching is the ultimate signature of custom luxury architecture. It communicates structural permanence and artistic intent."
            </blockquote>
            <p>Maintenance is the second key consideration. We seal our premium stones with advanced, deep-penetrating water-repellant composites that guard against acidic stains while maintaining the natural breathability and matte texture of the marble surface.</p>
          </div>
        );
      case 'designing-double-height-foyers':
        return (
          <div className="article-body">
            <p>Double-height entryways make a grand visual statement, but they also present significant structural design challenges. Without proper zoning, these spaces can feel cold, echoey, and uninviting. The objective of luxury design is to maintain the feeling of grand architectural scale while introducing warm, grounding zoning elements near the floor plane.</p>
            <h4 className="article-subheading">Lighting Profiles & Scale</h4>
            <p>The centerpiece of any double-height entryway is the decorative lighting profile. Standard lighting fixtures disappear in spaces with 6-meter clearances. We install bespoke suspended chandeliers that drop down to about 2.8 meters, creating an anchor point. Vertical wood veneers or fluted stone wall paneling are utilized to draw the eye upward while providing structural acoustic dampening that prevents vocal echoing.</p>
            <blockquote className="article-pull-quote">
              <FaQuoteLeft />
              "Zoning the air plane in high-ceiling entryways prevents the room from feeling like a public train terminal."
            </blockquote>
            <p>We also configure secondary ambient lighting loops, like vertical recessed LED strips, to illuminate wall panels softly from bottom to top, turning massive wall structures into warm glowing architectural elements at night.</p>
          </div>
        );
      case 'acoustic-harmony-corporate-hq':
        return (
          <div className="article-body">
            <p>In modern corporate headquarters, open-plan workspaces are standard. However, the resulting lack of privacy and high noise levels can lead to cognitive fatigue and drop employee productivity. For a leading tech venture office project, Velora engineered an acoustic layout that dampens ambient noise without building solid drywall boxes.</p>
            <h4 className="article-subheading">Acoustic Paneling & Sound Isolation Glass</h4>
            <p>We implemented a multi-layered acoustic solution. Meeting pods were framed with double-glazed acoustic glass walls that block vocal frequencies. Ceilings were fitted with custom-suspended felt baffles configured in geometric patterns that absorb traveling sound waves. Walls in collaborative breakout zones were wrapped in rich wool-felt paneling that serves as a beautiful backdrop while absorbing high-frequency background clatter.</p>
            <blockquote className="article-pull-quote">
              <FaQuoteLeft />
              "Acoustic comfort is the ultimate invisible amenity of the premium modern workplace."
            </blockquote>
            <p>The result is a workplace where multiple meetings can take place concurrently in adjacent spaces without sound bleed, retaining a feeling of open, connected synergy.</p>
          </div>
        );
      case 'minimalism-brutalism-luxury-shift':
        return (
          <div className="article-body">
            <p>Luxury design trends have evolved. The clinical, ultra-white minimalist spaces of the past decade are yielding to a warmer, more tactile aesthetic. Clients are demanding spaces that feel grounded, utilizing raw materials, matte finishes, and brutalist structural volumes paired with soft plush fabrics.</p>
            <h4 className="article-subheading">Tactile Warmth & Raw Textures</h4>
            <p>This shift centers on material honesty. Instead of lacquered glossy surfaces, we install micro-finished concrete, raw dark slates, and fumed oaks showing deep natural grains. Comfort is introduced through fabric contrast: grouping raw concrete fireplace surrounds with thick bouclé wool armchairs, velvet drapery, and rich leather cushions.</p>
            <blockquote className="article-pull-quote">
              <FaQuoteLeft />
              "Luxury is no longer about polishing a surface until it shines; it is about celebrating the raw texture of the material."
            </blockquote>
            <p>At Velora, we master this balance by ensuring that every hard, monolithic structure is met by soft tactile fabrics, creating a sanctuary that feels both protective and incredibly comfortable.</p>
          </div>
        );
      default:
        return (
          <div className="article-body">
            <p>This article details the specific architectural methods and layout configurations we utilize at Velora Interior Design to achieve a premium result. Designing luxury spaces requires strict coordination between material selections, mechanical layouts, and ambient lighting grids.</p>
            <p>We believe that true design prestige is in the execution. By managing all phases of design, sourcing, and on-site oversight turnkey, we ensure that the initial vision discuss during our consultations matches the final handover result exactly.</p>
            <blockquote className="article-pull-quote">
              <FaQuoteLeft />
              "Exclusivity requires looking beyond the standard catalog, creating custom runs that exist only in your space."
            </blockquote>
            <p>For more details on our spatial designs or to request a private project discussion, visit our contact page to schedule a consultation with our senior designers.</p>
          </div>
        );
    }
  };

  return (
    <div className="blog-page-container">
      {/* 1. Hero Strip */}
      <div style={heroStyle}>
        <div className="blog-hero-overlay"></div>
        <div className="blog-hero-content reveal">
          <SectionLabel text="Design Journal" />
          <h1 className="blog-hero-title">Design Insights</h1>
        </div>
      </div>

      <div className="container" style={{ padding: '60px 24px 100px 24px' }}>
        
        {/* 2. Category Filter Bar */}
        <div className="filter-bar reveal">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-button clickable ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* 3. Blog Cards Grid */}
        <div className="blog-grid">
          {filteredPosts.map((post, index) => (
            <article key={post.id} className="blog-card reveal stagger-1">
              <div className="blog-card-image-wrapper">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="blog-card-image"
                  loading="lazy"
                />
                <span className="blog-card-category-badge">{post.category}</span>
              </div>
              
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <span className="meta-item">
                    <FaCalendarAlt />
                    {post.date}
                  </span>
                  <span className="meta-item">
                    <FaUser />
                    By Velora
                  </span>
                </div>
                
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                
                <button 
                  onClick={() => handleReadPost(post)}
                  className="blog-card-link-btn clickable"
                >
                  Read Article &rarr;
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* 4. Blog Reader Modal Overlay */}
      {readingPost && (
        <div className="blog-reader-overlay">
          <div className="blog-reader-modal">
            {/* Header image */}
            <div 
              className="blog-reader-hero"
              style={{ backgroundImage: `url(${readingPost.image})` }}
            >
              <button className="blog-reader-close-btn clickable" onClick={handleCloseReader}>
                <FaTimes />
              </button>
              <div className="blog-reader-hero-content">
                <span className="blog-reader-category">{readingPost.category}</span>
                <h2 className="blog-reader-title">{readingPost.title}</h2>
                <div className="blog-reader-meta">
                  <span><FaCalendarAlt /> {readingPost.date}</span>
                  <span><FaUser /> By Velora Design</span>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="blog-reader-content">
              {getArticleBody(readingPost.slug)}
              
              <div style={{ marginTop: '40px', borderTop: '1px solid rgba(245, 240, 232, 0.1)', paddingTop: '30px', textAlign: 'center' }}>
                <span className="blog-reader-closing-tag">Velora Interior Design Journal</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles for Blog Page */}
      <style>{`
        .blog-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(26, 26, 26, 0.7);
          z-index: 1;
        }
        .blog-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
        }
        .blog-hero-title {
          font-family: var(--font-display);
          font-size: 52px;
          color: var(--color-white);
          margin-top: 10px;
        }
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        .blog-card {
          background: var(--color-slate);
          border: 1px solid rgba(245, 240, 232, 0.05);
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .blog-card-image-wrapper {
          position: relative;
          aspect-ratio: 16/10;
          overflow: hidden;
        }
        .blog-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition);
        }
        .blog-card:hover .blog-card-image {
          transform: scale(1.06);
        }
        .blog-card-category-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          background: var(--color-gold);
          color: var(--color-bg);
          font-family: var(--font-body);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 4px 10px;
          font-weight: 600;
        }
        .blog-card-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .blog-card-meta {
          display: flex;
          gap: 16px;
          font-family: var(--font-body);
          font-size: 12px;
          color: var(--color-gold);
          margin-bottom: 12px;
          opacity: 0.8;
        }
        .meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .blog-card-title {
          font-family: var(--font-display);
          font-size: 22px;
          color: var(--color-white);
          line-height: 1.3;
          margin-bottom: 12px;
          font-weight: 500;
        }
        .blog-card-excerpt {
          font-size: 14px;
          line-height: 1.6;
          opacity: 0.75;
          margin-bottom: 20px;
        }
        .blog-card-link-btn {
          margin-top: auto;
          background: transparent;
          border: none;
          color: var(--color-gold);
          font-family: var(--font-body);
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          text-align: left;
          cursor: pointer;
          transition: var(--transition);
        }
        .blog-card-link-btn:hover {
          color: var(--color-white);
          padding-left: 5px;
        }

        /* Reader Modal */
        .blog-reader-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(26, 26, 26, 0.9);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 24px;
        }
        .blog-reader-modal {
          width: 100%;
          max-width: 800px;
          background: var(--color-slate);
          max-height: 90vh;
          overflow-y: auto;
          border: 1px solid rgba(201, 169, 110, 0.2);
          position: relative;
        }
        .blog-reader-hero {
          background-size: cover;
          background-position: center;
          height: 350px;
          position: relative;
          display: flex;
          align-items: flex-end;
          padding: 40px;
        }
        .blog-reader-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(37,37,37,0.95) 0%, rgba(37,37,37,0.2) 100%);
        }
        .blog-reader-hero-content {
          position: relative;
          z-index: 2;
        }
        .blog-reader-close-btn {
          position: absolute;
          top: 24px;
          right: 24px;
          background: rgba(26, 26, 26, 0.8);
          border: none;
          color: var(--color-white);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          cursor: pointer;
          transition: var(--transition);
          z-index: 10;
        }
        .blog-reader-close-btn:hover {
          background: var(--color-gold);
          color: var(--color-bg);
        }
        .blog-reader-category {
          font-family: var(--font-accent);
          font-style: italic;
          color: var(--color-gold);
          font-size: 16px;
          letter-spacing: 0.1em;
        }
        .blog-reader-title {
          font-family: var(--font-display);
          font-size: 32px;
          color: var(--color-white);
          margin-top: 8px;
          margin-bottom: 12px;
          line-height: 1.2;
        }
        .blog-reader-meta {
          display: flex;
          gap: 20px;
          font-size: 12px;
          color: var(--color-ivory);
          opacity: 0.8;
        }
        .blog-reader-meta span {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .blog-reader-content {
          padding: 40px;
        }
        .article-body p {
          font-size: 15px;
          line-height: 1.8;
          opacity: 0.85;
          margin-bottom: 20px;
        }
        .article-subheading {
          font-family: var(--font-display);
          font-size: 20px;
          color: var(--color-gold);
          margin-top: 30px;
          margin-bottom: 16px;
        }
        .article-pull-quote {
          margin: 30px 0;
          padding: 24px;
          background: rgba(26, 26, 26, 0.5);
          border-left: 2px solid var(--color-gold);
          font-family: var(--font-accent);
          font-style: italic;
          font-size: 18px;
          color: var(--color-white);
          line-height: 1.5;
          position: relative;
        }
        .article-pull-quote svg {
          font-size: 24px;
          color: var(--color-gold);
          opacity: 0.2;
          margin-bottom: 10px;
          display: block;
        }
        .blog-reader-closing-tag {
          font-family: var(--font-accent);
          font-style: italic;
          color: var(--color-gold);
          font-size: 16px;
          letter-spacing: 0.1em;
        }
        @media (max-width: 991px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }
        }
        @media (max-width: 768px) {
          .blog-hero-title {
            font-size: 36px;
          }
          .blog-grid {
            grid-template-columns: 1fr;
          }
          .blog-reader-hero {
            height: 250px;
            padding: 20px;
          }
          .blog-reader-title {
            font-size: 22px;
          }
          .blog-reader-content {
            padding: 24px 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogPage;
