import React from 'react';
import Emoji from './Emoji';



export default class Text extends Emoji {

    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super()
        
    }

  render() {

    const textDecorate  = this.addEmoji('this is from Text component', '===');

    return super.render(textDecorate);
    
  }
};
