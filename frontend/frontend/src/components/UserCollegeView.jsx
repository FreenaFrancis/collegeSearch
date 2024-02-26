import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGraduationCap, faBell, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
function UserCollegeView() {
    const [view, setView] = useState([]);
    const [searchCollege, setSearchCollege] = useState('');
    const [searchLocation, setSearchLocation] = useState('');
    const [filterType, setFilterType] = useState('all');

    useEffect(() => {
        axios.get('http://localhost:7000/api/college/getallcollege')
            .then(res => setView(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleCollegeSearch = (e) => {
        setSearchCollege(e.target.value);
    };

    const handleLocationSearch = (e) => {
        setSearchLocation(e.target.value);
    };

    const handleFilterChange = (e) => {
        setFilterType(e.target.value);
    };

    const filteredView = view.filter(item => {
        if (filterType !== 'all' && item.type !== filterType) return false;
        if (searchCollege && !item.collegename.toLowerCase().includes(searchCollege.toLowerCase())) return false;
        if (searchLocation && !item.location.toLowerCase().includes(searchLocation.toLowerCase())) return false;
        return true;
    });

    return (
        <div>
            {/* <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'rgb(41, 196, 196)' }}>
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
                                <Link to={'/usercollege'}><h6>Colleges</h6></Link>
                            </li>
                            <li className="nav-item">
                                <h6>About</h6>
                            </li>
                            <li>
                                <Link to={'/profile'}><FontAwesomeIcon icon={faUser}/>Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
            <div className='container-fluid' style={{backgroundColor:'black',padding:'20px'}}>
                <div className='row  bs' style={{ marginLeft: '300px' }}>
                    <div className='col-md-3' >
                        <input
                            type="text"
                            className='form-control'
                            placeholder='Search college'
                            value={searchCollege}
                            onChange={handleCollegeSearch}
                        />
                    </div>
                    <div className='col-md-3' >
                        <input
                            type="text"
                            className='form-control'
                            placeholder='Search college by location'
                            value={searchLocation}
                            onChange={handleLocationSearch}
                        />
                    </div>
                    <div className='col-md-3'>
                        {/* <select
                            className='form-control'
                            value={filterType}
                            onChange={handleFilterChange}
                        >
                            <option value='all'>All</option>
                            <option value='ug'>UG</option>
                            <option value='pg'>PG</option>
                            <option value='diploma'>DIPLOMA</option>
                            <option value='polytechnic'>POLYTECHNIC</option>
                        </select> */}
                    </div>
                </div>
            </div>

            {filteredView.length === 0 ? (
                <div className="alert alert-warning" role="alert" style={{ marginLeft: '300px', marginTop: '20px' }}>
                    No colleges available.
                </div>
            ) : (
                filteredView.map((value) => (
                    <Card key={value._id} style={{ width: '50rem', marginTop: '20px', marginLeft: '400px' }}>
                        <div style={{ display: 'flex' }}>
                            <Card.Img variant="top" src={`http://localhost:7000/api/college/image/${value.image[0]}`} alt="college" style={{ flex: 1, width: 100 }} />
                            <div style={{ flex: 2 }}>
                                <Card.Body>
                                    <Card.Title>{value.collegename}</Card.Title>
                                    <Card.Text>{value.description}</Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>{value.contact}</ListGroup.Item>
                                    <ListGroup.Item>{value.location}</ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>
                        <Card.Body>
                            <Link to={`/userdetails/${value._id}`}><Card.Link href="#">View more</Card.Link></Link>
                        </Card.Body>
                    </Card>
                ))
            )}
        </div>
    );
}

export default UserCollegeView;
