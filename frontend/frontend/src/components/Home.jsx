import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navs.css'
function NavBars() {
  const location = useLocation(); // Get current location
  const isRegisterPage = location.pathname === '/register';

  return (
    <div className='navs'>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" style={{fontSize:'20px'}}>Edusphere</Navbar.Brand>
          <Nav className="me-auto" style={{paddingLeft:'800px', fontSize:'20px',color:'white'}}>
            {!isRegisterPage && <Link to='/register' className='nav-link'>Register</Link>}
            <Link to='/login' className='nav-link'>Login</Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <div>
        <img src='https://img.jagranjosh.com/imported/images/E/Articles/Scholarly-Search-engines-for-college-students.webp' alt='' width={'100%'} height={'800px'}></img>
      </div> */}
    </div>
  );
}

export default NavBars;
