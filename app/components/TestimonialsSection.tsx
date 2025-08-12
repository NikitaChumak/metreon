import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Metreon helped us save 10+ hours per week by automating our sourcing process. We can't imagine going back!",
      name: "Kurt Bates",
      title: "Marketing Manager at BrightIdeas Inc.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "This partnership is a game-changer for our business. The quality and delivery speed are insanely good.",
      name: "Alex Buckmaster", 
      title: "Founder of TechWave.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">What our partners say</h2>
        </div>

        <div className="testimonials-content">
          {testimonials.map((testimonial, index) => (
            <React.Fragment key={index}>
              <div className="testimonial-card">
                <blockquote className="testimonial-quote">
                  "{testimonial.quote}"
                </blockquote>
                <div className="testimonial-author">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="author-avatar"
                  />
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-title">{testimonial.title}</p>
                  </div>
                </div>
              </div>
              {index < testimonials.length - 1 && (
                <div className="testimonials-separator"></div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="testimonials-cta">
          <button className="btn btn-dark btn-lg">Become a Customer</button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
