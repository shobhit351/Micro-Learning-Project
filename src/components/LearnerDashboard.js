import React from 'react';
import LessonCard from './Lessoncard';

const LearnerDashboard = ({ lessons, completedLessons, markCompleted, language }) => {
  const greetings = {
    English: "Hello Learner!",
    Hindi: "नमस्ते विद्यार्थी!",
    Telugu: "హలో విద్యార్థి!"
  };

  const continueLessons = lessons.filter(l => !completedLessons.includes(l.id));
  const completed = lessons.filter(l => completedLessons.includes(l.id));

  return (
    <div>
      <h2>{greetings[language] || "Hello Learner!"}

      <section>
        <h3>📚 My Lessons</h3>
        {lessons.map(lesson => (
          <LessonCard key={lesson.id} lesson={lesson}>
            {!completedLessons.includes(lesson.id) && (
              <button onClick={() => markCompleted(lesson.id)}>Mark as Completed</button>
            )}
          </LessonCard>
        ))}
      </section>

      <section>
        <h3>✅ Continue Learning</h3>
        {continueLessons.map(lesson => (
          <LessonCard key={lesson.id} lesson={lesson}>
            <button onClick={() => markCompleted(lesson.id)}>Complete</button>
          </LessonCard>
        ))}
      </section>

      <section>
        <h3>🏅 Completed Lessons</h3>
        {completed.map(lesson => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </section>
    </div>
  );
};

export default LearnerDashboard;
