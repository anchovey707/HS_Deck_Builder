import React from 'react';
import Buttons from './Buttons';


const DeckOptions = () => (
  <div className='deck-options' style={styles.DeckOptions}>
    Deck Options 
   
    <Buttons />
 
  </div>
);

const styles = {
  DeckOptions:{
    height: '10vh',
    width: '22vw',
    border:'1px solid black',
    
    
  },
 
}

export default DeckOptions;