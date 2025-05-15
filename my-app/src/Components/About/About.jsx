import React from 'react';
import './About.css';
import { FaSmile, FaHandshake, FaBriefcase, FaCoffee } from 'react-icons/fa';

const About = () => {
    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-image">
                    <img src="/about1.png" alt="About" />
                </div>
                <div className="about-content">
                    <h4><span style={{ color: "#ff007a", fontSize: "30px" }}>-</span> TRADEVENTURES OVERVIEW</h4>
                    <h2>ABOUT <span className="highlight">MOHANTY TRADEVENTURES</span></h2>
                    <p>
                        At MOHANTY TRADEVENTURES, we specialize in strategic ventures across multiple sectors, including restaurant development, Coca-Cola distribution, and water bottle branding. With a strong presence in the beverage and hospitality industries, we deliver comprehensive business solutions tailored for modern enterprises.
                    </p>
                    <ul>
                        <li>✔ Partnered with top restaurants to scale operations and elevate customer experiences</li>
                        <li>✔ Authorized distribution of Coca-Cola and related beverage products across regions</li>
                        <li>✔ Custom water bottle branding and logistics for events and hospitality businesses</li>
                        <li>✔ Proven strategies that transform startups into sustainable trade ventures</li>
                    </ul>

                    <button className="about-btn">ABOUT US</button>
                </div>
            </div>
            <div className="stats-container">
                <div className="stat-card">
                    <div className="icon"><FaSmile /></div>
                    <h3>653</h3>
                    <p>Project Done</p>
                </div>
                <div className="stat-card">
                    <div className="icon"><FaHandshake /></div>
                    <h3>465</h3>
                    <p>Trusted Users</p>
                </div>
                <div className="stat-card">
                    <div className="icon"><FaBriefcase /></div>
                    <h3>784</h3>
                    <p>Projects Done</p>
                </div>
                <div className="stat-card">
                    <div className="icon"><FaCoffee /></div>
                    <h3>123</h3>
                    <p>Coffee Cup</p>
                </div>
            </div>
        </section>
    );
};

export default About;