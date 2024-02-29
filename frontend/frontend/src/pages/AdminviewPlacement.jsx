import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 
const ViewPlacement = () => {
    const [placements, setPlacements] = useState([]);
    const { id } = useParams(); // Destructure id from useParams

    useEffect(() => {
        async function fetchPlacements() {
            try {
                const response = await axios.get('http://localhost:7000/api/college/getplacements');
                setPlacements(response.data);
            } catch (error) {
                console.error('Error fetching placements:', error);
            }
        }
    
        fetchPlacements();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:7000/api/college/deleteplacements/${id}`);
            setPlacements(prevPlacements => prevPlacements.filter(placement => placement._id !== id));
            alert('Placement deleted successfully!');
        } catch (error) {
            console.error('Error deleting placement:', error);
        }
    };

    return (
        <div className="container">
              <Link to={'/admin'}><FontAwesomeIcon icon={faArrowLeft} style={{color:"black", marginTop:'60px',marginLeft:'100px'}}/></Link>
            <h2 style={{paddingLeft:'500px',paddingBottom:'10px'}}>Placement Data</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Particulars</th>
                        <th>Statistics</th>
                        <th>Year</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {placements.map(placement => (
                        <tr key={placement._id}>
                            <td>{placement.particulars}</td>
                            <td>{placement.statistics}</td>
                            <td>{placement.year}</td>
                            <td>
                                <Link to={`/updateplacement/${placement._id}`}><Button>Edit</Button></Link>
                                <Button variant="danger" onClick={() => handleDelete(placement._id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewPlacement;
