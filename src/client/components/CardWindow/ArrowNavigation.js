import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import {nextPage, prevPage} from '../../redux/actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class ArrowNavigation extends React.Component{

  constructor(props){
    super()
  }

  render(){

    switch(this.props.type){

      case 'left':
          return(
            <div style={styles.ArrowContainer}>
              <div>
                <FaArrowLeft style={styles.Arrow} />
              </div>
              <div>
               
              </div>
            </div>
          )

      case 'full':
          return(
            <div style={styles.ArrowContainer}>
              <div>
                <FaArrowLeft style={styles.Arrow} />
              </div>
              <div>
                <FaArrowRight style={styles.Arrow} />
              </div>
            </div>
          )

      case 'right':
          return(
            <div style={styles.ArrowContainer}>
              <div>
             
              </div>
              <div>
                <FaArrowRight style={styles.Arrow} />
              </div>
            </div>
          )
      default:
    }
  }
}

function mapStateToProps(state){

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
