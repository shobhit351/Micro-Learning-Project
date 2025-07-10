import React, { useState } from 'react';
import LessonCard from './Lessoncard';

const AdminDashboard = ({ lessons, addLesson, deleteLesson, language }) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('text');
  const [content, setContent] = useState('');

  // Translations
  const translations = {
    English: {
      dashboardTitle: "Admin Dashboard",
      lessonTitle: "Lesson Title",
      lessonType: "Lesson Type",
      lessonContent: "Lesson Content or Video URL",
      uploadButton: "Upload Lesson",
      deleteButton: "Delete",
      allLessons: "All Lessons",
      text: "Text",
      video: "Video",
    },
    Hindi: {
      dashboardTitle: "व्यवस्थापक डैशबोर्ड",
      lessonTitle: "पाठ का शीर्षक",
      lessonType: "पाठ का प्रकार",
      lessonContent: "पाठ सामग्री या वीडियो URL",
      uploadButton: "पाठ अपलोड करें",
      deleteButton: "हटाएं",
      allLessons: "सभी पाठ",
      text: "पाठ्य",
      video: "वीडियो",
    },
    Telugu: {
      dashboardTitle: "అడ్మిన్ డాష్‌బోర్డ్",
      lessonTitle: "పాఠం శీర్షిక",
      lessonType: "పాఠం రకం",
      lessonContent: "పాఠ్యం లేదా వీడియో URL",
      uploadButton: "పాఠం అప్‌లోడ్ చేయండి",
      deleteButton: "తొలగించు",
      allLessons: "అన్ని పాఠాలు",
      text: "వచనం",
      video: "వీడియో",
    },
  };

  const t = translations[language] || translations.English;

  const handleUpload = (e) => {
    e.preventDefault();
    if (title && content) {
      addLesson({ title, type, content });
      setTitle('');
      setType('text');
      setContent('');
    }
  };

  return (
    <div>
      <h2>{t.dashboardTitle}</h2>
      <form onSubmit={handleUpload} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder={t.lessonTitle}
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="text">{t.text}</option>
          <option value="video">{t.video}</option>
        </select>
        <textarea
          placeholder={t.lessonContent}
          value={content}
          onChange={e => setContent(e.target.value)}
          required
        />
        <button type="submit">{t.uploadButton}</button>
      </form>

      <h3>{t.allLessons}</h3>
      {lessons.map(lesson => (
        <LessonCard key={lesson.id} lesson={lesson}>
          <button onClick={() => deleteLesson(lesson.id)} style={{ marginTop: '5px' }}>
            {t.deleteButton}
          </button>
        </LessonCard>
      ))}
    </div>
  );
};

export default AdminDashboard;
