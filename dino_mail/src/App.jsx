import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './Home';
import LoginPage from './Login';
import SignUpPage from './Signup';
import Dashboard from './Dashboard';
import AboutUs from './About';
import Services from './Services'; // Ensure you have the Services component

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} /> {/* Make sure the Services component is defined */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;