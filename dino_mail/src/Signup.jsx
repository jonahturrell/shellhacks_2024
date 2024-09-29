import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cute_dino from './assets/stegosaurus-transparent.png';
import './App.css';

function SignUpPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log('Signing up with:', { firstName, lastName, dob, phoneNumber, email, password });
  };

  return (
    <div>
      <header className='navbar'>
				<div className='main-logo'>
					<img src={cute_dino} alt="Main Logo"/>
				</div>
				<nav className='nav-tabs'>
					<ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
					</ul>
				</nav>
			</header>
      <div class="sign-up-container">
  <h2>Register</h2>
  <form>
    <div class="form-group">
      <label for="first-name">First Name:</label>
      <input type="text" id="first-name" name="first-name" />
    </div>
    <div class="form-group">
      <label for="last-name">Last Name:</label>
      <input type="text" id="last-name" name="last-name" />
    </div>
    <div class="form-group">
      <label for="dob">Date of Birth:</label>
      <input type="date" id="dob" name="dob" />
    </div>
    <div class="form-group">
      <label for="phone-number">Phone Number:</label>
      <input type="tel" id="phone-number" name="phone-number" />
    </div>
    <div class="form-group">
      <label for="email">Email Address:</label>
      <input type="email" id="email" name="email" />
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" />
    </div>
    <div class="form-group">
      <label for="confirm-password">Confirm Password:</label>
      <input type="password" id="confirm-password" name="confirm-password" />
    </div>
  </form>
  <button type="submit">Confirm</button>
  </div>
  </div>
  );
}

export default SignUpPage;