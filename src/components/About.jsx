import React from 'react';
import '../css/About.css';
import Image from '../images/Logo.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-container">
      <div className="color-area">
        <img src={Image} alt="Logo" className="logo-about" />
      </div>
      <div className="about-content">
        <Header />
        <WhatWeAre />
        <WhyChooseUs />
        <Careers />
        <OurVision />
      </div>
    </div>
  );
};

const Header = () => (
  <header>
    <h1>About Us</h1>
    <p>
      Welcome to <strong>[Marketplace Name]</strong>, a dynamic online platform that bridges the gap
      between talented professionals and businesses in need. Our mission is to create
      opportunities for individuals to showcase their skills while enabling recruiters to find
      the perfect match for their unique requirements.
    </p>
    <p>At present, we specialize in connecting seekers and recruiters in the fields of:</p>
    <ul>
      <li><strong>Graphic Design</strong></li>
      <li><strong>Development</strong></li>
      <li><strong>Advertisement</strong></li>
      <li><strong>Architecture</strong></li>
      <li><strong>Marketing</strong></li>
      <li><strong>Marketing</strong></li>
      <li><strong>Illustration</strong></li>
    </ul>
    <p>
      All our services are 100% online, ensuring a seamless and efficient process for both seekers
      and recruiters. With an ever-growing pool of achievers, we aim to expand into new domains
      and provide a comprehensive range of services.
    </p>
  </header>
);

const WhatWeAre = () => (
  <section>
    <h2>What We Are</h2>
    <p>
      <strong>[Marketplace Name]</strong> is more than just a platform – it’s a thriving community
      of professionals and businesses working together to achieve success.
    </p>
    <div className="columns">
      <Column title="For Seekers">
        <ul>
          <li>Create a professional profile</li>
          <li>Showcase your portfolio</li>
          <li>Be discovered by recruiters seeking your expertise</li>
        </ul>
      </Column>
      <Column title="For Recruiters">
        <ul>
          <li>Access a curated talent pool</li>
          <li>Hire employees who align perfectly with your goals and requirements</li>
        </ul>
      </Column>
    </div>
    <p>We are committed to fostering innovation, collaboration, and excellence.</p>
  </section>
);

const WhyChooseUs = () => (
  <section>
    <h2>Why Choose Us</h2>
    <ul>
      <li><strong>Quality Talent:</strong> We connect you with verified professionals who excel in their fields.</li>
      <li><strong>Efficient Hiring:</strong> Save time with our streamlined hiring process.</li>
      <li><strong>Growth-Oriented:</strong> Whether you’re a seeker or a recruiter, we’re here to help you grow.</li>
    </ul>
  </section>
);

const Careers = () => (
  <section>
    <h2>Careers</h2>
    <p>Join our journey as we revolutionize how talent meets opportunity!</p>
    <ul>
      <li><strong>We’re Hiring!</strong> Be part of a forward-thinking company that values creativity and innovation.</li>
      <li><strong>Explore Roles:</strong> From tech to marketing, we’re always looking for passionate individuals to join our team.</li>
    </ul>
    <p>
      If you’re ready to be part of something big, check out our <Link to="/careers" >Careers</Link> page for open positions.
    </p>
  </section>
);

const OurVision = () => (
  <section>
    <h2>Our Vision</h2>
    <p>
      We envision a future where talent knows no boundaries, and opportunities are accessible to all. As we
      expand into new domains, we remain dedicated to providing a platform where creativity and
      professionalism thrive.
    </p>
    <p>Let’s shape the future of work together.</p>
  </section>
);

const Column = ({ title, children }) => (
  <div className="column">
    <h3>{title}</h3>
    {children}
  </div>
);

export default About;