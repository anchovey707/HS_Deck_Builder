import React from 'react';
import CardWindow from'./components/CardWindow/CardWindow';
import SearchBar from './components/SearchBar/SearchBar';
import DeckList from './components/DeckList/DeckList';
import FilterBar from './components/FilterBar/FilterBar';
import DeckOptions from './components/DeckOptions/DeckOptions';

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

export default App;

const styles = {
  App:{
    height: '100vh',
    width: '100vw',
    display: 'grid',
    gridTemplateColumns: '75vw 25vw',
    gridTemplateRows: '85vh 20vh',
    gridGap: '1em',
  }
}