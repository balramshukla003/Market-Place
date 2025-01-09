import React from 'react'
import '../css/ProfileDetail.css'
const ProfileDetail = (props) => {

    if (props.title == "Personal") {
        return (
            <div className="profile-detail">
                <h4>Personal Information</h4>
                <section className="profile-section">
                    <div className="section-head"><h5>Personal Information</h5><button>update</button></div>
                    <div style={{ width: "90%" }} className="type-data">
                        <div className="Type" style={{ width: "40%" }}>
                            <p>Full Name :</p>
                            <p>Date of Birth :</p>
                            <p>Gender :</p>
                            <p>Current Institute :</p>
                            <p>Email :</p>
                            <p>Phone :</p>
                        </div>
                        <div className="Data" style={{ width: "60%" }}>
                            <p>Balram Shukla</p>
                            <p>22.02.2004</p>
                            <p>Male</p>
                            <p>MSITM</p>
                            <p>balramshukla@gmail.com</p>
                            <p>+91 9026050563</p>
                        </div>
                    </div>
                </section>
                <section className="profile-section">
                    <div className="section-head"><h5>Address</h5><button>update</button></div>
                    <div style={{ width: "90%" }} className="type-data">
                        <div className="Type" style={{ width: "40%" }}>
                            <p>Current address :</p>
                            <p>Permanent address :</p>
                        </div>
                        <div className="Data" style={{ width: "60%" }}>
                            <p>Sec 6 Vaishali, Ghaziabad, UP-Delhi</p>
                            <p>Sec 6 Vaishali, Ghaziabad, UP-Delhi</p>
                        </div>
                    </div>
                </section>
                <section className="profile-section">
                    <div className="section-head"><h5>Social Connect</h5><button>update</button></div>
                    <div style={{ width: "90%" }} className="type-data">
                        <div className="Type" style={{ width: "40%" }}>
                            <p>GitHub :</p>
                            <p>LinkdIN :</p>
                            <p>Facebook :</p>
                            <p>Instagram :</p>
                            <p>Twitter :</p>
                        </div>
                        <div className="Data" style={{ width: "60%" }}>
                            <p>www.github.com</p>
                            <p>www.linkedin.com</p>
                            <p>www.facebook.com</p>
                            <p>www.instagram.com</p>
                            <p>www.twitter.com</p>
                        </div>
                    </div>
                </section>
            </div>
        );

    } else if (props.title == "Education") {
        return (
            <div className="profile-detail">
                <h4>Educational Details</h4>
                <section className="profile-section">
                    <div className="section-head"><h5>Current Education</h5><button>update</button></div>
                    <div style={{ width: "90%" }} className="type-data">
                        <div className="Type" style={{ width: "40%" }}>
                            <p>Institute :</p>
                            <p>Department :</p>
                            <p>Program / Degree :</p>
                            <p>Brach / Passing-year:</p>
                            <p>Grade :</p>
                            <p>Institution Addres :</p>
                        </div>
                        <div className="Data" style={{ width: "60%" }}>
                            <p>MSITM</p>
                            <p>Computer Science & Engineering</p>
                            <p>Bachelor's Degree</p>
                            <p>B.C.A / 2025</p>
                            <p>75+</p>
                            <p>Sec 6, Vaishali, Ghaziabad</p>
                        </div>
                    </div>
                </section>
                <section className="profile-section">
                    <div className="section-head"><h5>Previous Education</h5><button>+add new</button></div>
                    <div style={{ width: "90%" }} className="type-data">
                        <div className="Type" style={{ width: "40%" }}>
                            <p>Institute :</p>
                            <p>Department :</p>
                            <p>Program/Degree :</p>
                            <p>Brach:</p>
                            <p>Institution Addres :</p>
                        </div>
                        <div className="Data" style={{ width: "60%" }}>
                            <p>MSITM</p>
                            <p>Computer Science & Engineering</p>
                            <p>Bachelor's Degree</p>
                            <p>B.C.A</p>
                            <p>Sec 6, Vaishali, Ghaziabad</p>
                        </div>
                    </div>
                </section>
            </div>
        );

    } else if (props.title === 'Skills') {
        return (
            <div className="profile-detail">
                <section className="profile-section">
                    <div className="section-head"><h5>Technical Skills</h5><button>update</button></div>
                    <div style={{ width: "90%" }} className="type-data">
                        <ul style={{ width: "100%" }}>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>Java</li>
                            <li>JDBC</li>
                            <li>DBMS</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>MySQL</li>
                            <li>C++</li>
                        </ul>
                    </div>
                </section>
                <section className="profile-section">
                    <div className="section-head"><h5>Soft Skills</h5><button>update</button></div>
                    <div style={{ width: "90%" }} className="type-data">
                        <div style={{ width: "90%", paddingLeft: "20px" }} className="type-data">
                            <div className="Type" style={{ width: "50%" }}>
                                <h6>Communication Skill</h6>
                                <h6>Writing Skill</h6>
                            </div>
                            <div className="Data" style={{ width: "50%" }}>
                                <h6>Time Management</h6>
                                <h6>Leadership Skill</h6>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="profile-section">
                    <div className="section-head"><h5>Languages</h5><button>update</button></div>
                    <div style={{ width: "90%", paddingLeft: "20px" }} className="type-data">
                        <div className="Type" style={{ width: "50%" }}>
                            <p>Hindi</p>
                        </div>
                        <div className="Data" style={{ width: "50%" }}>
                            <p>Intermediate</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    } else {
        return (
            <div className="profile-out">
                <h1>🚀 Coming Soon</h1>
                    <p>We’re working hard to bring you something amazing! Stay tuned for updates.</p>
            </div>
        );
    }
}

export default ProfileDetail
