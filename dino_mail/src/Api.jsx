import React, { useState } from 'react';

function ReadEmails() {
  const [response, setResponse] = useState(null);

  const handleReadEmails = async () => {
    const url = 'http://shellhacksdinomail.xyz:3001/read-emails';
    const data = {
      user: 'ashewangda@shellhacksdinomail.xyz',
      password: '123',
      host: 'mail.shellhacksdinomail.xyz',
      port: 993,
      tls: true,
    };

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        const jsonResponse = await res.json();
        setResponse(jsonResponse);
      } else {
        setResponse({ error: 'Failed to fetch emails' });
      }
    } catch (error) {
      setResponse({ error: 'Network error or server is not reachable' });
    }
  };

  return (
    <div>
      <h1>Read Emails</h1>
      <button onClick={handleReadEmails}>Fetch Emails</button>

      {response && (
        <div>
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default ReadEmails;