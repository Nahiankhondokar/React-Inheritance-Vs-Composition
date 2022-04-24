import React from 'react';

const Text = ({ addEmoji, addBracket }) => {


  let text = 'this is composition';

  if(addEmoji){
    text = addEmoji(text, '##');
  }
  
  if(addBracket){
    text = addBracket(text);
  }

  return (
    <div>

    {
       text
    }

    </div>
  )
};

export default Text;