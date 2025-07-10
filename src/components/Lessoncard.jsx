// src/components/LessonCard.jsx
import React from 'react';

const LessonCard = ({ lesson, children }) => (
  <div style={{ border: '1px solid gray', padding: '10px', margin: '10px 0' }}>
    <h4>{lesson.title} ({lesson.type})</h4>
    {lesson.type === 'video' ? (
      <a href={lesson.content} target="_blank" rel="noopener noreferrer">{lesson.content}</a>
    ) : (
      <p>{lesson.content}</p>
    )}
    {children}
  </div>
);

export default LessonCard;
