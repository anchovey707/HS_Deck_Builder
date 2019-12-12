import React from 'react';
import CharacterClass from './CharacterClass';
import {connect} from 'react-redux';
import '../../../stylesheets/CharacterTabs.css';


class CharacterTabs extends React.Component{

  constructor(props){
    super()
  }

  renderTabs(){
    

    // GET TABS FROM GLOBAL STORE 
    var tabs_arr = this.props.tabs
    var num_tabs = tabs_arr.length


    // SHOW CLASS NAME IF RENDERED ALONE 
   if(num_tabs === 1){
    return(
      tabs_arr.map( (tab) => (
        <CharacterClass name={tab} key={tab} showName={true} />
      ))
    )
   }

   // ELSE RENDER WITHOUT NAME 
   else{
    return(
      tabs_arr.map( (tab) => (
        <CharacterClass name={tab} key={tab} />
      ))
    )
   }
  }

  render(){
   return(
     <div className='card-tabs'>
       {this.renderTabs()}
     </div>
   )
  }
}

function mapStateToProps(state){
  var tabs = state.CardTabs
  return{
    tabs: tabs
  }
}

export default connect(mapStateToProps,null)(CharacterTabs);
