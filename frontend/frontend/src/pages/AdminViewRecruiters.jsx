import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using axios for HTTP requests
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AdminViewRecruiters() {
  const [recruiters, setRecruiters] = useState([]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:7000/api/college/recruiters/${id}`);
      // Refresh the list after deletion
      setRecruiters(recruiters.filter(recruiter => recruiter._id !== id));
    } catch (error) {
      console.error('Error deleting recruiter:', error);
    }
  };

  useEffect(() => {
    // Fetch data from MongoDB
    axios.get('http://localhost:7000/api/college/allrecruiters') // Adjust the URL based on your backend API endpoint
      .then(response => {
        setRecruiters(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Run this effect only once, when the component mounts

  return (
    <div>
      <h2 style={{textAlign:'center'}}>Recruiters</h2>
      <table className='container'>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Students Placed</th>
            <th>Highest Package</th>
            <th>Image</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {recruiters.map(recruiter => (
            <tr key={recruiter._id}>
              <td>{recruiter.companyname}</td>
              <td>{recruiter.studentsplaced}</td>
              <td>{recruiter.highestpackage}</td>
              <td>
                <img src={`http://localhost:7000/api/college/image/${recruiter.image}`} alt={recruiter.companyname} style={{ width: '100px', height: 'auto' }} />
              </td>
              <Link to={`/updaterecruiter/${recruiter._id}`}>
                       <Button style={{marginTop:'38px'}}>Edit</Button>
                       </Link>
              <td><Button onClick={() => handleDelete(recruiter._id)}>Delete</Button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminViewRecruiters;
