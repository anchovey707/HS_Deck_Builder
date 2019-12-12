import React from 'react';
import '../../../stylesheets/DeckOptions/DeckButtons.css'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


var $ = require('jquery');


class DeckButtons extends React.Component {
  /*
saveToDeck (deck) {
  
  $.ajax ({
    url:  '/savedeck',
    data : {userid:'James',deckName:'myDeck',carddata:deck},
    type : 'POST',

    success: function(response) {
        console.log(response)
    },
    error: function(response) {
        console.log(response)
    }
});
    console.log(deck);

}*/

loadInDeck() {
  $.ajax ({
    url: '/getDeck',
    data : {deckid : ''},
    type: 'GET',

    success : function(response) {
      console.log(response)
    },
    error : function(response) {
      console.log(response)
    }
  })
}

deleteFromDeck () {
  $.ajax ({
    url : 'deletedeck',
    data : {deckid: ''},
    type : "DELETE",

    success : function(response) {
        console.log(response)
    },
    error : function(response) {
      console.log(response)
    }

  })
}

saveToDeck(deck) {
  let deckJSON=JSON.stringify(deck);
  var url = 'http://34.227.68.162:8000/saveDeck?userid=1&deckName=myDeck&carddata='+deckJSON;
  fetch(url)
  .then( res => res.json())
  .then(data => console.log(data))
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


  render () {

    // THIS IS THE DATA YOU WANT FOR DB
    // |
    // |
    // |
    // v
    var deck = this.props.deck;
    // ^
    // |
    // |
    // |
    // YOU WENT TOO FAR 

    return (

      <div className='button-container'>
        <button  onClick={this.loadInDeck} className='button'>Load</button>
        <button onClick={ () => this.saveToDeck(deck)} className='button'>Save</button>
        <button onClick={this.deleteFromDeck} className='button'>Delete</button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return({
    deck: state.deck
  })
}


export default connect(mapStateToProps,null)(DeckButtons);