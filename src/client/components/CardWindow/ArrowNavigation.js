import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import {nextPage, prevPage} from '../../redux/actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import '../../../stylesheets/CardWindow/ArrowNavigation.css';


class ArrowNavigation extends React.Component{

  constructor(props){
    super()
  }

  getPrev(curr_page_num){
    this.props.prevPage(curr_page_num)
  }

  getNext(curr_page_num){
    this.props.nextPage(curr_page_num)
  }

  render(){

    var curr_page_num = this.props.page_num

    switch(this.props.type){

      case 'left':
        return(
          <div className='arrow-container'>
            <div><FaArrowLeft className='arrow' onClick={ () => this.getPrev(curr_page_num)} /> </div>
            <div></div>
          </div> 
        )

      case 'full':
        return(
          <div className='arrow-container'>
            <div> <FaArrowLeft className='arrow' onClick={ () => this.getPrev(curr_page_num)} /> </div>
            <div> <FaArrowRight className='arrow' onClick={ () => this.getNext(curr_page_num)} /> </div>
          </div>
        )

      case 'right':
        return(
          <div className='arrow-container'>
            <div></div>
            <div> <FaArrowRight className='arrow' onClick={ () => this.getNext(curr_page_num)} /> </div>
          </div>
        )
      default:
    }
  }
}

function mapStateToProps(state){
  return({
    page_num: state.page_num
  })
}


function matchDispatchToProps(dispatch){
  return bindActionCreators({
    nextPage:nextPage,
    prevPage:prevPage
  }, dispatch)
}


export default connect(mapStateToProps,matchDispatchToProps)(ArrowNavigation)
