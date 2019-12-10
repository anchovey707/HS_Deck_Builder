import React from 'react';

const DeckOptions = () => (
  <div className='deck-options' style={styles.DeckOptions}>
    Deck Options 
   <br></br>
  <button >Load</button>
  <button>Save</button>
  <button>Filter</button>
  <button>Delete</button>
 
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