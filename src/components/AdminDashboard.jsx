// src/components/AdminDashboard.jsx
import React, { useState } from 'react';
import LessonCard from './LessonCard';
import translations from '../utils/translations';

const AdminDashboard = ({ lessons, addLesson, deleteLesson, language }) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('text');
  const [content, setContent] = useState('');
  const t = translations[language];

  const handleUpload = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("Please enter both title and content.");
      return;
    }
    addLesson({ title, type, content });
    setTitle('');
    setType('text');
    setContent('');
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <form onSubmit={handleUpload} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Lesson Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="text">Text</option>
          <option value="video">Video URL</option>
        </select>
        <input
          type="text"
          placeholder="Lesson Content or Video URL"
          value={content}
          onChange={e => setContent(e.target.value)}
          required
        />
        <button type="submit">{t.uploadLesson}</button>
      </form>

      <h3>{t.myLessons}</h3>
      {lessons.length === 0 && <p>{t.noLessons}</p>}
      {lessons.map(lesson => (
        <LessonCard key={lesson.id} lesson={lesson}>
          <button onClick={() => deleteLesson(lesson.id)}>{t.delete}</button>
        </LessonCard>
      ))}
    </div>
  );
};

export default AdminDashboard;
