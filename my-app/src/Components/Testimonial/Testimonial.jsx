import React, { useEffect, useState } from 'react';
import './Testimonial.css';

const testimonials = [
  {
    name: 'Daniel Wells',
    title: 'Developer',
    image: '/user1.jpeg',
    message: 'Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy.'
  },
  {
    name: 'Jessica Stone',
    title: 'Designer',
    image: '/user2.jpg',
    message: 'An amazing experience! They helped us reach our goals faster with outstanding support and service.'
  },
  {
    name: 'Mark Johnson',
    title: 'Manager',
    image: '/user3.jpg',
    message: 'Professional and efficient team. Really happy with the business solutions they provided.'
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(slide);
  }, []);

  return (
    <section className="testimonial-section">
      <div className="cta">
        <p className="small">Do You Have Any Project ?</p>
        <h2>Let's Talk About Business Solutions With Us</h2>
        <button className="cta-btn">JOIN WITH US →</button>
      </div>

      <div className="testimonials-container">
        <h4>— TESTIMONIALS</h4>
        <h2>CLIENT'S SAY</h2>

        <div className="testimonial-card">
          <p>{testimonials[currentIndex].message}</p>
          <div className="testimonial-info">
            <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
            <div>
              <h5>{testimonials[currentIndex].name}</h5>
              <span>{testimonials[currentIndex].title}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
