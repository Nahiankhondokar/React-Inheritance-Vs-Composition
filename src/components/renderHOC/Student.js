import React from 'react';

const Student = ({ count, incrementCount }) => {
  return (
    <div>
        <button type='submit' onClick={ incrementCount }>Student Clicked { count } times</button>
    </div>
  )
};

export default Student;