import React from 'react';
import {clickTab, addCardData} from '../../redux/actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class CardTab extends React.Component{

  constructor(props){
    super()
  }

  // ASYNC FETCH AND SHOW
  handleClick = (name) => {

    var lowercase_name = name.toLowerCase()
    var url = `https://us.api.blizzard.com/hearthstone/cards?locale=en_US&class=${lowercase_name}&access_token=USTdYzhi6GloLuBWELb5Z0k1dj6CFWMWyy`
    fetch(url)
    .then( res => res.json())
    .then( data => this.props.addCardData(data))
    .then(this.props.clickTab(name))
  }

  render(){

    // RENDER THIS IF NAME IS NEEDED 
    if(this.props.showName === true){
      return(
        <div style={styles.CardTab} onClick={ () => this.handleClick(this.props.name)}>
          {this.props.name.toUpperCase()}
          <img src={require(`../../../images/${this.props.name}_icon.png`)} style={styles.SingleCardTabImg} alt="icon" />
        </div>
      )
    }

    // OTHERWISE RENDER THIS
    else{
      return(
        <div style={styles.CardTab} onClick={ () => this.handleClick(this.props.name)}>
          <img src={require(`../../../images/${this.props.name}_icon.png`)} style={styles.CardTabImg} alt="icon" />
        </div>
      )
    }
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    clickTab: clickTab,
    addCardData: addCardData
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