import React from 'react';

const CareersSection = () => {
  const jobOpenings = [
    {
      title: "Sales Manager",
      description: "Drive our global sales growth by building relationships with key electronics distributors and manufacturers.",
      link: "Explore more"
    },
    {
      title: "Supply Chain Specialist", 
      description: "Optimize our logistics and sourcing operations to ensure fast, reliable delivery across Europe and Asia.",
      link: "Explore more"
    },
    {
      title: "Business Development Manager",
      description: "Expand our market presence by identifying new opportunities and strategic partnerships in electronics wholesale.",
      link: "Explore more"
    },
    {
      title: "Customer Success Manager",
      description: "Ensure our B2B clients receive exceptional service and support throughout their partnership journey with us.",
      link: "Explore more"
    }
  ];

  return (
    <section className="careers-section">
      <div className="container">
        <div className="careers-content">
          <div className="careers-text">
            <div className="careers-header">
              <h2 className="careers-title">We're hiring</h2>
              <p className="careers-subtitle">
                Join a fast-growing international team. Explore our open roles and 
                become part of our success story.
              </p>
            </div>
            <div className="careers-action">
              <button className="btn btn-dark">View all jobs</button>
            </div>
          </div>

          <div className="jobs-grid">
            {jobOpenings.map((job, index) => (
              <div key={index} className="job-card">
                <div className="job-content">
                  <h3 className="job-title">{job.title}</h3>
                  <p className="job-description">{job.description}</p>
                  <button className="job-link">{job.link}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
