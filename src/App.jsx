import './App.css';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState(null);

  if (!role) {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h2>Welcome to Micro-Learning Platform</h2>
        <select onChange={e => setRole(e.target.value)} defaultValue="">
          <option value="" disabled>Select your role</option>
          <option value="learner">Learner</option>
          <option value="admin">Admin</option>
        </select>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{role === 'admin' ? 'Admin Dashboard' : 'Learner Dashboard'}</h2>
      <p>More features coming soon...</p>
    </div>
  );
}

export default App;
