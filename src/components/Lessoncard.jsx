import React from 'react';

const LessonCard = ({ lesson, children }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '8px'
    }}>
      <h4>{lesson.title}</h4>
      {lesson.type === 'text' ? (
        <p>{lesson.content}</p>
      ) : (
        <iframe
          width="300"
          height="200"
          src={lesson.content}
          title={lesson.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
      {children}
    </div>
  );
};

export default LessonCard;
