import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
 

class ArrowNavigation extends React.Component{


  render(){
    return(
      <div style={styles.ArrowContainer}>
        <FaArrowLeft style={styles.Arrow} />
        <FaArrowRight style={styles.Arrow} />
      </div>
    )
  }
}

export default ArrowNavigation


const styles = {
  ArrowContainer:{
    width:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    border:'1px solid black',
    position:'absolute',
    top:'calc(50% + 2vh)'
  },
  Arrow:{
    height:'30px',
    width:'100px'
  }
}
