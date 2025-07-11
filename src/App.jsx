/// src/App.jsx
import React, { useState } from 'react';
import AdminDashboard from './components/AdminDashboard';
import LearnerDashboard from './components/LearnerDashboard';
import LoginForm from './components/LoginForm';
import PhoneLogin from './components/PhoneLogin';
import translations from './utils/translations';

const App = () => {
  const [role, setRole] = useState(null);
  const [language, setLanguage] = useState('English');
  const [phone, setPhone] = useState(null);
  const [name, setName] = useState('');
  const [lessons, setLessons] = useState([]);
  const [completedLessons, setCompletedLessons] = useState([]);

  const handleLogin = (selectedRole, selectedLanguage) => {
    setRole(selectedRole);
    setLanguage(selectedLanguage);
    setPhone(null);
    setName('');
  };

  const handlePhoneLogin = (enteredPhone, enteredName) => {
    setPhone(enteredPhone);
    setName(enteredName);
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
    setCompletedLessons(prev => [...prev, id]);
  };

  const handleLogout = () => {
    setRole(null);
    setLanguage('English');
    setPhone(null);
    setName('');
    setLessons([]);
    setCompletedLessons([]);
  };

  const t = translations[language];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: 'auto' }}>
      {!role ? (
        <LoginForm onLogin={handleLogin} />
      ) : !phone ? (
        <PhoneLogin onLoginWithPhone={handlePhoneLogin} />
      ) : (
        <>
          <div style={{ marginBottom: '20px' }}>
            <strong>{t.role}:</strong> {role} | <strong>{t.language}:</strong> {language} | <strong>📱:</strong> {phone}
            <button onClick={handleLogout} style={{ marginLeft: '20px' }}>{t.logout}</button>
          </div>

          <h2>Welcome, {name} 👋</h2>

          {role === 'admin' ? (
            <AdminDashboard
              lessons={lessons}
              addLesson={addLesson}
              deleteLesson={deleteLesson}
              language={language}
            />
          ) : (
            <LearnerDashboard
              lessons={lessons}
              completedLessons={completedLessons}
              markCompleted={markCompleted}
              language={language}
            />
          )}
        </>
      )}
    </div>
  );
};

export default App;
