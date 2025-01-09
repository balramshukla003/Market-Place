import React, { useState, useEffect } from 'react';
import '../css/Explore.css';
import { Link } from 'react-router-dom';
import Cards from './Cards.jsx';

const Explore = () => {
    const pathname = window.location.pathname;
    const lastSegment = pathname.split('/').pop();

    const categories = [
        { name: 'Graphic Design', type: 'graphics' },
        { name: 'Development', type: 'development' },
        { name: 'Architecture', type: 'architecture' },
        { name: 'Advertisement', type: 'advertisement' },
        { name: 'Marketing', type: 'marketing' },
        { name: 'Illustration', type: 'illustration' },
    ];

    const placeholders = {
        graphics: "Search for Graphics Design",
        development: "Search for Development",
        architecture: "Search for Architecture",
        advertisement: "Search for Advertisement",
        marketing: "Search for Marketing",
        illustration: "Search for Illustration",
    };

    const [activeLink, setActiveLink] = useState({});

    const handleLinkClick = (type, linkName) => {
        setActiveLink((prev) => ({ ...prev, [type]: linkName }));
    };

    useEffect(() => {
        if (categories.some((category) => category.type === lastSegment)) {
            handleLinkClick('category', lastSegment);
        }
    }, [lastSegment]);


    return (
        <>
            <div className="explore-nav">
                <input
                    type="text"
                    placeholder={placeholders[lastSegment] || "Search jobs"}
                />
                <button>Search</button>
            </div>

            <div className="explore-container">
                <div className="explore-sidebar">
                    <div className="Section">
                        <h3>Hiring Method</h3>
                        {['Hourly', 'Weekly', 'Permanent'].map((method) => (
                            <Link to={`/explore/${lastSegment}#${method}`}
                                key={method}
                                className={activeLink.method === method ? 'active' : ''}
                                onClick={() => handleLinkClick('method', method)}
                            >
                                {method}
                            </Link>
                        ))}
                    </div>
                    <div className="Section">
                        <h3>Category</h3>
                        {categories.map(({ name, type }) => (
                            <Link to={`/explore/${type}`}
                                key={type}
                                className={activeLink.category === type ? 'active' : ''}
                                onClick={() => handleLinkClick('category', type)}
                            >
                                {name}
                            </Link>
                        ))}
                    </div>
                </div>
                <Cards />
            </div>
        </>
    );
};

export default Explore;
