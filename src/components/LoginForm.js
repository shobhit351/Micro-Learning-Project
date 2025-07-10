import React, { useState } from 'react';

const LoginForm = ({ onLogin, setLanguage }) => {
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleLogin = () => {
    if (selectedRole) {
      setLanguage(selectedLanguage);
      onLogin(selectedRole);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Welcome to Micro-Learning Platform</h2>
      <div>
        <label>Select your role: </label>
        <select onChange={(e) => setSelectedRole(e.target.value)} defaultValue="">
          <option value="" disabled>Select</option>
          <option value="learner">Learner</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div style={{ marginTop: '10px' }}>
        <label>Select language: </label>
        <select onChange={(e) => setSelectedLanguage(e.target.value)} defaultValue="English">
          <option>English</option>
          <option>Hindi</option>
          <option>Telugu</option>
        </select>
      </div>
      <button style={{ marginTop: '20px' }} onClick={handleLogin}>Continue</button>
    </div>
  );
};

export default LoginForm;

