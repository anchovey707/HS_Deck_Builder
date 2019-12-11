import React from 'react';
import CardTabs from './CardTabs';
import CardImages from './CardImages';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {showCardData, addCardPages} from '../../redux/actions/index';

class CardWindow extends React.Component{


  getPageData(){

    // GET CARDS, IF ANY, IN STORE
    var card_data = this.props.cards

    // DS TO HOLD ALL PAGES
    var subarrays = []

    if(card_data.length > 0){

      // 6 CARDS TO A PAGE
      for(var i = 0 ; i < card_data.length; i += 6){

        // IF LESS THAN 6 CARDS LEFT, PUSH WHATS LEFT
        if(card_data.length - i < 6){
          let sub_arr = card_data.slice(i,card_data.length)
          subarrays.push(sub_arr)
          break
        }
        // ELSE PUSH 6 CARDS AND ITERATE 
        else{
          let sub_arr = card_data.slice(i,i+6)
          subarrays.push(sub_arr)
        }
      }
    }
    this.props.addCardPages(subarrays)
  }

  
  render(){

    // ONLY CREATE PAGES IF CARD DATA EXISTS
    if(this.props.cards.length > 0){
      this.getPageData()
    }

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
    showCardData:showCardData,
    addCardPages: addCardPages
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