import React from 'react';
import { Link } from 'react-router-dom';
import cute_dino from './assets/stegosaurus-transparent.png';
import sneaky_dino from './assets/tenor.gif';
import './App.css';

function HomePage() {
  return (
    <div className='page-container'>
      <header className='navbar'>
        <div className='main-logo'>
          <img src={cute_dino} alt="Main Logo" />
        </div>
        <nav className='nav-tabs'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
          </ul>
        </nav>
        <div className='auth-buttons'>
          <Link to="/signUp">
            <button className='btn signUp'>Sign Up</button>
          </Link>
          <Link to="/login">
            <button className='btn login'>Log In</button>
          </Link>
        </div>
      </header>

      <main>
        <div className='welcome'>
          <h1>Welcome to Dino Mail!</h1>
          <p>
            Dino Mail protects your privacy by providing you a temporary email. If you want to delete an email address, simply click the “extinct” button.
          </p>
          <img src={sneaky_dino} alt="Sneaky Dinosaur" />
        </div>
      </main>
    </div>
  );
}

export default HomePage;