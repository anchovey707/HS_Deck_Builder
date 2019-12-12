import React from 'react';
import CardWindow from'./components/CardWindow/CardWindow';
import DeckList from './components/DeckList/DeckList';
import FilterBar from './components/FilterBar/FilterBar';
import DeckOptions from './components/DeckOptions/DeckOptions';
import '../stylesheets/App.css';

function App() {
  return (
    <div className="App">
      <CardWindow/>
      <DeckList/>
      <FilterBar/>
      <DeckOptions/>
    </div>
  );
  
  let styles={
    "background-image":"../images/background.jpg"
  }

}



export default App;