import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGraduationCap, faBell, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Adjusted import
import './home.css';
import UserCollegeView from './UserCollegeView';
import { Link, useParams } from 'react-router-dom';

function UserHome() {
    const { id } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(false);

    // Assuming collegeId is defined somewhere in the component's scope
    // const collegeId = 123; // Replace 123 with the actual college ID

    return (
        <>
            <div className="main">
                <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'rgb(41, 196, 196)' }}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><span style={{ color: 'white' }}><FontAwesomeIcon icon={faGraduationCap} /> Edusphere</span></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav subnav ms-auto">
                                <li className="nav-item">
                                    {/* <a className="nav-link" aria-current="page" href="#"><FontAwesomeIcon icon={faWhatsapp} /></a> */}
                                </li>
                                <li className="nav-item">
                                    <Link to={'/usercollege'} style={{textDecoration:'none',color:"white"}}><h6>Colleges</h6></Link>
                                </li>
                                {/* <li className="nav-item">
                                    <h6>About</h6>
                                </li> */}
                                <li className="nav-item">
                                    <Link to={`/appliedcolleges/${id}`} style={{textDecoration:'none',color:"white"}}><h6>Applied Colleges</h6></Link>
                                </li>
                                <li>
                                    <Link to={'/login'} style={{textDecoration:'none',color:"white"}}>Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default UserHome;
