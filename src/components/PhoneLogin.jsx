import React, { useState } from 'react';

const PhoneLogin = ({ onVerify, t, role }) => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert(t.enterName);
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert(t.enterPhone);
      return;
    }

    onVerify(name.trim(), phone);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20, maxWidth: 400, margin: 'auto' }}>
      <h2>{t.login} - {role.charAt(0).toUpperCase() + role.slice(1)}</h2>

      <div style={{ marginBottom: 10 }}>
        <input
          type="text"
          placeholder={t.enterName}
          value={name}
          onChange={e => setName(e.target.value)}
          style={{ width: '100%', padding: 8, fontSize: 16 }}
          required
        />
      </div>

      <div style={{ marginBottom: 10 }}>
        <input
          type="tel"
          placeholder={t.enterPhone}
          value={phone}
          onChange={e => setPhone(e.target.value)}
          style={{ width: '100%', padding: 8, fontSize: 16 }}
          required
          maxLength={10}
        />
      </div>

      <button type="submit" style={{ padding: '8px 20px', cursor: 'pointer' }}>
        {t.submit}
      </button>
    </form>
  );
};

export default PhoneLogin;
