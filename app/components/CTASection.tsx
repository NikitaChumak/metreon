import React from 'react';

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.33334 8H12.6667M12.6667 8L8.00001 3.33333M12.6667 8L8.00001 12.6667" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-overlay">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2 className="cta-title">
                Ready to grow your business with us?
              </h2>
              <p className="cta-subtitle">
                Start your partnership with Europe's trusted electronics distributor today. No middlemen, no delays.
              </p>
            </div>
            
            <div className="cta-action">
              <button className="btn btn-cta">
                Become a Customer
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
