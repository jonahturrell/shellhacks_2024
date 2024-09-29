import React, {useState} from 'react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('inbox');
  const emails = {
    inbox: ['Inbox email 1', 'Inbox email 2'],
    sent: ['Sent email 1', 'Sent email 2'],
    trash: ['Trash email 1', 'Trash email 2'],
  };

  return (
    <div style={{ display: 'flex', height: '100vh'}}>
      {/* Sidebar container */}
      <div style={{ width: '200px', backgroundColor: '#f19527', padding: '20px', height: '100vh' }}>
        <h3>Mail</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li onClick={() => setActiveTab('inbox')} style={getStyle(activeTab, 'inbox')}>Inbox</li>
          <li onClick={() => setActiveTab('sent')} style={getStyle(activeTab, 'sent')}>Sent</li>
          <li onClick={() => setActiveTab('trash')} style={getStyle(activeTab, 'trash')}>Trash</li>
        </ul>
      </div>

      {/* Content area */}
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
        <div>
          {emails[activeTab].map((email, index) => (
            <div key={index} style={{ marginBottom: '10px', borderBottom: '1px solid #ddd', paddingBottom: '5px' }}>
              {email}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Utility to style the active tab
const getStyle = (activeTab, tab) => ({
  cursor: 'pointer',
  padding: '10px',
  backgroundColor: activeTab === tab ? '#ddd' : '#f4f4f4',
});

export default Dashboard;