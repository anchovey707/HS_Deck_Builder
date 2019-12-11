import React from 'react';
import CardTabs from './CardTabs';
import CardImages from './CardImages';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {showCardData, addCardPages} from '../../redux/actions/index';
import ArrowNavigation from './ArrowNavigation';

class CardWindow extends React.Component{


  getPageData(){

    // GET CARDS, IF ANY, IN STORE
    var card_data = this.props.cards
    var filtered_data = []

    card_data.map ( (card) => {
      if(card.health === 30 && card.manaCost === 0)  {
        // REMOVE IF CHARACTER CARDS
      }
      else{
        filtered_data.push(card)
      }
    })

    // DS TO HOLD ALL PAGES
    var subarrays = []

    if(filtered_data.length > 0){

      // 8 CARDS TO A PAGE
      for(var i = 0 ; i < filtered_data.length; i += 8){

        // IF LESS THAN 6 CARDS LEFT, PUSH WHATS LEFT
        if(filtered_data.length - i < 8){
          let sub_arr = filtered_data.slice(i,card_data.length)
          subarrays.push(sub_arr)
          break
        }
        // ELSE PUSH 8 CARDS AND ITERATE 
        else{
          let sub_arr = filtered_data.slice(i,i+8)
          subarrays.push(sub_arr)
        }
      }
    }
    console.log(subarrays)
    this.props.addCardPages(subarrays)
  }

  render(){

    // ONLY CREATE PAGES IF CARD DATA EXISTS
    if(this.props.cards.length > 0){
      this.getPageData()

      // FIRST PAGE 
      if(this.props.num_pages === 1){
        return(
            <div style={styles.CardWindow}>
              <CardTabs/>
              <CardImages/>
              <ArrowNavigation type="right"/>
            </div>
        )
      }

      // LAST PAGE
      if(this.props.num_pages === 5){
        return(
          <div style={styles.CardWindow}>
            <CardTabs/>
            <CardImages/>
            <ArrowNavigation type="left" />
          </div>
        )
      } 

      // ELSE
      else{
        return(
          <div style={styles.CardWindow}>
            <CardTabs/>
            <CardImages/>
            <ArrowNavigation type="full"/>
          </div>
        )
      }
    }

    // IF NO CARD DATA 
    else{
      return(
        <div style={styles.CardWindow}>
          <CardTabs/>
          <CardImages/>
        </div>
      )
    }
  }
}


function mapStateToProps(state){
  var cards = state.CardData
  var num_pages = state.PageCount
  return({
    cards:cards,
    num_pages: num_pages
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
    border: '1px solid black',
    position:'relative',
  }
}