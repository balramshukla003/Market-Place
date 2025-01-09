import React from 'react'
import IMage from '../images/image.png'
import '../css/Careers.css'
import { Link } from 'react-router-dom'

const Careers = () => {
  return (
    <div className="careers-outer">

      <div className="carrers-cont">
        <div className="careers-text">
          <h3 className="careers-heading">CAREERS</h3>
          <p style={{
            fontFamily: 'Houschka-medium',
            fontStyle: 'normal',
            fontSize: '4rem',
            lineHeight: '4rem',
            marginBottom: ' 2pc',
            width: '75%'
          }} className="careers-para">
            Build a future you belive in</p>
          <h5>We are always looking for talented individuals to join our team.</h5>
          <Link to="" className="careers-link">View Openings</Link>
        </div>
      </div>

      <div className="careers-other">
        <div className="carers-other-inner">
          <h1>Join us</h1>
          <h2>Start Your Professional Journey With Market Place</h2>
          <h5>A belief in diversity</h5>
          <p>How do you create remarkable change? By hiring, celebrating and nurturing the best people-from all walks of life.</p>
        </div>
        <div className="carers-other-inner">
          <img src={IMage} alt="" />
        </div>
      </div>
      <div className="careers-other2">
        <h2 style={{ color: 'white', padding: '20px' }}>Why Market Place?</h2>
      </div>
    </div >
  )
}

export default Careers
