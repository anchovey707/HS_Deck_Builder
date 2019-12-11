import React from 'react';
import {removeFromDeck} from '../../redux/actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import CardTile from './CardTile';

class DeckList extends React.Component{

  cardsInDeckList(){
    var deck = this.props.deck
    if(deck.length > 0){
      return true
    }
    else{
      return false
    }
  }

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
        <div> {list} </div>
      )
    }
    else{
      return(
        <div className='deck-list' style={styles.DeckList}>

        </div>
      )
    }
  }
}

function mapStateToProps(state){
  var deck = state.Deck
  return({
    deck:deck
  })
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    removeFromDeck: removeFromDeck
  }, dispatch)
}


export default connect(mapStateToProps,matchDispatchToProps)(DeckList);


const styles = {
  DeckList:{
    height: '79vh',
    width: '22vw',
    marginTop: '1vh',
    border: '1px solid black'
  }
}