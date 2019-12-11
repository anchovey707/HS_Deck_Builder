import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
 

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

export default ArrowNavigation


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
