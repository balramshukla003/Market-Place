import React, { useState } from 'react';
import '../css/RecruiterDashboard.css';
import icons from '../actual-UI/Icons';
import PostJobUi from './PostJobUi';
const RecruiterDashboard = () => {
    const [activeTab, setActiveTab] = useState('explore');
    const [message, setMessage] = useState('');

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        jobRole: "",
        skills: "",
        resume: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, resume: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted: ", formData);
        alert("Form submitted successfully!");
    };


    // Dummy data
    const jobbers = [
        { id: 1, name: 'John Doe', skills: ['React', 'Node.js'], experience: '5 years', match: 92 },
        { id: 2, name: 'Jane Smith', skills: ['Python', 'AI/ML'], experience: '3 years', match: 88 },
        { id: 3, name: 'Jane Smith', skills: ['Python', 'AI/ML'], experience: '3 years', match: 88 },
        { id: 4, name: 'Jane Smith', skills: ['Python', 'AI/ML'], experience: '3 years', match: 88 },
    ];


    return (
        <div className="dashboard-container">
            {/* Left Navigation */}
            <div className="nav-bar">
                <h2 className="nav-title">Recruiter </h2>
                <nav className="nav-menu">
                    <button
                        onClick={() => setActiveTab('explore')}
                        className={`nav-button ${activeTab === 'explore' ? 'active' : ''}`}
                    >
                        🕵️ Explore Jobbers
                    </button>
                    <button
                        onClick={() => setActiveTab('post')}
                        className={`nav-button ${activeTab === 'post' ? 'active' : ''}`}
                    >
                        📮 Post Jobs
                    </button>
                    <h3>Upcoming Features</h3>
                    <button
                        onClick={() => setActiveTab('contests')}
                        className={`nav-button ${activeTab === 'contests' ? 'active' : ''}`}
                    >
                        <icons.hire color='green' /> Hiring Contests
                    </button>
                    <button
                        onClick={() => setActiveTab('chat')}
                        className={`nav-button ${activeTab === 'chat' ? 'active' : ''}`}
                    >
                        <icons.chat color='blue' /> Live Chat
                    </button>

                    <h3>Setting</h3>
                    <button
                        onClick={() => setActiveTab('user')}
                        className={`nav-button ${activeTab === 'user' ? 'active' : ''}`}
                    >
                        <icons.user color='gray' /> User Profile
                    </button>
                    <button
                        onClick={() => setActiveTab('policy')}
                        className={`nav-button ${activeTab === 'policy' ? 'active' : ''}`}
                    >
                        <icons.policy color='gray' /> Privacy Policy
                    </button>
                </nav>
            </div>

            {/* Main Content */}
            <div className="main-content">
                {activeTab === 'explore' && (
                    <div className="jobbers-section">
                        <h1 className="section-title">Best Matches</h1>
                        <div className="search-filter">
                            <input
                                type="text"
                                placeholder="Search skills..."
                                className="search-input"
                            />
                            <select className="filter-select">
                                <option>Filter by Experience</option>
                                <option>0-2 years</option>
                                <option>3-5 years</option>
                                <option>5+ years</option>
                            </select>
                        </div>

                        <div className="jobbers-grid">
                            {jobbers.map(jobber => (
                                <div key={jobber.id} className="jobber-card">
                                    <div className="jobber-header">
                                        <div>
                                            <h3 className="jobber-name">{jobber.name}</h3>
                                            <p className="jobber-experience">{jobber.experience}</p>
                                            <div className="skills-container">
                                                {jobber.skills.map(skill => (
                                                    <span key={skill} className="skill-tag">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="match-percentage">{jobber.match}% Match</div>
                                    </div>
                                    <div className="jobber-actions">
                                        <button className="primary-button">View Profile</button>
                                        <button className="secondary-button">Save</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}


                {activeTab === 'post' && (
                    <PostJobUi />
                )}





            </div>

        </div>
    );
};

export default RecruiterDashboard;