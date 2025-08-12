import React from 'react';

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-content">
          <div className="stats-image">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop" 
              alt="Modern warehouse with organized shelving"
            />
          </div>
          
          <div className="stats-text">
            <h2 className="stats-title">Real results. Measurable growth.</h2>
            <p className="stats-description">
              We support over 500+ B2B clients with fast logistics, stable prices, and personalized 
              service. Here's what we achieved together.
            </p>
            
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">42,263</div>
                <div className="stat-label">shipped units last year</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">€23M+</div>
                <div className="stat-label">in annual turnover</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">repeat order rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
