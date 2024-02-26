import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddRecruiter = () => {
    const [formData, setFormData] = useState({
        companyname: '',
        studentsplaced: 0,
        highestpackage: '',
        image: null
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        if (e.target.name === 'image') {
            // For file input, use e.target.files[0] to access the file
            setFormData({ ...formData, [e.target.name]: e.target.files[0] });
        } else {
            // For other inputs, use e.target.value
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('companyname', formData.companyname);
            formDataToSend.append('studentsplaced', formData.studentsplaced);
            formDataToSend.append('highestpackage', formData.highestpackage);
            formDataToSend.append('image', formData.image);

            // Make a POST request to the backend API
            await axios.post('http://localhost:7000/api/college/addrecruiter', formDataToSend);

            // Reset the form after successful submission
            setFormData({ companyname: '', studentsplaced: 0, highestpackage: '', image: null });
            alert("Recruiter added successfully");
            navigate('/admin');
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div>
            <h2 style={{ paddingLeft: '500px', marginTop: '50px' }}>Recruiter Form</h2>
            <div className='container'>
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
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddRecruiter;
