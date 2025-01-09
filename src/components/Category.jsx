import React from 'react'
import '../css/Category.css'
import Image1 from '../images/Copywriting.jpg';
import Image2 from '../images/Graphic Design.jpg';
import Image3 from '../images/Development.jpg';
import Image4 from '../images/Architecture.jpg';
import { useNavigate } from 'react-router-dom';

const Category = () => {

    const navigate = useNavigate();

    const locationURL = (category) => {
        const scrollDuration = 1000;
        const scrollStep = -window.scrollY / (scrollDuration / 15);
        
        if (category == "explore") {
            navigate('/explore');
        } else {
            navigate(`/explore/${category}`);
        }
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else { clearInterval(scrollInterval); }
        }, 15);
    };


    return (
        <div className="category-outer">

            <div className="category-head">
                <h3>Browse Category</h3>
                <h3
                    className="see-all"
                    onClick={() => locationURL('explore')}
                >see all</h3>
            </div>

            <div className="category-cards">
                <section><img src={Image1} alt="Image"   onClick={() => locationURL('copywriting')}/>
                    <h4>Copywriting</h4></section>
                <section><img src={Image2} alt="Image"   onClick={() => locationURL('graphics')}/>
                    <h4>Graphic Design</h4></section>
                <section><img src={Image3} alt="Image"   onClick={() => locationURL('development')}/>
                    <h4>Development</h4></section>
                <section><img src={Image4} alt="Image"   onClick={() => locationURL('architecture')}/>
                    <h4>Architecture</h4></section>
            </div>

            <div className="category-btn">
                <button onClick={() => locationURL("advertisement")}>Advertising</button>
                <button onClick={() => locationURL("marketing")}>Marketing</button>
                <button onClick={() => locationURL("graphics")}>Design</button>
                <button onClick={() => locationURL("illustration")}>Illustration</button>
                <button onClick={() => locationURL("arts")}>Visual Arts</button>
            </div>
            <div className="line"></div>
        </div>
    )
}

export default Category
