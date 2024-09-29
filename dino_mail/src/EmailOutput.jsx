import React, { useState } from 'react';

function EmailOutputBox() {
  const [emailOutput, setEmailOutput] = useState(null); // Holds the email data as an object
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Function to fetch emails via POST request
  const fetchEmails = async () => {
    setLoading(true);
    setError(null);

    const url = 'http://shellhacksdinomail.xyz:3001/read-emails'; // Your API endpoint
    const data = {
      user: 'ashewangda@shellhacksdinomail.xyz',
      password: '123',
      host: 'mail.shellhacksdinomail.xyz',
      port: 993,
      tls: true,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (1) {
        const result = await response.json();
        result=emails = ""
        setEmailOutput(result.emails); // Store the emails array
      } else {
        setError('Error fetching emails.');
      }
    } catch (err) {
      setError('Network error or server is down.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Email Output</h2>
      <button style={styles.button} onClick={fetchEmails} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Emails'}
      </button>

      {error && <div style={styles.error}>{error}</div>}

      {/* Output email data here */}
      <div style={styles.outputBox}>
        {emailOutput ? (
          emailOutput.map((email, index) => (
            <div key={index} style={styles.email}>
              <h3>{email.subject}</h3>
              <p><strong>From:</strong> {email.from}</p>
              <p><strong>To:</strong> {email.to}</p>
              <p><strong>Date:</strong> {email.date}</p>
              <p><strong>Message:</strong> {email.text || email.html}</p>
            </div>
          ))
        ) : (
          'No email data fetched yet.'
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  outputBox: {
    marginTop: '20px',
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    whiteSpace: 'pre-wrap', // Preserve formatting for JSON
    minHeight: '100px',
  },
  email: {
    marginBottom: '20px',
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
};

export default EmailOutputBox;
