import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 
function AdminViewCollege() {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    async function fetchColleges() {
      try {
        const response = await axios.get('http://localhost:7000/api/college/getallcollege');
        setColleges(response.data);
      } catch (error) {
        console.error('Error fetching colleges:', error);
      }
    }
    fetchColleges();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:7000/api/college/deleteCollege/${id}`);
      setColleges(colleges.filter(college => college._id !== id));
      console.log('College deleted successfully');
    } catch (error) {
      console.error('Error deleting college:', error);
    }
  };

  return (
    <div className="container">
      <div style={{display:'flex',justifyContent:'flex-start'}}>
        <div >

     
      <Link to={'/admin'}><FontAwesomeIcon icon={faArrowLeft} style={{color:"black", paddingTop:'50px',marginLeft:'100px'}}/></Link>
      </div>
      <div>
      <h2 className="my-4" style={{paddingLeft:'500px',marginTop:'150px'}}>Colleges</h2>
      </div>
      </div>
   
 <div>
     
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>College Name</th>
              <th>Location</th>
              <th>Contact</th>
              <th>Description</th>
              <th>Street</th>
              <th>City</th>
              <th>Duration</th>
              <th>Fees</th>
              <th>Eligibility</th>
              <th>Image</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {colleges.map(college => (
              <tr key={college._id}>
                <td>{college.collegename}</td>
                <td>{college.location}</td>
                <td>{college.contact}</td>
                <td>{college.description}</td>
                <td>{college.street}</td>
                <td>{college.city}</td>
                <td>{college.duration}</td>
                <td>{college.fees}</td>
                <td>{college.eligibility}</td>
                <td>
                  <img src={`http://localhost:7000/api/college/image/${college.image}`} alt={college.collegename} style={{ maxWidth: '100px' }} />
                </td>
                <td>
                  <Link to={`/updatecollege/${college._id}`}><Button variant="info">Update</Button></Link>
                </td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(college._id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}

export default AdminViewCollege;
