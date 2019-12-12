import React from 'react'
import {removeFromDeck} from '../../redux/actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import '../../../stylesheets/DeckList/CardTile.css';

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
      <div className='tile' onClick={ () => this.removeFromDeck(this.props.name)} > {this.props.name} </div>
    )
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    removeFromDeck: removeFromDeck
  }, dispatch)
}

export default connect(null,matchDispatchToProps)(CardTile)
