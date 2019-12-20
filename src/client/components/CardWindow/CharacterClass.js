import React from 'react';
import {clickTab, addCardData, addClassFilter} from '../../redux/actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import '../../../stylesheets/CardWindow/CharacterClass.css';


class CharacterClass extends React.Component{

  constructor(props){
    super()
  }

  // ASYNC FETCH AND CALL ACTION
  handleClick = (name) => {

    var lowercase_name = name.toLowerCase()
    var url = `https://us.api.blizzard.com/hearthstone/cards?locale=en_US&class=${lowercase_name}&access_token=UShC8iPTlDtUIQhATibewxZz9rYOZkyEv4`
    fetch(url)
    .then( res => res.json())
    .then( data => this.props.addCardData(data))
    .then(this.props.addClassFilter('class', lowercase_name))
    .then(this.props.clickTab(name))
  }

  render(){

    // RENDER THIS IF NAME IS NEEDED 
    if(this.props.showName === true){
      return(
        <div className='card-tab' onClick={ () => this.handleClick(this.props.name)}>
          {this.props.name.toUpperCase()}
          <img title={this.props.name} src={require(`../../../images/${this.props.name}_icon.png`)} className='card-tab-img' alt="icon" />
        </div>
      )
    }

    // OTHERWISE RENDER THIS
    else{
      return(
        <div className='card-tab' onClick={ () => this.handleClick(this.props.name)}>
          <img title={this.props.name} src={require(`../../../images/${this.props.name}_icon.png`)} className='card-tab-img' alt="icon" />
        </div>
      )
    }
  }
}


function matchDispatchToProps(dispatch){
  return bindActionCreators({
    clickTab: clickTab,
    addCardData: addCardData,
    addClassFilter: addClassFilter
  }, dispatch)
}

export default connect(null,matchDispatchToProps)(CharacterClass)
