import React from 'react'
import Image from '../images/homeBG.jpg';
import '../css/Landing.css';
import { Link } from 'react-router-dom';
const Landing = () => {
    return (
        <div className="outer">
            <img src={Image} alt="Image" />
            <div className='inner'>
                <div className="innerLink">
                    <h5>Hire</h5>
                    <h5>Provide</h5>
                </div>
                <div className="innerCont">
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, labore. Quia enim error obcaecati debitis voluptatum quae quod corporis perspiciatis minima tenetur incidunt nemo, exercitationem provident, quis ab magni ea!</h4>
                    <div className='btn-box'>
                        <input type="text" placeholder='What are you looking for?' />
                        <button>Search</button> <br />
                        <Link to="/explore">AdvanceSearch</Link>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Landing;
