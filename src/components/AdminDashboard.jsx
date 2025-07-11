import React, { useState } from 'react';
import LessonCard from './LessonCard';

const AdminDashboard = ({ lessons, addLesson, deleteLesson, t }) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('text');
  const [content, setContent] = useState('');

  const handleUpload = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert(`${t.upload} failed: Please enter title and content.`);
      return;
    }
    addLesson({ title, type, content });
    setTitle('');
    setType('text');
    setContent('');
  };

  return (
    <div>
      <h2 style={{ color: '#1a73e8', marginBottom: 15 }}>{t.adminDashboard}</h2>
      <form
        onSubmit={handleUpload}
        style={{
          marginBottom: 30,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          alignItems: 'center',
          backgroundColor: '#ffffff',
          padding: 20,
          borderRadius: 8,
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        }}
      >
        <input
          type="text"
          placeholder={t.lessonTitle}
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          style={{
            flex: '1 1 200px',
            padding: 10,
            fontSize: 14,
            borderRadius: 6,
            border: '1px solid #ccc',
            outline: 'none',
          }}
        />
        <select
          value={type}
          onChange={e => setType(e.target.value)}
          style={{
            padding: 10,
            fontSize: 14,
            borderRadius: 6,
            border: '1px solid #ccc',
            outline: 'none',
            width: 130,
          }}
        >
          <option value="text">{t.lessonTypeText}</option>
          <option value="video">{t.lessonTypeVideo}</option>
        </select>
        <input
          type="text"
          placeholder={t.contentPlaceholder}
          value={content}
          onChange={e => setContent(e.target.value)}
          required
          style={{
            flex: '2 1 300px',
            padding: 10,
            fontSize: 14,
            borderRadius: 6,
            border: '1px solid #ccc',
            outline: 'none',
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#1a73e8',
            color: 'white',
            padding: '10px 24px',
            borderRadius: 6,
            border: 'none',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: 14,
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={e => (e.target.style.backgroundColor = '#155db2')}
          onMouseLeave={e => (e.target.style.backgroundColor = '#1a73e8')}
        >
          {t.upload}
        </button>
      </form>

      <h3 style={{ color: '#333', marginBottom: 12 }}>{t.allLessons}</h3>
      {lessons.length === 0 ? (
        <p style={{ color: '#777' }}>{t.noLessons}</p>
      ) : (
        lessons.map(lesson => (
          <LessonCard key={lesson.id} lesson={lesson}>
            <button
              onClick={() => deleteLesson(lesson.id)}
              style={{
                marginTop: 8,
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                padding: '6px 14px',
                borderRadius: 6,
                cursor: 'pointer',
                fontWeight: '600',
              }}
              onMouseEnter={e => (e.target.style.backgroundColor = '#a52834')}
              onMouseLeave={e => (e.target.style.backgroundColor = '#dc3545')}
            >
              Delete
            </button>
          </LessonCard>
        ))
      )}
    </div>
  );
};

export default AdminDashboard;
