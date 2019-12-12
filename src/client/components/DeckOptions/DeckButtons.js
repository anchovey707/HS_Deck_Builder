import React from 'react';
import '../../../stylesheets/DeckOptions/DeckButtons.css'
<<<<<<< HEAD
import  $ from 'jquery';
=======
var $ = require('jquery');
>>>>>>> b5d6889a11d9daf727f08e246ef0da199e51f006

class DeckButtons extends React.Component {




saveToDeck () {
  $.ajax ({
    url:  '/savedeck',
    data : {deckid:''},
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
    return (

      <div className='button-container'>
        <button  onClick={this.loadInDeck} className='button'>Load</button>
        <button onClick={this.saveToDeck} className='button'>Save</button>
        <button onClick={this.deleteFromDeck} className='button'>Delete</button>
      </div>
    );
  }
}


export default DeckButtons;