import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';
function AddCollege() {
  const [formData, setFormData] = useState({
    collegename: '',
    location: '',
    contact: '',
    description: '',
    street: '',
    city: '',
    image: '',
    duration: '',
    fees: '',
    eligibility: ''
  });

  const navigate=useNavigate('/')
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      const response = await axios.post('http://localhost:7000/api/college/addcollege', formDataToSend);
      console.log('College added successfully:', response.data);
      // Optionally, you can redirect the user to another page or show a success message
      alert('college added successfully')
      navigate('/admin')
    } catch (error) {
      console.error('Error adding college:', error);
    }
  };

  return (
    <div className='container'>
              <Link to={'/admin'}><FontAwesomeIcon icon={faArrowLeft} style={{color:"black", paddingTop:'50px',marginLeft:'100px'}}/></Link>
      <h2 style={{marginLeft:'600px'}}>Add College</h2>
    <Form onSubmit={handleSubmit}>
      
      <Form.Group controlId="collegename">
        <Form.Label>College Name</Form.Label>
        <Form.Control type="text" name="collegename" value={formData.collegename} onChange={handleChange} placeholder="Enter college name" />
      </Form.Group>

      <Form.Group controlId="location">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Enter location" />
      </Form.Group>

      <Form.Group controlId="contact">
        <Form.Label>Contact</Form.Label>
        <Form.Control type="number" name="contact" value={formData.contact} onChange={handleChange} placeholder="Enter contact" />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} name="description" value={formData.description} onChange={handleChange} placeholder="Enter description" />
      </Form.Group>

      <Form.Group controlId="street">
        <Form.Label>Street</Form.Label>
        <Form.Control type="text" name="street" value={formData.street} onChange={handleChange} placeholder="Enter street" />
      </Form.Group>

      <Form.Group controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Enter city" />
      </Form.Group>

      <Form.Group controlId="image">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" accept="image/*" name="image" onChange={handleImageChange} required />
      </Form.Group>

      <Form.Group controlId="duration">
        <Form.Label>Duration</Form.Label>
        <Form.Control type="text" name="duration" value={formData.duration} onChange={handleChange} placeholder="Enter duration" />
      </Form.Group>

      <Form.Group controlId="fees">
        <Form.Label>Fees</Form.Label>
        <Form.Control type="number" name="fees" value={formData.fees} onChange={handleChange} placeholder="Enter fees" />
      </Form.Group>

      <Form.Group controlId="eligibility">
        <Form.Label>Eligibility</Form.Label>
        <Form.Control type="text" name="eligibility" value={formData.eligibility} onChange={handleChange} placeholder="Enter eligibility" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default AddCollege;
