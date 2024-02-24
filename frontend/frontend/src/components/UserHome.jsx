import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGraduationCap, faBell, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Adjusted import
import './home.css'
import UserCollegeView from './UserCollegeView';
import { Link } from 'react-router-dom';
// import CollegeView from './CollegeView';
// import AddCollege from '../Pages/AddCollege';




function UserHome() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    // const toggleSidebar = () => {
    //     setSidebarVisible(!sidebarVisible);
    // };

    return (
        <>
        <div className="main">
            {/* {sidebarVisible && <div className="overlay" id="overlay" onClick={toggleSidebar}></div>}
            <div className={`sidebar ${sidebarVisible ? '' : 'hidden'}`} id="sidebar">
                <div id="sidebar-content">
                    {/* Sidebar content goes here */}
                    {/* <li>home</li>
                    <li>service</li>
                </div> */} 
            {/* </div> */}
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'rgb(41, 196, 196)' }}>
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#" onClick={toggleSidebar}>
                        <FontAwesomeIcon icon={faBars} style={{ color: 'white' }} />
                    </a> */}
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
                                {/* <a className="nav-link" href="#"><FontAwesomeIcon icon={faBell} /></a> */}
                                <Link to={'/usercollege'}><h6>Colleges</h6></Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#"><FontAwesomeIcon icon={faMagnifyingGlass} /></a> */}
                               <h6>About</h6>
                            </li>
                            <li>
                            <Link to={'/profile'}><FontAwesomeIcon icon={faUser}/>Profile</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <div className="submain">
                <h4>Calicut University, Kerala| <a href="#">View details</a></h4>
            </div> */}
         {/* <div style={{marginTop:'800px'}}>
         <UserCollegeView/>
         </div> */}
        </div>
        </>
    );
}

export default UserHome;
