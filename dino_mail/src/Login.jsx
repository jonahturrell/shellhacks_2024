import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cute_dino from './assets/stegosaurus-transparent.png';
import './App.css';

const LoginPage = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Authentication check
    if (username === 'user' && password === 'pass') {
		setIsAuthenticated(true);
		navigate('/dashboard');
	} else {
		alert('Invalid credentials');
	}
  };

  return (
    <div>
      <header className='navbar'>
        <div className='main-logo'>
          <img src={cute_dino} alt="Main Logo" />
        </div>
        <nav className='nav-tabs'>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
          </ul>
        </nav>
      </header>
      <div className='login-container'>
        <h2>Log In</h2>
        <form onSubmit={handleLogin}>
          <div className='form-group'>
            <label>Username:</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>
          <div className='form-group'>
            <label>Password:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">Confirm</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;