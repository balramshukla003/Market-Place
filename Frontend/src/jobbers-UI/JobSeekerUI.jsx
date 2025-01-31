import React, { useContext, useState } from 'react';
import styles from '../css/JobSeekerUI.module.css';
import Icons from "../actual-UI/Icons.jsx";
import { Link, useNavigate } from 'react-router-dom';
import ImageLogo from '../assets/logo.png';
import { AuthContext } from '../context/AuthProvider.jsx';

const JobSeekerUI = () => {
    const { setUserLoggedIn } = useContext(AuthContext);
    const Navigate = useNavigate();

    const userEmail = 'balramshukla003@gmail.com';
    const navigate = useNavigate();

    const [userBox, setUserBox] = useState(false);
    if (userBox) {
        setTimeout(() => {
            setUserBox(false);
        }, 5000);
    }


    const handleLogoClick = () => {
        window.scrollTo(0, 0);
        Navigate('/');
    }


    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <nav className={styles.nav}>

                    <div className='nav-title' onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                        <img src={ImageLogo} alt="Logo" />
                        <h2>Market Place</h2>
                    </div>

                    <div className={styles.navLinks}>

                        <Link className={styles.navLink}>
                            <Icons.message className='icon' color='black' size={30} aria-label="Messages" />
                        </Link>

                        <Link className={styles.navLink}>
                            <Icons.notification className='icon' color='black' size={30} aria-label="Notifications" />
                        </Link>

                        <Link onClick={() => { userBox == true ? setUserBox(false) : setUserBox(true) }} className={styles.navLink}>
                            <Icons.user className='icon' color='black' size={26} onClick={() => userBox ? setUserBox(false) : setUserBox(true)} aria-label="User Profile" />
                        </Link>

                    </div>
                </nav>
            </header>

            {userBox && (

                <div className={styles.userBox}>

                    <p>{userEmail}</p>

                    <p className={styles.profile}>
                        <Icons.profile /> profile
                    </p>

                    <p className={styles.profile}>
                        <Icons.privacy /> privacy policy
                    </p>

                    <div className={styles.divider}></div>

                    <input type="button" value="Logout" className={styles.signOutBtn} onClick={() => {
                        setUserBox(false);
                        setUserLoggedIn(false);
                        Navigate('/');
                    }} />

                </div>
            )}

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
