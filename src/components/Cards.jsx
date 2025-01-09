import React from 'react';
import '../css/Cards.css';
import IMage from '../images/image1.png';
import EmployeeData from '../api/employeData';
import { useNavigate } from 'react-router-dom';

const Cards = () => {
  const navigate = useNavigate();

  function CandidateProfile(ID) {
    navigate(`/candidate/detail#id=${ID}`);
  }

  return (
    <div className="cards-container">
      {EmployeeData.map((employee) => (
        <div
          className="card"
          style={{ width: '17rem' }}
          key={employee.id}
          onClick={() => CandidateProfile(employee.id)}
        >
          <img
            style={{ width: '17rem', height: '17rem' }}
            src={IMage}
            className="card-img-top"
            alt={employee.name || 'Employee'}
          />
          <div className="card-body">
            <h5 className="card-title">{employee.name || 'No Name Available'}</h5>
            <p className="card-text">
              {employee.job_title || 'No description provided'}{' '}
              <h6 style={{ color: 'blue' }}>${employee.salary}</h6>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
