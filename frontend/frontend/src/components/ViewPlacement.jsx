import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewPlacement = () => {
    const [placements, setPlacements] = useState([]);

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
    

    return (
        <div className="container">
            <h2>Placement Data</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Particulars</th>
                        <th>Statistics</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {placements.map(placement => (
                        <tr key={placement._id}>
                            <td>{placement.particulars}</td>
                            <td>{placement.statistics}</td>
                            <td>{placement.year}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewPlacement;
