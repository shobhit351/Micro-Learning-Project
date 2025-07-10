import './App.css';
import { useState } from 'react';
import LoginForm from './components/LoginForm';
import AdminDashboard from './components/AdminDashboard';
import LearnerDashboard from './components/LearnerDashboard';

function App() {
  const [role, setRole] = useState(null);
  const [language, setLanguage] = useState('English');
  const [lessons, setLessons] = useState([]);
  const [completedLessons, setCompletedLessons] = useState([]);

  const addLesson = (newLesson) => {
    setLessons([...lessons, { ...newLesson, id: Date.now() }]);
  };

  const deleteLesson = (id) => {
    setLessons(lessons.filter(lesson => lesson.id !== id));
    setCompletedLessons(completedLessons.filter(cid => cid !== id));
  };

  const markCompleted = (id) => {
    if (!completedLessons.includes(id)) {
      setCompletedLessons([...completedLessons, id]);
    }
  };

  if (!role) {
    return <LoginForm onLogin={setRole} setLanguage={setLanguage} />;
  }

  return (
    <div style={{ padding: '20px' }}>
      {role === 'admin' ? (
        <AdminDashboard lessons={lessons} addLesson={addLesson} deleteLesson={deleteLesson} />
      ) : (
        <LearnerDashboard
          lessons={lessons}
          completedLessons={completedLessons}
          markCompleted={markCompleted}
          language={language}
        />
      )}
    </div>
  );
}

export default App;
