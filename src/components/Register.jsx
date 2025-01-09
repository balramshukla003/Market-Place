import '../css/Login.css';
import React, { useState } from 'react';
import image from '../images/draw2.jpg';
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {
    
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        console.log('Register with:', name, email, password);
    };

    const handleSocialRegister = (platform) => {
        alert(`Social Registeration with ${platform} is Comming Soon`)
    };

    function Back() {
        window.scrollTo(0, 0);
        navigate('/');
    }

    return (
        <>
            <div
                className="login-inner-img"
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    height: '100vh',
                    width: '100%',
                    maxWidth: '100%',
                }}
            >

                <div className="register-inner">
                    <img src={image} alt="image" />
                </div>

                <div className="register-inner" style={{ maxWidth: '500px' }}>
                    <div className="login-form">
                        <h2 className="Heading">
                            <p style={{ fontSize: '35px', cursor: 'pointer' }} onClick={Back}>&#8592;</p>
                            Create Your Account</h2>
                        <form onSubmit={handleRegister}>
                            <div className="input-group">
                                <div className="input-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                                <label>Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Create a password"
                                    required
                                />
                            </div>
                            <button type="submit" className="login-button">Register</button>
                        </form>
                        <div className="divider">or Register with</div>
                        <div className="social-login">
                            <button
                                className="social-button google"
                                onClick={() => handleSocialRegister('Google')}
                            >
                                Google
                            </button>
                            <button
                                className="social-button facebook"
                                onClick={() => handleSocialRegister('Facebook')}
                            >
                                Facebook
                            </button>
                            <button
                                className="social-button github"
                                onClick={() => handleSocialRegister('GitHub')}
                            >
                                GitHub
                            </button>
                        </div>
                        <p className="signup-link">
                            Already have an account? <Link to="/login">Sign In</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
