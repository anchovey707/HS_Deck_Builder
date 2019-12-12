import React from 'react';
import '../../../stylesheets/DeckOptions/DeckButtons.css'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


var $ = require('jquery');


class DeckButtons extends React.Component {
  
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

}

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
// onHandle() {
//   fetch(`/getdeck`)
//       .then(res => res.json())
//        console.log(res.json());
// }


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