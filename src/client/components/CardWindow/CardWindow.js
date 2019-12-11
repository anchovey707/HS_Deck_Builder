import React from 'react';
import CharacterTabs from './CharacterTabs';
import CardImages from './CardImages';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {showCardData, addCardPages} from '../../redux/actions/index';
import ArrowNavigation from './ArrowNavigation';
import CardButton from './CardButton';

class CardWindow extends React.Component{

  getFilteredArr(){

    // GET CARDS, IF ANY, IN STORE
    var card_data = this.props.cards
    var filtered_data = []

    card_data.map ( (card) => {
      if(card.health === 30 && card.manaCost === 0)  {
        // REMOVE CHARACTER CARDS
      }
      else{
        filtered_data.push(card)
      }
    })
    return filtered_data
  }

  getMaxNumPages(){

     var arr = this.getFilteredArr()

     if (arr.length % 8 === 0){
      return Math.floor(arr.length / 8) - 1
     }
     else{
       return Math.floor(arr.length/8)
     }
  }

  getPageData(){

    var arr = this.getFilteredArr()

    // DS TO HOLD ALL PAGES
    var subarrays = []

    if(arr.length > 0){

      // 8 CARDS TO A PAGE
      for(var i = 0 ; i < arr.length; i += 8){

        // IF LESS THAN 6 CARDS LEFT, PUSH WHATS LEFT
        if(arr.length - i < 8){
          let sub_arr = arr.slice(i,arr.length)
          subarrays.push(sub_arr)
          break
        }
        // ELSE PUSH 8 CARDS AND ITERATE 
        else{
          let sub_arr = arr.slice(i,i+8)
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

      // FIRST PAGE 
      if(this.props.num_pages === 0){
        return(
            <div style={styles.CardWindow}>
              <CardButton />
              <CharacterTabs/>
              <CardImages/>
              <ArrowNavigation type="right"/>
            </div>
        )
      }

      // LAST PAGE
      if(this.props.num_pages === this.getMaxNumPages() ){
        return(
          <div style={styles.CardWindow}>
            <CardButton />
            <CharacterTabs/>
            <CardImages/>
            <ArrowNavigation type="left" />
          </div>
        )
      } 

      // ELSE
      else{
        return(
          <div style={styles.CardWindow}>
            <CardButton />
            <CharacterTabs/>
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
          <CharacterTabs/>
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