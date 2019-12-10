import React from 'react';
import CardTab from './CardTab';
import {connect} from 'react-redux';


class CardTabs extends React.Component{

  constructor(props){
    super()
  }

  renderTabs(){
    
    var tabs_arr = this.props.tabs
    var num_tabs = tabs_arr.length

   if(num_tabs === 1){
    return(
      tabs_arr.map( (tab) => (
        <CardTab name={tab} key={tab} showName={true} />
      ))
    )
   }
   else{
    return(
      tabs_arr.map( (tab) => (
        <CardTab name={tab} key={tab} />
      ))
    )
   }
  }

  render(){
   return(
     <div style={styles.CardTabs}>
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

export default connect(mapStateToProps,null)(CardTabs);

const styles = {
  CardTabs:{
    height: '7vh',
    width: '75vw',
    border: '1px solid red',
    display: 'flex',
    flexDirection: 'row'
  }
}
