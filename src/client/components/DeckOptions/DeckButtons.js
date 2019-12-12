import React from 'react';
import '../../../stylesheets/DeckOptions/DeckButtons.css'
var $ = require('jquery');

class DeckButtons extends React.Component {




saveToDeck () {
  $.ajax ({
    url: '/savedeck',
    data : {deckid: '',username: '', password: ''},
    type : 'POST',

    success: function(response) {
        console.log(response)
    },
    error: function(response) {
        console.log(response)
    }
});

}

loadInDeck() {
  $.ajax ({
    url: 'getDeck',
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

// deleteFromDeck () {
//   $.ajax ({
//     url : 'deletedeck',
//     data : 
//   })
// }
// onHandle() {
//   fetch(`/getdeck`)
//       .then(res => res.json())
//        console.log(res.json());
// }


  render () {
    return (

      <div className='button-container'>
        <button  onClick={this.loadInDeck} className='button'>Load</button>
        <button onClick={this.saveToDeck} className='button'>Save</button>
        <button className='button'>Delete</button>
      </div>
    );
  }
}


export default DeckButtons;