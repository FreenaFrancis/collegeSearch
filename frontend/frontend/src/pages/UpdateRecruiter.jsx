import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateRecruiter() {
  const [formData, setFormData] = useState({
    companyname: '',
    studentsplaced: '',
    highestpackage: '',
    image: null
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch recruiter data based on the ID
    axios.put(`http://localhost:7000/api/college/updaterecruiters/${id}`)
      .then(response => {
        const { companyname, studentsplaced, highestpackage, image } = response.data;
        setFormData({
          companyname,
          studentsplaced,
          highestpackage,
          image
        });
       
      })
      .catch(error => {
        console.error('Error fetching recruiter data:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === 'file' ? e.target.files[0] : value;

    setFormData({
      ...formData,
      [name]: newValue
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:7000/api/college/updaterecruiters/${id}`, formData);
      console.log('Form submitted:', formData);
      navigate('/adminviewrecruiter');
      // Handle successful update
    } catch (error) {
      console.error('Failed to update recruiter:', error);
      // Handle error
    }
  };

  return (
    <div>
      <div>
        <h2>Recruiter Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Company Name:</label>
            <input type="text" name="companyname" value={formData.companyname} onChange={handleChange} />
          </div>
          <div>
            <label>Students Placed:</label>
            <input type="number" name="studentsplaced" value={formData.studentsplaced} onChange={handleChange} />
          </div>
          <div>
            <label>Highest Package:</label>
            <input type="text" name="highestpackage" value={formData.highestpackage} onChange={handleChange} />
          </div>
          <div>
            <label>Image:</label>
            <input type="file" name="image" onChange={handleChange} />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateRecruiter;
