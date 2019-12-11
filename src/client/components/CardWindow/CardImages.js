import React from 'react';
import {bindActionCreators} from 'redux';
import {addCardPages} from '../../redux/actions/index';
import {connect} from 'react-redux';


class CardImages extends React.Component{

  constructor(props){
    super()
  }

  render(){
   
    return(
      <div>
      
      </div>
    )
  }
}

function mapStateToProps(state){
  var cardData  = state.CardData
  var cardPages = state.CardPages
  return({
    cards:cardData,
    pages:cardPages
  })
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
   
  }, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(CardImages);

const styles = {

}