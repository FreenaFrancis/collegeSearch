import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';

const ViewCollege = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:7000/api/college/getallcollege')
      .then((res) => {
        setColleges(res.data);
      })
      .catch(err => console.log(err));
  }, []); // Empty dependency array ensures this effect runs only once

  const handleEdit = (collegeId) => {
    // Add logic to handle edit action, e.g., redirect to edit page
    console.log("Edit college with ID:", collegeId);
  };

  const handleDelete = (collegeId) => {
    // Add logic to handle delete action, e.g., send delete request to server
    console.log("Delete college with ID:", collegeId);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>College Name</th>
          <th>Location</th>
          <th>Contact</th>
          <th>Eligibility</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {colleges.map((college, index) => (
          <tr key={index}>
            <td>{college.collegename}</td>
            <td>{college.location}</td>
            <td>{college.contact}</td>
            <td>{college.eligibility}</td>
            <td>
              <img src={`http://localhost:7000/api/college/image/${college.image}`} alt="College" style={{ width: '100px', height: '100px' }} />
            </td>
            <td>
              <Button variant="info" onClick={() => handleEdit(college._id)}>Edit</Button>{' '}
              <Button variant="danger" onClick={() => handleDelete(college._id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ViewCollege;
