import React from 'react';
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
        <div style={styles.DeckList}> {list} </div>
      )
    }
    else{
      return(
        <div style={styles.DeckList}>

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

export default connect(mapStateToProps,null)(DeckList);


const styles = {
  DeckList:{
    height: '79vh',
    width: '22vw',
    marginTop: '1vh',
    border: '1px solid black'
  }
}