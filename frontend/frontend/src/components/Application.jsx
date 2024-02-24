import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Application= () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    address: '',
    city: '',
    contact: '',
    highestqualification: '',
    percentage: '',
    course: ''
  });

  const{id}=useParams()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:7000/api/college/application", formData);
      console.log("Form submitted successfully!");
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username:</label>
          <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address:</label>
          <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">City:</label>
          <input type="text" className="form-control" id="city" name="city" value={formData.city} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="contact" className="form-label">Contact:</label>
          <input type="text" className="form-control" id="contact" name="contact" value={formData.contact} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="highestqualification" className="form-label">Highest Qualification:</label>
          <input type="text" className="form-control" id="highestqualification" name="highestqualification" value={formData.highestqualification} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="percentage" className="form-label">Percentage:</label>
          <input type="text" className="form-control" id="percentage" name="percentage" value={formData.percentage} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="course" className="form-label">Course:</label>
          <select className="form-select" id="course" name="course" value={formData.course} onChange={handleChange}>
            <option value="">Select a course</option>
            <option value="Course 1">Course 1</option>
            <option value="Course 2">Course 2</option>
            <option value="Course 3">Course 3</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Application;
