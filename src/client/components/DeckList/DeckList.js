import React from 'react';
import {connect} from 'react-redux';
import CardTile from './CardTile';
import '../../../stylesheets/DeckList.css';

<<<<<<< HEAD
const DeckList = () => (
  <div className='deck-list' style={styles.DeckList}>
    Decklist
  </div>
)

const styles = {
  DeckList:{
    height: '79vh',
    width: '22vw',
    marginTop: '1vh',
    border: '1px solid black',
    fontWeight: 'bold',
    textAlign : 'center',
    fontSize: '12px'

    
    
=======
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
>>>>>>> 4c0fe43e751a004868e26df5ad30f5b5322a266f
  }
}

function mapStateToProps(state){
  return({
    deck:state.deck
  })
}

export default connect(mapStateToProps,null)(DeckList);
