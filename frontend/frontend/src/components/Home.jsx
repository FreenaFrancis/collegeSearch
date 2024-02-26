import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBars() {
  const location = useLocation(); // Get current location
  const isRegisterPage = location.pathname === '/register';

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home" style={{fontSize:'20px'}}>Edusphere</Navbar.Brand>
          <Nav className="me-auto" style={{paddingLeft:'800px', fontSize:'20px',color:'white'}}>
            {!isRegisterPage && <Link to='/register' className='nav-link'>Register</Link>}
            <Link to='/login' className='nav-link'>Login</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBars;
