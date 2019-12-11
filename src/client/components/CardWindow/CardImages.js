import React from 'react';
import {bindActionCreators} from 'redux';
import {addCardPages} from '../../redux/actions/index';
import {connect} from 'react-redux';


class CardImages extends React.Component{

  constructor(props){
    super()
  }

  getAllPageData(){

    // GET CARDS, IF ANY, IN STORE
    var card_data = this.props.cards

    // DS TO HOLD ALL PAGES
    var subarrays = []

    if(card_data.length > 0){

      // 6 CARDS TO A PAGE
      for(var i = 0 ; i < card_data.length; i += 6){

        // IF LESS THAN 6 CARDS LEFT, PUSH WHATS LEFT
        if(card_data.length - i < 6){
          var sub_arr = card_data.slice(i,card_data.length)
          subarrays.push(sub_arr)
          break
        }
        // ELSE PUSH 6 CARDS AND ITERATE 
        else{
          var sub_arr = card_data.slice(i,i+6)
          subarrays.push(sub_arr)
        }
      }
    }
    this.props.addCardPages(subarrays)
  }

  render(){
    {this.getAllPageData()}
    return(
      <div>
      
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
    addCardPages: addCardPages
  }, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(CardImages);

const styles = {

}