import React from 'react'
import '../css/Careers.css'
import Image from '../assets/image.jpg'
import Image2 from '../assets/image.png'
import { Link } from 'react-router-dom'

const Careers = () => {
  return (
    <>
      <div className="careers-container">

        <div className="landing-area">
          <img src={Image} alt="image" />
          <div className="text-container">
            <h3 className="careers-heading">CAREERS</h3>
            <p className="careers-para"> Build a future you belive in</p>
            <h5>We are always looking for talented individuals to join our team.</h5>
            <Link to="" className="careers-link">View Openings</Link>
          </div>
        </div>

        <div className="landing-area2">
          <div className="section-card">
            <h1>Join us</h1>
            <h2 style={{ color: "rgba(184, 29, 68, 1)" }}>Start Your Professional Journey With Market Place</h2>
            <h5>A belief in diversity</h5>
            <p>How do you create remarkable change? By hiring, celebrating and nurturing the best people-from all walks of life.</p>
          </div>
          <div className="section-card">
            <img src={Image2} alt="" />
          </div>
        </div>

        <div className="landing-area3">
          <h2>Why Market Place?</h2>
        </div>

      </div>
    </>
  )
}

export default Careers
