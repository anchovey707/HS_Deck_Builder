import React from 'react';
import '../../../stylesheets/CardWindow/CharacterBackButton.css';

class CharacterBackButton extends React.Component {

  clickForceRefresh() {
    window.location = "";
  }

  render () {
    return (

    <div className='back-button'>
      <button onClick="clickForceRefresh()">Go Back</button>
    </div>
    )
  }
}

export default CharacterBackButton;