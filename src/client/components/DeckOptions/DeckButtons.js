import React from 'react';
import '../../../stylesheets/DeckOptions/DeckButtons.css'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToDeck} from '../../redux/actions/index';

var input_data
class DeckButtons extends React.Component {


deleteFromDeck(){
  let url = 'http://34.227.68.162:8000/deleteDeck?deckid=' + input_data;
  fetch(url)
  .then( res => res.json())
  .then(data => console.log(data))
}

loadInDeck() {
  let url = 'http://34.227.68.162:8000/getDeck?deckid=' + input_data;
  fetch(url)
  .then( res => res.json())
  .then(this.clearDeck())
  .then(data => this.putDeckIntoStore(data))
}

putDeckIntoStore(loaded_data){
  var arr = loaded_data[0].carddata.split('/')
  arr.map( card => this.props.addToDeck(card))
}

saveToDeck(deck) {

  let deckString=JSON.stringify(deck);//.toString();
  var url = 'http://34.227.68.162:8000/saveDeck?userid=1&deckName=myDeck&carddata='+deckString;
  fetch(url)
  .then( res => res.json())
  .then(data => console.log(data))
}

clearDeck(){
  this.putDeckIntoStore('');
}

// ASYNC FETCH AND CALL ACTION
handleClick = (name) => {

  var lowercase_name = name.toLowerCase()
  var url = `https://us.api.blizzard.com/hearthstone/cards?locale=en_US&class=${lowercase_name}&pageSize=100&access_token=USTdYzhi6GloLuBWELb5Z0k1dj6CFWMWyy`
  fetch(url)
  .then( res => res.json())
  .then( data => this.props.addCardData(data))
  .then(this.props.addClassFilter('class', lowercase_name))
  .then(this.props.clickTab(name))
}

storeDeckId(val){
  input_data = val
}



  render () {
    
    var deck = this.props.deck;

    return (

      <div className='deck-options-container'>
        <div className='deck-button-container'>
          <button onClick={ () => this.clearDeck()} className='button'>Clear</button>
          <button onClick={ () => this.loadInDeck()} className='button'>Load</button>
          <button onClick={ () => this.saveToDeck(deck)} className='button'>Save</button>
          <button onClick={ () => this.deleteFromDeck()} className='button'>Delete</button>
        </div>
        <div className="deck-input-text">
          <input 
            type = "text" 
            id ="decktext" 
            placeholder = "enter deck ID" 
            onChange = { (e) => {
              this.storeDeckId(e.target.value)
            }}  
          /> 
        </div>
    </div>
      
    );
  }
}

function mapStateToProps(state){
  return({
    deck: state.deck,
    loadedDeck: state.loadedDeck
  })
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    addToDeck: addToDeck,
  }, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(DeckButtons);