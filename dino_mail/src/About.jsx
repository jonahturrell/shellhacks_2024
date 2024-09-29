import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import cute_dino from './assets/stegosaurus-transparent.png';

function AboutUs() {
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
        <section className='about-section'>
          <h1 style={{ textAlign: 'center', textDecoration: 'underline' }}>About Us</h1>

          <div className='developers'>
            <h2>Front End Developers</h2>

            <div className='developer'>
              <h3>Anna Zheng</h3>
              <p>Senior Computer Science at University of Central Florida</p>
            </div>

            <div className='developer'>
              <h3>Haley Bae</h3>
              <p>2nd year Computer Science major at University of Central Florida</p>
            </div>

            <h2>Back End Developers</h2>

            <div className='developer'>
              <h3>Kayla</h3>
              <p>3rd year Computer Science major at University of Central Florida</p>
            </div>

            <div className='developer'>
              <h3>Jonah</h3>
              <p>2nd year Computer Science major at University of Central Florida</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AboutUs;