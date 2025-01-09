import React, { useState, useEffect } from 'react';
import EmployeeData from '../api/employeData.json';

const Candidate = (props) => {
  const [Item, setItem] = useState({});

  useEffect(() => {
    const hash = window.location.hash;
    const urlParams = new URLSearchParams(hash.substring(1));
    const id = urlParams.get('id');

    if (id) {
      const foundItem = EmployeeData.find((d) => d.id === parseInt(id));
      if (foundItem) {
        setItem(foundItem);
      } else {
        alert('Could not find the employee with that ID');
      }
    } else {
      console.log('No ID found in the URL hash');
    }
  }, []);

  return (
    <div>
      {Item && (
        <>
          <img src={Item.image} alt={Item.name} />
          <p>Name: {Item.name}</p>
          <p>Salary: $ {Item.salary}</p>
          <p>Current Post: {Item.current_post}</p>
          <p>Job Title: {Item.job_title}</p>
          <p>Availability: {Item.availability}</p>
          <p>Category: {Item.category}</p>
        </>
      )}
    </div>
  );
}

export default Candidate;
