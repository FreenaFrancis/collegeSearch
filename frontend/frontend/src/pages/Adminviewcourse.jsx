import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using axios for HTTP requests
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AdminViewCourse() {
  const [courses, setCourses] = useState([]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:7000/api/college/deletecourse/${id}`);
      // Refresh the list after deletion
      setCourses(courses.filter(course => course._id !== id));
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  useEffect(() => {
    // Fetch data from MongoDB
    axios.get('http://localhost:7000/api/college/allcourse') // Adjust the URL based on your backend API endpoint
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Run this effect only once, when the component mounts

  return (
    <div>
      <h2>Courses</h2>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Duration</th>
            <th>Total Fees</th>
            <th>Eligibility</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course._id}>
              <td>{course.coursename}</td>
              <td>{course.duration}</td>
              <td>{course.totalfees}</td>
              <td>{course.eligibility}</td>
              <td>
                <Link to={`/updatecourse/${course._id}`}>
                  <Button>Edit</Button>
                </Link>
              </td>
              <td>
                <Button onClick={() => handleDelete(course._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminViewCourse;
