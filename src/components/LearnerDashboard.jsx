// src/components/LearnerDashboard.jsx
import React from 'react';
import LessonCard from './LessonCard';
import translations from '../utils/translations';

const LearnerDashboard = ({ lessons, completedLessons, markCompleted, language }) => {
  const t = translations[language];

  // Filter lessons
  const incompleteLessons = lessons.filter(lesson => !completedLessons.includes(lesson.id));
  const completedLessonList = lessons.filter(lesson => completedLessons.includes(lesson.id));

  return (
    <div>
      {/* Greeting */}
      <h2>{t.welcome}, {name} 👋</h2>


      {/* My Lessons */}
      <section style={{ marginTop: '30px' }}>
        <h3>📚 {t.myLessons}</h3>
        {lessons.length === 0 ? (
          <p>{t.noLessons}</p>
        ) : (
          lessons.map(lesson => (
            <LessonCard key={lesson.id} lesson={lesson}>
              {!completedLessons.includes(lesson.id) ? (
                <button onClick={() => markCompleted(lesson.id)}>{t.markCompleted}</button>
              ) : (
                <span style={{ color: 'green', fontWeight: 'bold' }}>{t.completedLabel}</span>
              )}
            </LessonCard>
          ))
        )}
      </section>

      {/* Continue Learning */}
      <section style={{ marginTop: '30px' }}>
        <h3>✅ {t.continue}</h3>
        {incompleteLessons.length === 0 ? (
          <p>🎉 {t.completed}</p>
        ) : (
          incompleteLessons.map(lesson => (
            <LessonCard key={lesson.id} lesson={lesson}>
              <button onClick={() => markCompleted(lesson.id)}>{t.markCompleted}</button>
            </LessonCard>
          ))
        )}
      </section>

      {/* Completed Lessons */}
      <section style={{ marginTop: '30px' }}>
        <h3>🏅 {t.completed}</h3>
        {completedLessonList.length === 0 ? (
          <p>{t.noLessons}</p>
        ) : (
          completedLessonList.map(lesson => (
            <LessonCard key={lesson.id} lesson={lesson}>
              <span style={{ color: 'green', fontWeight: 'bold' }}>{t.completedLabel}</span>
            </LessonCard>
          ))
        )}
      </section>
    </div>
  );
};

export default LearnerDashboard;
