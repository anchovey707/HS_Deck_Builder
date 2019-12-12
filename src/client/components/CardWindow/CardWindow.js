import React from 'react';
import CharacterTabs from './CharacterTabs';
import CardImages from './CardImages';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {showCardData, addCardPages} from '../../redux/actions/index';
import ArrowNavigation from './ArrowNavigation';
import CharacterBackButton from './CharacterBackButton';

class CardWindow extends React.Component{

  getFilteredArr(){

    // GET CARDS, IF ANY, IN STORE
    var card_data = this.props.card_data
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

    // IF CARDS IN STORE
    if(this.props.card_data.length > 0){
      this.getPageData()

      // GET NAV BAR TYPE
      var nav_type = ''
      if(this.props.page_num === 0){
        nav_type = 'right'
      }
      else{
        if(this.props.page_num === this.getMaxNumPages()){
          nav_type = 'left'
        }
        else{
          nav_type = 'full'
        }
      }

      return(
        <div>
          <CharacterBackButton />
          <CharacterTabs/>
          <CardImages/>
          <ArrowNavigation type={nav_type}/>
        </div>
      )
    }
    
    else{
      return(
        <div>
          <CharacterTabs/>
          <CardImages/>
        </div>
      )
    }
  }
}



function mapStateToProps(state){
  return({
    card_data:state.card_data,
    page_num:state.page_num
  })
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    showCardData:showCardData,
    addCardPages: addCardPages
  }, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(CardWindow);
