import React, { useEffect, useState } from 'react';
import './HeroSlider.css';

const slides = [
  {
    image: '/bg.jpeg',
    heading: "We Are Coming With",
    highlight: "MOHANTY",
    subheading: "Business Pro.",
    description: "From Coca-Cola partnerships to premium restaurant setups, MOHANTY Business Pro provides everything you need to succeed—including strategic product placement like water bottles that reinforce your brand."
  },
  {
    image: 'bg1.jpg',
    heading: "Boost Your",
    highlight: "Startup",
    subheading: "With Us.",
    description: "Elevate your startup with expert guidance and industry connections. Whether you're launching a modern restaurant, distributing Coca-Cola, or branding water bottles, we help you make an impact."
  }
];


const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section
      className="hero"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${slide.image})` }}
    >
      <div className="badge">Always Top Rated</div>
      <h1>{slide.heading} <span className="highlight">{slide.highlight}</span> {slide.subheading}</h1>
      <p>{slide.description}</p>
      <div className="hero-buttons">
        <button className="get-started">Get Started</button>
        <button className="learn-more">Learn More</button>
      </div>
    </section>
  );
};

export default HeroSlider;