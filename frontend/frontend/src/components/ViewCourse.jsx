import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ViewCourse() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch data from MongoDB
    axios.get('http://localhost:7000/api/college/allcourse')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2 style={{textAlign:'center'}}>Courses</h2>
      <div className="container">
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
                {/* Pass collegeId as a parameter in the link */}
                <td><Link to={`/application/${course._id}`}><Button>Apply</Button></Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewCourse;
