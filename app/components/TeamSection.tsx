import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Ricky Smith",
      title: "CEO",
      description: "Leads the company with a clear vision, guiding strategic growth and fostering innovation to ensure long-term success.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Kurt Bates", 
      title: "Innovation Specialist",
      description: "Drives innovation efforts, exploring new technologies and strategies to keep the company ahead of industry trends.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dennis Callis",
      title: "Designer", 
      description: "Creates beautiful, innovative, and functional designs that effectively communicate the brand and engage the audience.",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Frances Swann",
      title: "UI/UX Designer",
      description: "Crafts seamless, intuitive user interfaces and experiences that ensure products are both easy to use and visually appealing.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Corina McCoy",
      title: "Culture Curator", 
      description: "Nurtures company culture, ensuring a positive, inclusive environment where creativity, collaboration, and growth thrive.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Rhonda Rhodes",
      title: "Innovation Specialist",
      description: "Shapes and communicates the brand's identity, developing strategies that enhance recognition and build lasting customer loyalty.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="team-section">
      <div className="container">
        <div className="team-header">
          <h2 className="team-title">Real people. Real connection.</h2>
          <p className="team-subtitle">
            Meet our team — the people behind our operations. We speak your language 
            and help you get what you need, when you need it.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="member-header">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="member-avatar"
                />
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-title">{member.title}</p>
                </div>
              </div>
              <p className="member-description">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
