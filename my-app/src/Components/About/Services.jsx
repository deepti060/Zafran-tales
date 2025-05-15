import React from 'react';
import './Services.css';

const biryaniServices = [
  {
    title: 'Authentic Spices',
    image: '/Capture1.PNG',
    description: 'We use freshly ground spices to deliver unforgettable flavors rooted in tradition.'
  },
  {
    title: 'Signature Dishes',
    image: '/Capture3.PNG',
    description: 'Our chef’s curated specials bring bold creativity to every plate.'
  },
  {
    title: 'Royal Dining',
    image: '/Capture2.PNG',
    description: 'Enjoy a regal atmosphere and fine dining that reflects rich heritage.'
  },
];

const nonVegServices = [
  {
    title: 'Outdoor Catering',
    image: '/Capture5.jpg',
    description: 'Let us bring the taste of Zafran Tales to your special events and occasions.'
  },
  {
    title: 'Live Cooking Shows',
    image: '/Capture4.PNG',
    description: 'Watch culinary art unfold with live cooking that entertains and delights.'
  },
  {
    title: 'Private Events',
    image: '/Capture6.PNG',
    description: 'Exclusive spaces and customized menus for unforgettable private celebrations.'
  },
];

const drinksServices = [
  {
    title: 'Mocktails & Refreshers',
    image: '/drink1.jpg',
    description: 'Cool down with our expertly mixed mocktails and traditional refreshers.'
  },
  {
    title: 'Lassi Varieties',
    image: '/drink2.jpg',
    description: 'Sweet, salted, and mango lassi crafted with pure yogurt and a hint of tradition.'
  },
  {
    title: 'Masala Chai',
    image: '/drink3.jpg',
    description: 'End your meal with our famous aromatic Indian masala chai.'
  },
];

const Services = () => {
  const renderSection = (title, items) => (
    <div className="service-group">
      <h2 className="section-subheading">{title}</h2>
      <div className="services-grid">
        {items.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="image-wrapper">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="services-section">
      {renderSection('Biryani & Specials', biryaniServices)}
      {renderSection('Non-Veg Main Course', nonVegServices)}
      {renderSection('Drinks & Beverages', drinksServices)}
    </section>
  );
};

export default Services;
