import React from 'react';
import { CheckBadgeIcon } from './Icons';

const Hero = () => {
  return (
    <div className="hero-content">
      <div className="banner">
        <div className="banner-icon">
          <CheckBadgeIcon />
        </div>
        <div className="banner-text">
          500+ B2B clients — with EU warehouse & 5-day delivery from Asia
        </div>
      </div>

      <div className="hero-text-section">
        <div className="hero-title-section">
          <h1 className="hero-title">
            <span className="highlight-cyan-light">Trusted partner in </span>
            <span className="highlight-cyan">Electronics Wholesale</span>
            <span className="highlight-cyan-light"> across Europe</span>
          </h1>
          
          <p className="hero-subtitle">
            We connect global tech brands with B2B buyers — fast, flexible, and reliable. 20 years 
            of experience, direct import from Asia, and EU warehouses.
          </p>
        </div>

        <div className="hero-buttons">
          <button className="btn btn-primary">Become Сustomer</button>
          <button className="btn btn-outline">Explore Product Categories</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
