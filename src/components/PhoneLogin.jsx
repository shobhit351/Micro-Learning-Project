// src/components/PhoneLogin.jsx
import React, { useState } from 'react';

const PhoneLogin = ({ onLoginWithPhone }) => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = /^[0-9]{10}$/.test(phone);
    if (!isValid) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!name.trim()) {
      alert('Please enter your name.');
      return;
    }
    onLoginWithPhone(phone, name.trim());
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <h2>Enter Your Name & Mobile Number</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ marginRight: '10px' }}
      />
      <input
        type="text"
        maxLength="10"
        placeholder="10-digit mobile number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        style={{ marginRight: '10px' }}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default PhoneLogin;
