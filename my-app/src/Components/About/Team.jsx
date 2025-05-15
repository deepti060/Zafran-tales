import React from 'react';
import './Team.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'David Walillams',
    role: 'CONSULTANT',
    image: '/team.jpg',
  },
  {
    name: 'Benjamin Mark',
    role: 'DIRECTOR',
    image: '/team.jpg',
  },
  {
    name: 'Steve Louis',
    role: 'DEVELOPER',
    image: '/team.jpg',
  },
  {
    name: 'Shawn Philip',
    role: 'DESIGNER',
    image: '/team.jpg',
  },
];

const Team = () => {
  return (
    <section className="team-section">
      <h4>— TRADEVENTURE TEAM</h4>
      <h2>EXPERIENCE TEAM</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-img" />
            <div className="team-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
            <div className="team-socials-hover">
              <span><FaFacebookF /></span>
              <span><FaInstagram /></span>
              <span><FaTwitter /></span>
              <span><FaLinkedinIn /></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
