import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import cute_dino from './assets/stegosaurus-transparent.png';

function Services() {
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
        <section className='services-section'>
          <h1 style={{ textAlign: 'center', textDecoration: 'underline' }}>Services</h1>
          <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
            <li>Create disposable email addresses</li>
            <li>Easily delete email addresses</li>
            <li>Send and receive messages</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Services;