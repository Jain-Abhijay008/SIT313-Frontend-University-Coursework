import React, { useState } from 'react';

const Banner = ({ name = "Manender" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="banner-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src="src/assets/ban.png" 
        alt="My Banner" 
        className="banner-image"
      />
      <div className={`banner-hover-bar ${isHovered ? 'active' : ''}`}>
        <span>Hey, I'm Abhijay Jain</span>
      </div>
    </div>
  );
};

export default Banner;
