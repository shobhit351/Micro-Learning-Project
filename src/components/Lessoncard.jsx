import React from 'react';

const LessonCard = ({ lesson, children }) => {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        padding: 16,
        margin: '12px 0',
        borderRadius: 8,
        backgroundColor: '#fff',
        boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
      }}
    >
      <h4 style={{ marginBottom: 8, color: '#333' }}>
        {lesson.title} <span style={{ fontWeight: 'normal', color: '#666' }}>({lesson.type})</span>
      </h4>
      {lesson.type === 'video' ? (
        <a
          href={lesson.content}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#1a73e8', textDecoration: 'underline' }}
        >
          {lesson.content}
        </a>
      ) : (
        <p style={{ color: '#555' }}>{lesson.content}</p>
      )}
      {children}
    </div>
  );
};

export default LessonCard;
