import React from 'react';

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.33334 8H12.6667M12.6667 8L8.00001 3.33333M12.6667 8L8.00001 12.6667" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PartnershipCTA = () => {
  return (
    <section className="partnership-cta">
      <div className="container">
        <div className="partnership-container">
          <div className="partnership-content">
            <div className="partnership-text">
              <h2 className="partnership-title">
                Let's build a long-term partnership — no forms, no delays.
              </h2>
              <p className="partnership-subtitle">
                We speak your language. Choose your manager, get personal support, 
                and start sourcing electronics reliably.
              </p>
              <div className="partnership-action">
                <button className="btn btn-partnership">
                  Start working with us
                  <ArrowRightIcon />
                </button>
              </div>
            </div>
            
            <div className="partnership-image">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2Fd2efaff45d384460b52b89d63c0cf509%2F285c5ed5f9014ad9a606ed51dd625df3?format=webp&width=800"
                alt="Team working together in modern office"
                className="partnership-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipCTA;
