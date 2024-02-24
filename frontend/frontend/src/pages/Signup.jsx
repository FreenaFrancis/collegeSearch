import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Update axios.post to include the full URL
    axios.post('http://localhost:7000/api/user/register', { name, email, password })
      .then(response => {
        console.log(response);
        navigate('/login')
        // ...
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div>
      <div className="auth-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" required value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Register</button>
        </form>
        <div className="switch">
          <span>Already have an account? </span>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
