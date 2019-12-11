import React from 'react';
import {bindActionCreators} from 'redux';
import {addCardPages} from '../../redux/actions/index';
import {connect} from 'react-redux';


class CardImages extends React.Component{

  constructor(props){
    super()
  }

  render(){

    // IF THERE ARE PAGES TO BE LOADED
    if(this.props.pages.length > 0){

    }

    else{
      return(
        <div>
          Images
        </div>
      )
    }
  }
}

function mapStateToProps(state){
  var cardData  = state.CardData
  var cardPages = state.CardPages
  return({
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