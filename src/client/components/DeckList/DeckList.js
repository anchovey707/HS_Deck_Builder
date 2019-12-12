import React from 'react';
import {connect} from 'react-redux';
import CardTile from './CardTile';
import '../../../stylesheets/DeckList/DeckList.css';

class DeckList extends React.Component{

  // BOOL TO CHECK IF DECKLIST SHOULD BE CREATED
  cardsInDeckList(){
    var deck = this.props.deck
    if(deck.length > 0){
      return true
    }
    else{
      return false
    }
  }

  // CREATE DECK TILES 
  renderList(){
    var deck = this.props.deck
    var list = []
    deck.map( (card) => {
      list.push(<CardTile name={card} />)
    })
    return list
  }

  render(){


    if(this.cardsInDeckList()){
      var list = this.renderList()
      return(
        <div className='decklist'> {list} </div>
      )
    }
    
    else{
      return(
        <div className='decklist'>

        </div>
      )
    }
  }
}

function mapStateToProps(state){
  return({
    deck:state.deck
  })
}

export default connect(mapStateToProps,null)(DeckList);
