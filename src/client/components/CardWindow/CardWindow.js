import React from 'react';
import CardTabs from './CardTabs';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {showCardData} from '../../redux/actions/index';

class CardWindow extends React.Component{


  render(){

    var card_data = this.props.cards
    console.log(card_data)
    return(
      <div style={styles.CardWindow}>
       <CardTabs/>
      </div>
    )
  }
}

function mapStateToProps(state){
  var cards = state.CardData
  return({
    cards:cards
  })
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    showCardData:showCardData
  }, dispatch)
}


export default connect(mapStateToProps,matchDispatchToProps)(CardWindow);

const styles = {
  CardWindow:{
    height: '85vh',
    width: '75vw',
    border: '1px solid black'
  }
}