// src/components/LoginForm.jsx
import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedRole) {
      alert("Please select a role.");
      return;
    }
    onLogin(selectedRole, selectedLanguage);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <h2>Choose your Role and Language</h2>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Role:
          <select value={selectedRole} onChange={e => setSelectedRole(e.target.value)} style={{ marginLeft: '10px' }}>
            <option value="">-- Select Role --</option>
            <option value="admin">Admin</option>
            <option value="learner">Learner</option>
          </select>
        </label>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>
          Language:
          <select value={selectedLanguage} onChange={e => setSelectedLanguage(e.target.value)} style={{ marginLeft: '10px' }}>
            <option>English</option>
            <option>Hindi</option>
            <option>Telugu</option>
          </select>
        </label>
      </div>

      <button type="submit">Continue</button>
    </form>
  );
};

export default LoginForm;
