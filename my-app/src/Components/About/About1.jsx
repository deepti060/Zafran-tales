import React from 'react';
import './About1.css';
import { FaUtensils, FaGlassWhiskey, FaWineBottle } from 'react-icons/fa';

const services = [
  {
    icon: <FaUtensils className="icon" />,
    title: 'Restaurant Solutions',
    description:
      'We offer end-to-end support for setting up and scaling restaurants, from interior setup to kitchen equipment and digital menus.'
  },
  {
    icon: <FaGlassWhiskey className="icon" />,
    title: 'Coca-Cola Distribution',
    description:
      'Partnered with Coca-Cola to bring world-class beverages to your business. Reliable supply chain and volume pricing.'
  },
  {
    icon: <FaWineBottle className="icon" />,
    title: 'Branded Bottle Services',
    description:
      'Get custom-branded water bottles for your events, restaurant, or corporate branding—designed and delivered with precision.'
  }
];

const About1 = () => {
  return (
    <section className="services-section1">
      <div className="services-container">
        <div className="services-card">
          {services.map((service, index) => (
            <div className="service-item" key={index}>
              {service.icon}
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="services-text">
          <span className="section-tag">MOHANTY SERVICES</span>
          <h2>SERVICES</h2>
        </div>
      </div>
    </section>
  );
};

export default About1;
