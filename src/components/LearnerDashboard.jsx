import React from 'react';
import LessonCard from './Lessoncard';

const LearnerDashboard = ({ lessons, completedLessons, markCompleted, language }) => {
  const greetings = {
    English: "Hello Learner!",
    Hindi: "नमस्ते विद्यार्थी!",
    Telugu: "హలో విద్యార్థి!"
  };
  const translations = {
  English: {
    greeting: "Hello Learner!",
    myLessons: "📚 My Lessons",
    continue: "✅ Continue Learning",
    completed: "🏅 Completed Lessons",
    markCompleted: "Mark as Completed"
  },
  Hindi: {
    greeting: "नमस्ते विद्यार्थी!",
    myLessons: "📚 मेरे पाठ",
    continue: "✅ सीखना जारी रखें",
    completed: "🏅 पूर्ण किए गए पाठ",
    markCompleted: "पूर्ण किया गया चिह्नित करें"
  },
  Telugu: {
    greeting: "హలో విద్యార్థి!",
    myLessons: "📚 నా పాఠాలు",
    continue: "✅ కొనసాగించు అభ్యాసం",
    completed: "🏅 పూర్తయిన పాఠాలు",
    markCompleted: "పూర్తయినట్లు గుర్తించు"
  }
};

const t = translations[language] || translations["English"];

  const continueLessons = lessons.filter(l => !completedLessons.includes(l.id));
  const completed = lessons.filter(l => completedLessons.includes(l.id));

  return (
    <div>
      <h2>{t.greeting}</h2>

<section>
  <h3>{t.myLessons}</h3>
  {lessons.map(lesson => (
    <Lessoncard key={lesson.id} lesson={lesson}>
      {!completedLessons.includes(lesson.id) && (
        <button onClick={() => markCompleted(lesson.id)}>{t.markCompleted}</button>
      )}
    </Lessoncard>
  ))}
</section>

<section>
  <h3>{t.continue}</h3>
  {continueLessons.map(lesson => (
    <Lessoncard key={lesson.id} lesson={lesson}>
      <button onClick={() => markCompleted(lesson.id)}>{t.markCompleted}</button>
    </Lessoncard>
  ))}
</section>

<section>
  <h3>{t.completed}</h3>
  {completed.map(lesson => (
    <Lessoncard key={lesson.id} lesson={lesson} />
  ))}
</section>

    </div>
  );
};

