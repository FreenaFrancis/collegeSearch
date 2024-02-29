import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import NavBars from '../components/Home';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

const {id} = useParams()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:7000/api/user/login", { email, password })
      .then(res => {
        if (res.data.Status === "Success") {
          const userId = res.data.userId; // Adjust the property name as per your server response
          if (res.data.role === "admin") {
            navigate("/admin");
            alert("admin login successfully")
          } else {
            
            navigate(`/home`); // Pass userId as a parameter to the home page
          alert("userlogined successfully")
          }
        } else {
          // Handle unsuccessful login (e.g., display an error message)
          console.log("Login failed");
        }
      })
      .catch(err => console.error(err));
  };
  
  

  return (
    <div>
    <NavBars/>
      <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <div className="switch">
          <span>Already have an account? </span>
          <Link to={'/register'}>Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
