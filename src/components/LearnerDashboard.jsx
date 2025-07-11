import React, { useState } from 'react';
import LessonCard from './LessonCard';

const LearnerDashboard = ({ lessons, completedLessons, markCompleted, name, t }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const greet = t.welcome || 'Welcome';

  const filteredLessons = lessons.filter(lesson =>
    lesson.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const continueLessons = filteredLessons.filter(lesson => !completedLessons.includes(lesson.id));
  const completed = filteredLessons.filter(lesson => completedLessons.includes(lesson.id));

  return (
    <div>
      <h2 style={{ color: '#444', marginBottom: 15 }}>
        👋 {greet}, {name}!
      </h2>

      <input
        type="text"
        placeholder={t.searchPlaceholder}
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: 12,
          marginBottom: 30,
          borderRadius: 8,
          border: '1px solid #ccc',
          fontSize: 16,
          boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
        }}
      />

      <section style={{ marginBottom: 40 }}>
        <h3 style={{ color: '#1a73e8', marginBottom: 10 }}>{t.myLessons}</h3>
        {filteredLessons.length === 0 ? (
          <p style={{ color: '#777' }}>{t.noLessons}</p>
        ) : (
          filteredLessons.map(lesson => <LessonCard key={lesson.id} lesson={lesson} />)
        )}
      </section>

      <section style={{ marginBottom: 40 }}>
        <h3 style={{ color: '#ff9800', marginBottom: 10 }}>{t.continueLearning}</h3>
        {continueLessons.length === 0 ? (
          <p style={{ color: '#388e3c', fontWeight: '600' }}>🎉 All lessons completed!</p>
        ) : (
          continueLessons.map(lesson => (
            <LessonCard key={lesson.id} lesson={lesson}>
              <button
                onClick={() => markCompleted(lesson.id)}
                style={{
                  marginTop: 12,
                  padding: '8px 18px',
                  backgroundColor: '#388e3c',
                  border: 'none',
                  borderRadius: 6,
                  color: '#fff',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: 14,
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={e => (e.target.style.backgroundColor = '#2a6e2b')}
                onMouseLeave={e => (e.target.style.backgroundColor = '#388e3c')}
              >
                {t.markCompleted}
              </button>
            </LessonCard>
          ))
        )}
      </section>

      <section>
        <h3 style={{ color: '#4caf50', marginBottom: 10 }}>{t.completedLessons}</h3>
        {completed.length === 0 ? (
          <p style={{ color: '#777' }}>No lessons completed yet.</p>
        ) : (
          completed.map(lesson => (
            <LessonCard key={lesson.id} lesson={lesson}>
              <span style={{ color: '#4caf50', fontWeight: 'bold' }}>{t.completed}</span>
            </LessonCard>
          ))
        )}
      </section>
    </div>
  );
};

export default LearnerDashboard;
