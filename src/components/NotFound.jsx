import React from "react";
import "../css/NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="notFoundContainer">
            <div className="notFoundContent">
                <h1 className="errorCode">404</h1>
                <h2 className="errorMessage">Oops! Page Not Found</h2>
                <p className="errorDescription">
                    The page you're looking for might have been removed, renamed, or is temporarily unavailable.
                </p>
                <Link to="/" className="homeButton">
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
