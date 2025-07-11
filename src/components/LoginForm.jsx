import React, { useState } from 'react';

const LoginForm = ({ onLogin, t }) => {
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedRole) {
      alert(t.selectRoleLanguage || "Please select a role and language.");
      return;
    }
    onLogin(selectedRole, selectedLanguage);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: 30,
        maxWidth: 400,
        margin: '100px auto',
        backgroundColor: '#f9fbff',
        borderRadius: 10,
        boxShadow: '0 10px 20px rgba(26,115,232,0.1)',
        textAlign: 'center',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2 style={{ marginBottom: 25, color: '#1a73e8' }}>
        {t.selectRoleLanguage || "Select Role and Language"}
      </h2>

      <div style={{ marginBottom: 20 }}>
        <label style={{ fontWeight: '600', color: '#333', display: 'block', marginBottom: 6 }}>
          {t.role || "Role"}
        </label>
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          style={{
            padding: '8px 12px',
            fontSize: 14,
            borderRadius: 6,
            border: '1px solid #ccc',
            outline: 'none',
            width: '100%',
          }}
        >
          <option value="">--</option>
          <option value="admin">Admin</option>
          <option value="learner">Learner</option>
        </select>
      </div>

      <div style={{ marginBottom: 30 }}>
        <label style={{ fontWeight: '600', color: '#333', display: 'block', marginBottom: 6 }}>
          {t.language || "Language"}
        </label>
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          style={{
            padding: '8px 12px',
            fontSize: 14,
            borderRadius: 6,
            border: '1px solid #ccc',
            outline: 'none',
            width: '100%',
          }}
        >
          <option>English</option>
          <option>Hindi</option>
          <option>Telugu</option>
        </select>
      </div>

      <button
        type="submit"
        style={{
          backgroundColor: '#1a73e8',
          color: 'white',
          border: 'none',
          borderRadius: 6,
          padding: '10px 20px',
          fontWeight: '600',
          cursor: 'pointer',
          fontSize: 16,
        }}
      >
        {t.submit || "Continue"}
      </button>
    </form>
  );
};

export default LoginForm;
