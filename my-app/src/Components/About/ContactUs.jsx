import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact-section">
      <div className="contact-title">
        <p>— Contact</p>
        <h2>Contact Us</h2>
      </div>
      <div className="contact-container">
        <div className="contact-form">
          <form>
            <div className="form-row">
              <input type="text" placeholder="Name *" required />
              <input type="email" placeholder="E-mail *" required />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message" rows="5"></textarea>
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
        <div className="contact-map">
          <iframe
            title="Gouri Market Complex Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.359167204695!2d85.80643847398622!3d20.285395312897418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19091f41eb2aff%3A0x1ccc1c97753bbfb9!2sGouri%20Market%20Complex!5e0!3m2!1sen!2sin!4v1747139853220!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
