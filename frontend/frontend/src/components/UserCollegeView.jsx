import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function UserCollegeView() {
  const [view, setView] = useState([]);
  const [searchCollege, setSearchCollege] = useState('');
  const [searchLocation, setSearchLocation] = useState('');

  useEffect(() => {
    axios.get('http://localhost:7000/api/college/getallcollege')
      .then(res => setView(res.data))
      .catch(err => console.log(err));
  }, []);
const id=useParams()
  const handleCollegeSearch = (e) => {
    setSearchCollege(e.target.value);
  };

  const handleLocationSearch = (e) => {
    setSearchLocation(e.target.value);
  };

  const filteredView = view.filter(item => {
    if (searchCollege && !item.collegename.toLowerCase().includes(searchCollege.toLowerCase())) return false;
    if (searchLocation && !item.location.toLowerCase().includes(searchLocation.toLowerCase())) return false;
    return true;
  });

  return (
    <div>
      <div className='container-fluid' style={{ backgroundColor: 'black', padding: '20px' }}>
        <Link to={`/home`}><FontAwesomeIcon icon={faArrowLeft} style={{ color: "white" }} /></Link>
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
        </div>
      </div>

      {filteredView.length === 0 ? (
        <div className="alert alert-warning" role="alert" style={{ marginLeft: '300px', marginTop: '20px' }}>
          No colleges available.
        </div>
      ) : (
        filteredView.map((value) => (
          <div key={value._id} className="card" style={{ width: '50rem', marginTop: '20px', marginLeft: '400px' }}>
            <div style={{ display: 'flex' }}>
              <img className="card-img-top" src={`http://localhost:7000/api/college/image/${value.image[0]}`} alt="college" style={{ flex: 1, width: 100 }} />
              <div style={{ flex: 2 }}>
                <div className="card-body">
                  <h5 className="card-title">{value.collegename}</h5>
                  <p className="card-text">{value.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{value.contact}</li>
                  <li className="list-group-item">{value.location}</li>
                </ul>
              </div>
            </div>
            <div className="card-body">
              <Link to={`/userdetails/${value._id}`} className="card-link">View more</Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default UserCollegeView;
