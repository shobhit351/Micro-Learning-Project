import React, { useState } from 'react';
import AdminDashboard from './components/AdminDashboard';
import LearnerDashboard from './components/LearnerDashboard';
import LoginForm from './components/LoginForm';
import PhoneLogin from './components/PhoneLogin';
import translations from './utils/translations';

const App = () => {
  const [role, setRole] = useState(null);
  const [language, setLanguage] = useState('English');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneVerified, setPhoneVerified] = useState(false);

  const [lessons, setLessons] = useState([]);
  const [completedLessons, setCompletedLessons] = useState([]);

  const t = translations[language] || translations.English;

  const handleLogin = (selectedRole, selectedLanguage) => {
    setRole(selectedRole);
    setLanguage(selectedLanguage);
  };

  const handlePhoneVerified = (enteredName, enteredPhone) => {
    setName(enteredName);
    setPhone(enteredPhone);
    setPhoneVerified(true);
  };

  const addLesson = (lesson) => {
    const newLesson = { ...lesson, id: Date.now() };
    setLessons(prev => [...prev, newLesson]);
  };

  const deleteLesson = (id) => {
    setLessons(prev => prev.filter(l => l.id !== id));
    setCompletedLessons(prev => prev.filter(cid => cid !== id));
  };

  const markCompleted = (id) => {
    if (!completedLessons.includes(id)) {
      setCompletedLessons(prev => [...prev, id]);
    }
  };

  const handleLogout = () => {
    setRole(null);
    setLanguage('English');
    setName('');
    setPhone('');
    setPhoneVerified(false);
    setLessons([]);
    setCompletedLessons([]);
  };

  if (!role) {
    return <LoginForm onLogin={handleLogin} t={t} />;
  }

  if (!phoneVerified) {
    return <PhoneLogin onVerify={handlePhoneVerified} t={t} role={role} />;
  }

  return (
    <div
      style={{
        padding: 20,
        maxWidth: 900,
        margin: '40px auto',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: '#f0f4f8',
        borderRadius: 12,
        boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
      }}
    >
      <div
        style={{
          marginBottom: 20,
          paddingBottom: 12,
          borderBottom: '2px solid #d1d9e6',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#333',
          fontWeight: '600',
          fontSize: 16,
        }}
      >
        <div>
          {t.role}: <span style={{ color: '#0077cc' }}>{role}</span> | {t.language}:{' '}
          <span style={{ color: '#0077cc' }}>{language}</span> | {t.phone}: <span style={{ color: '#0077cc' }}>{phone}</span>
        </div>
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: '#ff4d4f',
            color: 'white',
            border: 'none',
            borderRadius: 6,
            padding: '6px 14px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: 14,
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={e => (e.target.style.backgroundColor = '#d9363e')}
          onMouseLeave={e => (e.target.style.backgroundColor = '#ff4d4f')}
        >
          {t.logout}
        </button>
      </div>

      {role === 'admin' ? (
        <AdminDashboard lessons={lessons} addLesson={addLesson} deleteLesson={deleteLesson} t={t} />
      ) : (
        <LearnerDashboard
          lessons={lessons}
          completedLessons={completedLessons}
          markCompleted={markCompleted}
          name={name}
          t={t}
        />
      )}
    </div>
  );
};

export default App;
