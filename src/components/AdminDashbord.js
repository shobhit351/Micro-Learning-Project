import React, { useState } from 'react';
import LessonCard from './LessonCard';

const AdminDashboard = ({ lessons, addLesson, deleteLesson }) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('text');
  const [content, setContent] = useState('');

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
      <h2>Admin Dashboard</h2>
      <form onSubmit={handleUpload} style={{ marginBottom: '20px' }}>
        <input type="text" placeholder="Lesson Title" value={title} onChange={e => setTitle(e.target.value)} required />
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>
        <textarea
          placeholder="Lesson Content or Video URL"
          value={content}
          onChange={e => setContent(e.target.value)}
          required
        />
        <button type="submit">Upload Lesson</button>
      </form>

      <h3>All Lessons</h3>
      {lessons.map(lesson => (
        <LessonCard key={lesson.id} lesson={lesson}>
          <button onClick={() => deleteLesson(lesson.id)} style={{ marginTop: '5px' }}>
            Delete
          </button>
        </LessonCard>
      ))}
    </div>
  );
};

export default AdminDashboard;
