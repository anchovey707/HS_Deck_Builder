import React from 'react';
import DeckButtons from './DeckButtons';
import '../../../stylesheets/DeckOptions/DeckOptions.css';

const DeckOptions = () => (
  <div className='deck-options-container'>
    Deck Options 
   
    <DeckButtons />
 
  </div>
);

const styles = {
  DeckOptions:{
    height: '10vh',
    width: '22vw',
    border:'1px solid black',
    fontSize: '15px',
    fontWeight: 'bold',
    textAlign: 'center'
    
    
  },
 
}

export default DeckOptions;