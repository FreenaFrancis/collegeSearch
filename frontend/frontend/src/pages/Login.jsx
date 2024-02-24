import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:7000/api/user/login", { email, password })
      .then(res => {
        if (res.data.Status === "Success") {
          if (res.data.role === "admin") {
            navigate("/admin");
          } else {
            navigate("/home");
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
