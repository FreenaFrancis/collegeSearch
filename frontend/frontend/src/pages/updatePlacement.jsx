import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const UpdatePlacement = () => {
    const [formData, setFormData] = useState({
        particulars: '',
        statistics: '',
        year: ''
    });
    const { id } = useParams();
    const navigate=useNavigate();

    useEffect(() => {
        async function fetchPlacement() {
            try {
                const response = await axios.get(`http://localhost:7000/api/college/getplacementbyid/${id}`);
                setFormData(response.data); // Set form data with fetched placement details
            
            } catch (error) {
                console.error('Error fetching placement:', error);
            }
        }

        fetchPlacement();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:7000/api/college/updateplacements/${id}`, formData);
            alert('Placement updated successfully!');
            navigate('/adminviewplacement')
        } catch (error) {
            console.error('Error updating placement:', error);
        }
    };

    return (
        <div className="container">
            <h2>Update Placement</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="particulars">
                    <Form.Label>Particulars</Form.Label>
                    <Form.Control type="text" name="particulars" value={formData.particulars} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="statistics">
                    <Form.Label>Statistics</Form.Label>
                    <Form.Control type="text" name="statistics" value={formData.statistics} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="year">
                    <Form.Label>Year</Form.Label>
                    <Form.Control type="number" name="year" value={formData.year} onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">Update</Button>
            </Form>
        </div>
    );
};

export default UpdatePlacement;
