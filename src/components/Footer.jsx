import React, { Component } from 'react';
import '../css/Footer.css';
import { Link } from 'react-router-dom';

export class Footer extends Component {
  handleScrollToTop = () => {
    const scrollDuration = 500; // Duration in milliseconds
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  render() {
    return (
      <div className='Footer'>
        <div className='Social-links'>
          <section>
            <h4>Social Connects</h4>
            <ul className='links'>
              <li><Link to='/facebook' onClick={this.handleScrollToTop}>Facebook</Link></li>
              <li><Link to='/instagram' onClick={this.handleScrollToTop}>Instagram</Link></li>
              <li><Link to='/twitter' onClick={this.handleScrollToTop}>Twitter</Link></li>
              <li><Link to='/Github' onClick={this.handleScrollToTop}>Github</Link></li>
            </ul>
          </section>
          <section>
            <h4>Important Links</h4>
            <ul className='links'>
              <li><Link to='/' onClick={this.handleScrollToTop}>Home</Link></li>
              <li><Link to='/about' onClick={this.handleScrollToTop}>About Us</Link></li>
              <li><Link to='/careers' onClick={this.handleScrollToTop}>Careers</Link></li>
              <li><Link to='/help' onClick={this.handleScrollToTop}>Help</Link></li>
            </ul>
          </section>
          <section>
            <h4>Important Features</h4>
            <ul className='links'>
              <li><Link to="/explore/graphics" onClick={this.handleScrollToTop}>Graphic Design</Link></li>
              <li><Link to="/explore/development" onClick={this.handleScrollToTop}>Development</Link></li>
              <li><Link to="/explore/architecture" onClick={this.handleScrollToTop}>Architecture</Link></li>
              <li><Link to="/explore/marketing" onClick={this.handleScrollToTop}>Marketing</Link></li>
            </ul>
          </section>
        </div>
        <p>All Rights are reserved @Balram Shukla </p>
      </div>
    );
  }
}

export default Footer;
