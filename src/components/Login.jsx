import '../css/Login.css';
import React, { useState } from 'react';
import image from '../images/draw2.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const {
        authUser,
        setAuthUser,
        userLoggedIn,
        setUserLoggedIn, } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');

        if (email === '123' && password === '123') {
            setUserLoggedIn(true);
            setAuthUser({
                Name: 'Balram Shukla',
                Email: email,
            });
            const userData ={
                Name: 'Balram Shukla',
                Email: email,
                userLogged: true,
            }
            localStorage.setItem('userData', JSON.stringify(userData));
            setPassword("");
            setEmail("");
            navigate('/');
        } else {
            alert('Invalid Email or Password')
            setError('Invalid Email or Password');
            setPassword("");
            setEmail("");
        }
    };

    const handleSocialLogin = (platform) => {
        alert(`Social Registration with ${platform} is coming soon`);
    };

    function Back() {
        navigate('/');
        window.scrollTo(0, 0);
    }


    return (
        <div
            className="login-pg"
            style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                height: '100vh',
                width: '100%',
                maxWidth: '100%',
            }}
        >
            <div className="login-inner">
                <div className="login-form">
                    <h2 className="Heading">
                        <p style={{ fontSize: '35px', cursor: 'pointer' }} onClick={Back}>&#8592;</p>
                        Welcome Back!
                    </h2>
                    <form onSubmit={handleLogin}>
                        <div className="input-group">
                            <label>Email</label>
                            <input
                                type=""
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
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <button type="submit" className="login-button">
                            Login
                        </button>
                    </form>
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
                </div>
            </div>
            <div className="login-inner-img">
                <img src={image} alt="Login Illustration" />
            </div>
        </div>
    );
};

export default Login;
