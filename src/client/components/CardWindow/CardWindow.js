import React from 'react';
import CardTabs from './CardTabs';
import CardImages from './CardImages';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {showCardData} from '../../redux/actions/index';

class CardWindow extends React.Component{

  render(){
    return(
      <div style={styles.CardWindow}>
        <CardTabs/>
        <CardImages/>
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
  },
  CardImgContainer:{
    height:'77vh',
    width: '100%',
    display:'grid',
    gridTemplateColumn: '33% 33% 33%',
    gridTemplateRows: '50% 50%',
    border:'2px solid black'
  },
  CardImg:{
    height:'320px',
    width: '230px'
  }
}