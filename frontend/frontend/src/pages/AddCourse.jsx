import React, { useState } from 'react';
import axios from 'axios';

const AddCourse = () => {
  const [formData, setFormData] = useState({
    coursename: '',
    duration: '',
    totalfees: '',
    eligibility: ''
  });

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
      // Send formData to the backend
      const response = await axios.post('http://localhost:7000/api/college/addcourse', formData);
      console.log(response.data); // Assuming the backend sends back some response
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
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddCourse;
