import React from 'react';
import styles from '../css/JobSeekerUI.module.css';
import { Link, useNavigate } from 'react-router-dom';


const JobSeekerUI = () => {
 
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Welcome Champions! Find your Job</h2>
                    <div className={styles.optionsGrid}>
                        <Link to="/job_search" className={`${styles.option} ${styles.findJob}`}>
                            <h3>Find Job</h3>
                            <p>Discover career opportunities tailored to your skills</p>
                        </Link>
                        <Link className={`${styles.option} ${styles.salaryGuide}`}>
                            <h3>Salary Guide</h3>
                            <p>Explore salary ranges for various positions in your field</p>
                        </Link>
                        <Link className={`${styles.option} ${styles.applyGuide}`}>
                            <h3>Apply Guide</h3>
                            <p>Learn how to craft winning applications and ace interviews</p>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default JobSeekerUI;
