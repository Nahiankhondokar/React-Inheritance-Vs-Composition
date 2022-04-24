import React from 'react';

const User = (props) => {

    const { count, incrementCount } = props;
 
  return (
    <div>
        <button onMouseOver={ incrementCount }>User Hovered  {count}  times</button>
    </div>
  )
};

export default User;