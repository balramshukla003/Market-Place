import React, { useState, useEffect } from 'react';
import image from '../images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Navbar.css';
import { useAuth } from '../context/AuthProvider';

const Navbar = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    const { authUser, userLoggedIn, setUserLoggedIn, setAuthUser } = useAuth();
    const [userText, setUserText] = useState('Login');

    // Fetch user details when the component mounts or login state changes
    useEffect(() => {
        const retrievedData = JSON.parse(localStorage.getItem('userData'));

        if (retrievedData && retrievedData.userLogged) {
            setUserText(retrievedData.Name);
            setUserLoggedIn(true);
            setAuthUser({
                name: retrievedData.Name,
                email: retrievedData.Email, // Assuming Email is part of the userData
            });
        } else if (!userLoggedIn) {
            setUserText('Login');
        }
    }, [userLoggedIn, setUserLoggedIn, setAuthUser]); // Added `userLoggedIn` to trigger updates on login/logout

    // Handle logo click to navigate to the home page
    const handleLogoClick = () => {
        navigate('/');
        window.scrollTo(0, 0);
    };

    // Toggle the visibility of user details
    const toggleVisibility = () => {
        if (userLoggedIn) {
            setIsVisible((prev) => !prev); // Toggle visibility state
        } else {
            alert('You are not loggedIn');
            navigate('/login');
        }
    };

    // Logout function to reset user data and navigate to home
    const Logout = () => {
        setUserLoggedIn(false);
        setAuthUser(null); // Reset user data in context
        localStorage.removeItem('userData'); // Clear localStorage data
        setUserText('Login');
        setIsVisible(false); // Close user details
        navigate('/'); // Redirect to home
    };

    return (
        <div className='navbar'>
            <div className='upper-navbar'>
                <div className='nav-title' onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                    <img src={image} alt="Logo" />
                    <h2>Market Place</h2>
                </div>
                <div className='nav-links'>
                    <Link to="/browse-service">Browse Service</Link>
                    <Link to="/browse-request">Browse Request</Link>
                    <Link to="/post-request">Post a Request</Link>

                    <div className='nav-title' onClick={toggleVisibility}>
                        <img src={image} alt="User" />
                        <h3>{userText}</h3>
                    </div>
                </div>
            </div>
            <hr />
            <div className='lower-navbar'>
                <Link to="/explore/graphics">Graphic Design</Link>
                <Link to="/explore/development">Development</Link>
                <Link to="/explore/architecture">Architecture</Link>
                <Link to="/explore/marketing">Marketing</Link>
                <Link to="/explore/advertisement">Advertisement</Link>
                <Link to="/explore/illustration">Illustration</Link>
            </div>

            {isVisible && (
                <div className="userDetail">
                    <p className="closeBTN" onClick={toggleVisibility}>
                        X
                    </p>
                    <Link to="/user" onClick={toggleVisibility}>Profile</Link>
                    <Link onClick={toggleVisibility}>Dark Mode</Link>
                    <Link onClick={toggleVisibility}>Dashboard</Link>
                    <Link onClick={toggleVisibility}>Notifications</Link>
                    <Link onClick={Logout}>Logout</Link> {/* Logout link */}
                </div>
            )}
        </div>
    );
};

export default Navbar;
