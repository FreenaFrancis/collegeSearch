// AppliedColleges.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams hook

function AppliedColleges() {
  const [applications, setApplications] = useState([]);
  const { id } = useParams(); // Extract ID from the URL params

  useEffect(() => {
    const fetchAppliedColleges = async () => {
      try {
        const response = await axios.get(`http://localhost:7000/api/college/getapplication`);
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching applied colleges:', error);
      }
    };

    fetchAppliedColleges();
  }, [id]); // Dependency array with 'id' parameter

  return (
    <div className="container">
      <h2 className="text-center mb-4">Applied Colleges</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="bg-primary text-white">
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>City</th>
              <th>Contact</th>
              <th>Highest Qualification</th>
              <th>Percentage</th>
              <th>Course</th>
              {/* <th>College</th> */}
            </tr>
          </thead>
          <tbody>
            {applications.map(application => (
              <tr key={application._id}>
                <td>{application.username}</td>
                <td>{application.email}</td>
                <td>{application.address}</td>
                <td>{application.city}</td>
                <td>{application.contact}</td>
                <td>{application.highestqualification}</td>
                <td>{application.percentage}</td>
                <td>{application.course}</td>
                {/* <td>{application.college}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AppliedColleges;
