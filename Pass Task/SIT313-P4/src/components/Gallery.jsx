import React from 'react';
import { galleryImages } from '../data';

const Gallery = () => {
  return (
    <section className="gallery-section" id="gallery">
      <h2 className="section-title">My photos</h2>
      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.url} alt={image.title} className="gallery-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
