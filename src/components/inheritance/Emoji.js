import React, { Component } from 'react';

export default class Emoji extends Component {

    addEmoji = (text, emoji) => {
        return `${emoji} ${text} ${emoji}`;
    }

  render(overRide) {

      let text = 'this is emoji com';

      if( overRide ){
        text = overRide;
      }

    return (
      <>
      
      <div>{ text }</div>
      
      </>
    )
  }
}
