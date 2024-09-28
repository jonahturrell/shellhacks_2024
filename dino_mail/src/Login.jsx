import React, { useState } from 'react';
import cute_dino from './assets/stegosaurus-transparent.png';
import './App.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with:', { username, password });
  };

  return (
    <div>
      <header className='navbar'>
				<div className='main-logo'>
					<img src={cute_dino} alt="Main Logo"/>
				</div>
				<nav className='nav-tabs'>
					<ul>
						<li><a href="#home">Home</a></li>
						<li><a href="#about">About Us</a></li>
						<li><a href="#services">Services</a></li>
						<li><a href="#contact">Contact</a></li>
					</ul>
				</nav>
        {/* <div className='auth-buttons'>
					<button className='btn signUp'>Sign Up</button>
					<Link to="/login">
						<button className='btn login'>Log In</button>
					</Link>
				</div> */}
			</header>
    <div className='login-container'>
      <h2>Log In</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div>
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
}

export default LoginPage;