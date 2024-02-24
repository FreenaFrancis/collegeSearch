import React, { useState } from 'react';
import axios from 'axios';

const AddRecruiter= () => {
    const [formData, setFormData] = useState({
        companyname: '',
        studentsplaced: 0,
        highestpackage: '',
        image: null // Initialize image as null
    });

    const handleChange = (e) => {
        if (e.target.name === 'image') {
            // For file input, use e.target.files to access the file
            setFormData({ ...formData, [e.target.name]: e.target.files[0] });
        } else {
            // For other inputs, use e.target.value
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Create FormData object to send files
            const formDataToSend = new FormData();
            formDataToSend.append('companyname', formData.companyname);
            formDataToSend.append('studentsplaced', formData.studentsplaced);
            formDataToSend.append('highestpackage', formData.highestpackage);
            formDataToSend.append('image', formData.image);

            // Make a POST request to the backend API
            await axios.post('http://localhost:7000/api/college/addrecruiter', formDataToSend);
            console.log('Form data submitted:', formData);
            // Reset the form after successful submission
            setFormData({ companyname: '', studentsplaced: 0, highestpackage: '', image: null });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
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
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddRecruiter;
