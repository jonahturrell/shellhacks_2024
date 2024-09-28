import React from 'react';
import cute_dino from './assets/stegosaurus-transparent.png';
import sneaky_dino from './assets/tenor.gif';
import './App.css'

function HomePage() {
	return (
		<div class='page-container'>
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
				<div className='auth-buttons'>
					<button className='btn signUp'>Sign Up</button>
					<button className='btn login'>Log In</button>
				</div>
			</header>

			<main>
				<div className='welcome'>
					<h1>Welcome to Dino Mail!</h1>
					<p>Dino Mail protects your privacy by providing you a temporary email. If you want to delete an email address, simply click the “extinct” button. </p>
					<img src={sneaky_dino} alt="Sneaky Dinosaur"/>
				</div>
			</main>
		</div>
	);
}

export default HomePage;