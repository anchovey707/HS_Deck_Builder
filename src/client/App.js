import React from 'react';
import CardWindow from'./CardWindow';
import SearchBar from './SearchBar';
import DeckList from './DeckList';
import FilterBar from './FilterBar';
import DeckOptions from './DeckOptions';

function App() {
  return (
    <div className="App" style={styles.App}>
      <CardWindow/>
      <div>
        <SearchBar/>
        <DeckList/>
      </div>
      <FilterBar/>
      <DeckOptions/>
    </div>
  );
}

const styles = {
  App:{
    height: '100vh',
    width: '100vw',
    display: 'grid',
    gridTemplateColumns: '75vw 25vw',
    gridTemplateRows: '85vh 20vh',
    gridGap: '1em',
    border: '1px solid black'
  }
}

export default App;
