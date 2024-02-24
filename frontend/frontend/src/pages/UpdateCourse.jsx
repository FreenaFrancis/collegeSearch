import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'; // Import useParams

const UpdateCourse = () => {
  const [formData, setFormData] = useState({
    coursename: '',
    duration: '',
    totalfees: '',
    eligibility: ''
  });

  const { id } = useParams(); // Extract id from URL
const navigate=useNavigate()
  // Set initial form data when `id` prop changes
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:7000/api/college/getcoursebyid/${id}`); // Add '/' before id
        const { data } = response;
        setFormData(data); // Set retrieved data to form state
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchCourse(); // Call the function
  }, [id]); // Add id to the dependency array

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:7000/api/college/updatecourse/${id}`, formData);
      console.log(response.data);
      navigate('/admincourse')
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Course Name:</label>
              <input
                type="text"
                className="form-control"
                name="coursename"
                value={formData.coursename}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Duration:</label>
              <input
                type="text"
                className="form-control"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Total Fees:</label>
              <input
                type="text"
                className="form-control"
                name="totalfees"
                value={formData.totalfees}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Eligibility:</label>
              <input
                type="text"
                className="form-control"
                name="eligibility"
                value={formData.eligibility}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button type="submit" className="btn btn-primary">Update</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UpdateCourse;
