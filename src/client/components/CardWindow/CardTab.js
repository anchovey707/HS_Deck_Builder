import React from 'react';
import {clickTab, loadCardDataByClass} from '../../redux/actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class CardTab extends React.Component{

  constructor(props){
    super()
  }

  // CALL TWO REDUX ACTIONS 
  handleClick = (name) => {
    this.props.clickTab(name)
    this.props.loadCardDataByClass(name)
  }

  render(){

    // RENDER THIS IF NAME IS NEEDED 
    if(this.props.showName === true){
      return(
        <div className='card-tab' style={styles.CardTab} onClick={ () => this.handleClick(this.props.name)}>
          {this.props.name}
          <img src={require(`../../../images/${this.props.name}_icon.png`)} style={styles.SingleCardTabImg} alt="icon" />
        </div>
      )
    }

    // OTHERWISE RENDER THIS
    else{
      return(
        <div className='card-tab' style={styles.CardTab} onClick={ () => this.handleClick(this.props.name)}>
          <img src={require(`../../../images/${this.props.name}_icon.png`)} style={styles.CardTabImg} alt="icon" />
        </div>
      )
    }
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    clickTab: clickTab,
    loadCardDataByClass: loadCardDataByClass
  }, dispatch)
}

export default connect(null,matchDispatchToProps)(CardTab)


const styles = {
  CardTab:{
    flex:1,
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border:'1px solid black'
  },
  CardTabImg:{
    height: '50px',
    width: '50px'
  },
  SingleCardTabImg:{
    height: '50px',
    width: '50px',
    marginLeft:'2vw'
  }
}