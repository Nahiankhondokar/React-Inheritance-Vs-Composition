import React from 'react';

const Text = ({ addEmoji }) => {

    const text = 'i am javascript programming language';

  return (
    <div>
        {
            addEmoji ? addEmoji('Hello this is Composition', '===') : text
        }
    </div>
  )
};

export default Text;