import React from 'react';
import {clickTab} from '../../redux/actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class CardTab extends React.Component{

  constructor(props){
    super()
  }

  handleClick = (name) => {
    this.props.clickTab(name)
  }

  render(){
    return(
      <div className='card-tab' style={styles.CardTab} onClick={ () => this.handleClick(this.props.name)}>
        <img src={require(`../../../images/${this.props.name}_icon.png`)} style={styles.CardTabImg} alt="icon" />
      </div>
    )
  }
}

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
  }
}

function mapStateToProps(state){
  var tabs = state.CardTabs
  return {
    tabs: tabs
  }
}


function matchDispatchToProps(dispatch){
  return bindActionCreators({clickTab: clickTab}, dispatch)
}


export default connect(mapStateToProps,matchDispatchToProps)(CardTab)