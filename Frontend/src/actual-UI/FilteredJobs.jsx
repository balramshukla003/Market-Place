import React from 'react'
import Icons from './Icons.jsx';
import "../css/FilteredJobs.css"

const FilteredJobs = () => {

    return (
        <>
            <div className='right-sidebar'>
                <div className="job-description-box">
                    <div className="job-company-name">
                        <h3 style={{ display: "flex", alignItems: "center", margin: "0px", padding: "0px" }}>
                            Job-Profile -&nbsp;<p style={{ margin: "0px", padding: "0px" }}>Designation</p></h3>
                        <h4 style={{ color: "#474d6a", display: "flex", alignItems: "center", margin: "0px", padding: "0px" }}>
                            Company Name &nbsp;<p style={{ fontSize: "small", color: "gray" }}>{<Icons.goldenStar color='gold' />}&nbsp;4.2 | 253 reviews</p></h4>
                    </div>
                    <div className='company-logo' style={{ display: "flex", alignItems: "center" }}>
                        <Icons.logoImg size={25} /><img src="" alt="logo" />
                    </div>
                </div>


                <div className="job-offers-detail">
                    <div style={{ display: "flex", padding: "0px 20px", width: "40%", justifyContent: "space-between", margin: "0 0 3px 0" }}>
                        <p style={{ display: "flex", alignItems: "center", color: "#474d6a", margin: "0px" }}><Icons.job />&nbsp;
                            0 - 3</p>
                        <p style={{ display: "flex", alignItems: "center", color: "#474d6a", margin: "0px" }}><Icons.rupees />
                            Not disclosed</p>
                        <p style={{ display: "flex", alignItems: "center", color: "#474d6a", margin: "0px" }}><Icons.location />
                            Gurugram</p>
                    </div>
                    <div style={{ display: "flex", padding: "0px 20px", width: "70%", justifyContent: "space-between", margin: "0 0 3px 0" }}>
                        <p style={{ display: "flex", alignItems: "center", color: "#474d6a", margin: "0px" }}><Icons.education />&nbsp;
                            Bachelor's Degree | Any </p>
                    </div>
                    <div style={{ padding: "0px 20px", margin: "20px 0 10px 0" }}>
                        <button className='veiw-btn'>view details</button>
                    </div>
                </div>


            </div>
        </>
    )
}

export default FilteredJobs
