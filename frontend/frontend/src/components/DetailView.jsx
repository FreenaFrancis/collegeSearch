import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 
function DetailView() {
  const [details, setDetails] = useState({});
  const { id } = useParams(); // Retrieve id from URL params

  useEffect(() => {
    axios.get(`http://localhost:7000/api/college/getcollegebyid/${id}`)
      .then((res) => setDetails(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <div className='na'>
        <Navbar bg="dark" variant="dark" >
          <Container>
          <Link to={'/home'}><FontAwesomeIcon icon={faArrowLeft} style={{marginTop:'10px',color:"white", paddingRight:'10px'}}/></Link>
            <Nav className="me-auto">
              <Nav.Link as={Link} to={`/overview/${id}`} style={{ color: 'white' }}>Overview</Nav.Link>
              
              <Nav.Link as={Link} to={`/viewplacement/${id}`} style={{ color: 'white' }}>Placement</Nav.Link>
              <Nav.Link as={Link} to={`/viewrecruiter/${id}`} style={{ color: 'white' }}>Our Recuriters</Nav.Link>
              <Nav.Link as={Link} to={`/viewcourse/${id}`} style={{ color: 'white' }}>Course</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Card style={{ width: '100rem' }}>
          <Card.Img variant="top" src={`http://localhost:7000/api/college/image/${details.image && details.image[0]}`} alt="college" style={{ flex: 1, width: '100%' }} />
          <Card.Body>
            <Card.Title>{details.collegename}</Card.Title>
            <Card.Text>
              {details.description}
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default DetailView;
