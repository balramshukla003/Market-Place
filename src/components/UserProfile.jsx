import React, { useState } from 'react';
import '../css/UserProfile.css';
import { Link } from 'react-router-dom';
import ProfileDetail from './ProfileDetail';
import profile from '../images/profile.png'

const UserProfile = () => {
  const [activeLink, setActiveLink] = useState('basic');

  const renderContent = () => {
    switch (activeLink) {
      case 'basic':
        return <ProfileDetail title='Personal' />;
      case 'education':
        return <ProfileDetail title='Education' />;
      case 'skills':
        return <ProfileDetail title='Skills' />;
      case 'work':
        return <ProfileDetail title='Experience' />;
      case 'projects':
        return <ProfileDetail title='Projects' />;
      case 'accomplishments':
        return  <ProfileDetail title='Accomplishment' />;
      case 'resume':
        return  <ProfileDetail title='Resume' />;
      default:
        return <div>Select a section from the menu.</div>;
    }
  };

  return (
    <div className="profile-outer">
      <div className="profile-left-side">
        <div className="pic-section">
          <img
            src={profile}
            alt="profile-pic"
            style={{ borderRadius: '50px' }}
          />
          <h5>Username</h5>
          <p>balramshukla003@gmail.com</p>
        </div>
        <div className="other-links">
          <Link
            to="#"
            className={`${activeLink === 'basic' ? 'active no-hover' : ''}`}
            onClick={() => setActiveLink('basic')}
          >
            Basic Details
          </Link>
          <Link
            to="#"
            className={`${activeLink === 'education' ? 'active no-hover' : ''}`}
            onClick={() => setActiveLink('education')}
          >
            Education Details
          </Link>
          <Link
            to="#"
            className={`${activeLink === 'skills' ? 'active no-hover' : ''}`}
            onClick={() => setActiveLink('skills')}
          >
            Skill, Subjects & Language
          </Link>
          <Link
            to="#"
            className={`${activeLink === 'work' ? 'active no-hover' : ''}`}
            onClick={() => setActiveLink('work')}
          >
            Intern & Work Ex
          </Link>
          <Link
            to="#"
            className={`${activeLink === 'projects' ? 'active no-hover' : ''}`}
            onClick={() => setActiveLink('projects')}
          >
            Projects
          </Link>
          <Link
            to="#"
            className={`${activeLink === 'accomplishments' ? 'active no-hover' : ''}`}
            onClick={() => setActiveLink('accomplishments')}
          >
            Accomplishments
          </Link>
          <Link
            to="#"
            className={`${activeLink === 'resume' ? 'active no-hover' : ''}`}
            onClick={() => setActiveLink('resume')}
          >
            Resume, Doc & Write ups
          </Link>
        </div>
      </div>

      <div className="profile-right-side">{renderContent()}</div>
    </div>
  );
};

export default UserProfile;
