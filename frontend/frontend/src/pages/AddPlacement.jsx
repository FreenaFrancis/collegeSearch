import React, { useState } from 'react';
import axios from 'axios'; // for making HTTP requests, you might need to install axios using npm or yarn
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';
const AddPlacement = () => {
    const [formData, setFormData] = useState({
        
        particulars: '',
        statistics: '',
        year: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
const navigate=useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:7000/api/college/placements', formData);
            console.log('Response:', response.data);
            alert('Successfully added placement!');
            // Reset the form after successful submission
            setFormData({
                particulars: '',
                statistics: '',
                year: ''
            });
            navigate('/admin')
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    return (
        <div>
                    <Link to={'/admin'}><FontAwesomeIcon icon={faArrowLeft} style={{color:"black", paddingTop:'50px',marginLeft:'100px'}}/></Link>
        <div className="form-container">
            
            <h2>Placement Form</h2>
            <form onSubmit={handleSubmit}>
             
                <div className="form-group">
                    <label>Particulars:</label>
                    <input type="text" name="particulars" value={formData.particulars} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Statistics:</label>
                    <input type="text" name="statistics" value={formData.statistics} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Year:</label>
                    <input type="number" name="year" value={formData.year} onChange={handleChange} />
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
        </div>
    );
};

export default AddPlacement;


