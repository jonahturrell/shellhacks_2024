import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './Home';
import LoginPage from './Login';
import SignUpPage from './Signup';
import Dashboard from './Dashboard';
import EmailOutputBox from './EmailOutput';
import AboutUs from './About';
import Services from './Services';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [emailData, setEmailData] = useState(''); // Optional: Manage email output at the App level

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/dashboard" 
                 element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path='/services' element={<Services />} />
          <Route
            path="/dashboard"
            element={isAuthenticated ? (
              <>
                <Dashboard />
                {/* Optionally pass setEmailData to allow passing output to App */}
                <EmailOutputBox setEmailData={setEmailData} />
                <div>{emailData && <pre>{emailData}</pre>}</div> {/* Display email data here if passed to App */}
              </>
            ) : (
              <Navigate to="/login" />
            )}
          />
          <Route path='/compose' element={<EmailOutputBox />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;