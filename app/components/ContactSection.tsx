import React from 'react';

const ContactSection = () => {
  const locations = [
    {
      country: "Poland",
      flag: "🇵🇱",
      address: "4140 Parker Rd. Allentown\nNew Mexico, 31134"
    },
    {
      country: "Germany", 
      flag: "🇩🇪",
      address: "1901 Thornridge Cir. Shiloh\nHawaii, 81063"
    },
    {
      country: "United Arab Emirates",
      flag: "🇦🇪", 
      address: "4140 Parker Rd. Allentown\nNew Mexico, 31134"
    },
    {
      country: "Japan",
      flag: "🇯🇵",
      address: "1901 Thornridge Cir. Shiloh\nHawaii, 81063"
    },
    {
      country: "Hong Kong",
      flag: "🇭🇰",
      address: "1901 Thornridge Cir. Shiloh\nHawaii, 81063"
    }
  ];

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-header">
          <div className="section-title-wrapper">
            <h2 className="section-title">Where to find us</h2>
            <p className="section-subtitle">
              We operate globally with teams across Europe, Asia, and the Middle East.
            </p>
          </div>
        </div>

        <div className="world-map-container">
          <div className="world-map">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets%2Fd2efaff45d384460b52b89d63c0cf509%2F16045ce060b949439ddee43f62beffdb?format=webp&width=800"
              alt="World map showing global locations"
              className="map-image"
            />
            
            {/* Location tooltips */}
            <div className="location-tooltip location-germany">
              <span className="flag">🇩🇪</span>
              <span>Germany</span>
            </div>
            
            <div className="location-tooltip location-poland">
              <span className="flag">🇵🇱</span>
              <span>Poland</span>
            </div>
            
            <div className="location-tooltip location-uae">
              <span className="flag">🇦🇪</span>
              <span>United Arab Emirates</span>
            </div>
            
            <div className="location-tooltip location-japan">
              <span className="flag">🇯🇵</span>
              <span>Japan</span>
            </div>
            
            <div className="location-tooltip location-hk">
              <span className="flag">🇭🇰</span>
              <span>Hong Kong</span>
            </div>
          </div>
        </div>

        <div className="contact-content">
          <div className="contact-form-section">
            <div className="form-header">
              <h3 className="form-title">Get in touch with our team</h3>
              <p className="form-subtitle">
                Need a quote, help with an order, or want to talk to your local manager? 
                Just send us a message — we reply fast.
              </p>
            </div>

            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Name" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Email" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Type your message" rows={4}></textarea>
              </div>

              <div className="form-group checkbox-group">
                <input type="checkbox" id="privacy" />
                <label htmlFor="privacy">
                  By selecting this you agree to our <a href="#" className="privacy-link">Privacy Policy</a>.
                </label>
              </div>

              <button type="submit" className="btn btn-dark btn-full">
                Send message
              </button>
            </form>
          </div>

          <div className="contact-separator"></div>

          <div className="contact-info-section">
            <div className="locations-grid">
              {locations.map((location, index) => (
                <div key={index} className="location-item">
                  <div className="location-header">
                    <span className="location-flag">{location.flag}</span>
                    <h4 className="location-country">{location.country}</h4>
                  </div>
                  <p className="location-address">{location.address}</p>
                </div>
              ))}
            </div>

            <div className="contact-separator-horizontal"></div>

            <div className="contact-details">
              <h4 className="contact-details-title">Contact us directly</h4>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <h5>WhatsApp</h5>
                  <div className="contact-value">
                    <span className="contact-icon">📱</span>
                    <span>078 6439 0024</span>
                  </div>
                </div>

                <div className="contact-method">
                  <h5>Phone</h5>
                  <div className="contact-value">
                    <span className="contact-icon">📞</span>
                    <span>078 6439 0024</span>
                  </div>
                </div>
              </div>

              <div className="contact-methods">
                <div className="contact-method">
                  <h5>Email</h5>
                  <a href="mailto:sales@example.com" className="contact-link">
                    sales@example.com
                  </a>
                </div>

                <div className="contact-method">
                  <h5>For job inquiries</h5>
                  <a href="mailto:careers@metreon.group" className="contact-link">
                    careers@metreon.group
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
