import '../css/Login.css';
import React, { useState, useEffect, useContext } from 'react';
import image from '../assets/draw2.jpg';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Login = () => {

    const { authUser, setAuthUser, userLoggedIn, setUserLoggedIn, } = useContext(AuthContext);

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const Navigate = useNavigate();


    const handleSocialLogin = (platform) => {
        alert(`Social Registration with ${platform} is coming soon`);
    };

    function Back() {
        Navigate('/');
        window.scrollTo(0, 0);
    }


    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await fetch("http://192.168.85.170:5000/find", {           //192.168.98.170
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            setLoading(false);

            if (response.ok) {
                if (data.match === true) {
                    setUserLoggedIn(true)
                    setEmail('');
                    setPassword('');
                    Navigate('/');

                } else {
                    // Reset password on failure only if needed
                    if (data.error === "user not found") {
                        setPassword('');
                        setError("Invalid email or password");
                    } else if (data.error === 'Password not matched') {
                        setPassword('');
                        setError("Invalid password");
                    }
                }
            } else {
                setError(data.error || "Server error.");
            }
        } catch (err) {
            setLoading(false);
            setError("Failed to connect to the server. Please try again later.");
            console.error(err);
        }
    };


    return (
        <div className="authentication-container" >
            <div className="authentication-inner">
                <div className="authentication-detail-box" id='authentication-detail-box-form'>
                    <form onSubmit={handleLogin} className='authenticaton-form'>
                        <h2 className="Heading">
                            <img src={logo} alt="logo" className='logoImg' onClick={Back} />
                            Welcome Back!
                        </h2>

                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        {error && (
                            <p style={{ color: "red", width: "250px" }} className="error-message">
                                {error}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="submit-btn"
                            disabled={loading}
                            style={{ cursor: loading ? "not-allowed" : "pointer", backgroundColor: loading ? '#3b5998' : '#4768df' }}>
                            {loading ? "Logging in..." : "Login"}
                        </button>

                        <div className="divider">or login with</div>
                        <div className="social-login">
                            <button
                                className="social-button google"
                                onClick={() => handleSocialLogin('Google')}
                                aria-label="Login with Google"
                            >
                                Google
                            </button>
                            <button
                                className="social-button facebook"
                                onClick={() => handleSocialLogin('Facebook')}
                                aria-label="Login with Facebook"
                            >
                                Facebook
                            </button>
                            <button
                                className="social-button github"
                                onClick={() => handleSocialLogin('GitHub')}
                                aria-label="Login with GitHub"
                            >
                                GitHub
                            </button>
                        </div>
                        <p className="signup-link">
                            Don't have an account? <Link to="/register">Sign up</Link>
                        </p>
                    </form>
                </div>
                <div className="authentication-detail-box" id='authentication-detail-box-img'>
                    <img src={image} alt="image" className='authImage' />
                </div>
            </div>
        </div>
    );
};

export default Login;
