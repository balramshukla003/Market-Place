import React, { useContext, useState } from 'react'
import styles from '../css/JobSeekerUI.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider.jsx';
import ImageLogo from '../assets/logo.png';
import Icons from "../actual-UI/Icons.jsx";

const Jobber_Navbar = () => {

    const userEmail = 'balramshukla003@gmail.com';
    const userType="Jobber"

    const { setUserLoggedIn } = useContext(AuthContext);

    const [userBox, setUserBox] = useState(false);
    const Navigate = useNavigate();

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
        <>
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


            {
                userBox && (

                    <div className={styles.userBox}>

                        <p>{userEmail}<p>Account Type: {userType}</p></p>
                        

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
                )
            }
        </>
    )
}

export default Jobber_Navbar
