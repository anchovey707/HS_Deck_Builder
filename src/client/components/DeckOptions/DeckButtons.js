import React from 'react';
import '../../../stylesheets/DeckButtons.css'

class DeckButtons extends React.Component {

  render () {
    return (

      <div className='button-container'>
        <button className='button'>Load</button>
        <button className='button'>Save</button>
        <button className='button'>Delete</button>
      </div>
    );
  }
}


export default DeckButtons;