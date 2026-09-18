import React, { useState } from 'react';


const Banner = ({ name = "Abhijay" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="banner-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src="src/assets/ban.png" 
        alt="DEV@Deakin Banner" 
        className="banner-image"
      />
      <div className={`banner-hover-bar ${isHovered ? 'active' : ''}`}>
        <span>Hey, I'm {name}</span>
      </div>
    </div>
  );
};

export default Banner;
