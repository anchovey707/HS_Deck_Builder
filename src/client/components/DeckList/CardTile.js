import React from 'react'
import {removeFromDeck} from '../../redux/actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class CardTile extends React.Component{

  constructor(props){
    super()
  }

  // CALL REDUX ACTION
  removeFromDeck(name){
    this.props.removeFromDeck(name)
  }

  render(){
    return(
      <div style={styles.TileStyle} onClick={ () => this.removeFromDeck(this.props.name)} > {this.props.name} </div>
    )
  }
}


function matchDispatchToProps(dispatch){
  return bindActionCreators({
    removeFromDeck: removeFromDeck
  }, dispatch)
}

export default connect(null,matchDispatchToProps)(CardTile)

const styles = {
  TileStyle:{
    height: 'calc(100%/30)',
    width: '100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  }
}