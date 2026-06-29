/* FILE: src/components/sections/BeforeAfterSection.jsx */
import React from 'react';
import { SectionLabel } from '../ui/SectionLabel';
import { SectionHeading } from '../ui/SectionHeading';
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider';

export const BeforeAfterSection = () => {
  const transformations = [
    {
      id: 1,
      label: "Living Room",
      before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      label: "Modular Kitchen",
      before: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      label: "Master Bedroom",
      before: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      label: "Office Space",
      before: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="section-padding reveal">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <SectionLabel text="Transformations" />
          <SectionHeading 
            title="The Velora Transformation" 
            subtitle="Slide the handle to view the transition from initial raw structures to fully refined luxury architectural spaces."
          />
        </div>

        <div className="before-after-grid reveal">
          {transformations.map((item) => (
            <div key={item.id} className="before-after-item">
              <BeforeAfterSlider 
                beforeImage={item.before}
                afterImage={item.after}
                label={item.label}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
