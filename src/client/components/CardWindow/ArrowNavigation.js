import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import {nextPage, prevPage} from '../../redux/actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


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
          <div style={styles.ArrowContainer}>
            <div>
              <FaArrowLeft style={styles.Arrow} onClick={ () => this.getPrev(curr_page_num)} />
            </div>
            <div>
              
            </div>
          </div> 
        )

      case 'full':
        return(
          <div style={styles.ArrowContainer}>
            <div>
            <FaArrowLeft style={styles.Arrow} onClick={ () => this.getPrev(curr_page_num)} />
            </div>
            <div>
              <FaArrowRight style={styles.Arrow} onClick={ () => this.getNext(curr_page_num)} />
            </div>
          </div>
        )

      case 'right':
        return(
          <div style={styles.ArrowContainer}>
            <div>
            
            </div>
            <div>
              <FaArrowRight style={styles.Arrow} onClick={ () => this.getNext(curr_page_num)} />
            </div>
          </div>
        )
      default:
    }
  }
}

function mapStateToProps(state){
  var page_num = state.PageCount
  return({
    page_num: page_num
  })
}


function matchDispatchToProps(dispatch){
  return bindActionCreators({
    nextPage:nextPage,
    prevPage:prevPage
  }, dispatch)
}


export default connect(mapStateToProps,matchDispatchToProps)(ArrowNavigation)


const styles = {
  ArrowContainer:{
    width:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    position:'absolute',
    top:'calc(50% + 2vh)'
  },
  Arrow:{
    height:'30px',
    width:'100px'
  }
}
