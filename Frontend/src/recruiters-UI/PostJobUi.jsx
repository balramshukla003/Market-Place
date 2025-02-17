import React, { useState } from 'react';
import '../css/PostJobUi.css';

const PostJobUi = () => {
    const [formData, setFormData] = useState({
        jobProfile: "",
        jobDesignation: "",
        companyName: "",
        salary: "",
        experience: "",
        location: "",
        education: "",
        companyLogo: null,
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, companyLogo: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted: ", formData);
        alert("Job form submitted successfully!");
    };

    return (
        <div className="jobbers-section">
            <h1 className="section-title">Post a Job</h1>

            <div className="form-container">

                <form onSubmit={handleSubmit} className="job-form">

                    <div className="form-section">
                        <label htmlFor="jobProfile">Job Profile</label>
                        <input
                            type="text"
                            id="jobProfile"
                            name="jobProfile"
                            value={formData.jobProfile}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-section">
                        <label htmlFor="jobDesignation">Job Designation</label>
                        <input
                            type="text"
                            id="jobDesignation"
                            name="jobDesignation"
                            value={formData.jobDesignation}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-section">
                        <label htmlFor="companyName">Company Name</label>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-section">
                        <label htmlFor="salary">Salary Offered</label>
                        <input
                            type="text"
                            id="salary"
                            name="salary"
                            value={formData.salary}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-section">
                        <label htmlFor="experience">Experience </label>
                        <input
                            type="text"
                            id="experience"
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-section">
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-section">
                        <label htmlFor="education">Education</label>
                        <input
                            type="text"
                            id="education"
                            name="education"
                            value={formData.education}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-section">
                        <label htmlFor="companyLogo">Company Logo</label>
                        <input
                            type="file"
                            id="companyLogo"
                            name="companyLogo"
                            onChange={handleFileChange}
                            style={{fontSize:'14px', border:"none"}}
                        />
                    </div>

                    <div className="form-section">
                        <label htmlFor="description">Job Description</label> 
                       
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <div className="form-section" style={{justifyContent:"end"}}>
                        <button type="submit" className="submit-button">
                            Post Job
                        </button>
                    </div>

                </form>
            </div>
        </div >
    );
};

export default PostJobUi;
