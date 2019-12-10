import React from 'react';
import CardTab from './CardTab';
import {connect} from 'react-redux';


class CardTabs extends React.Component{

  constructor(props){
    super()
  }

  renderTabs(){
    var tabs_arr = this.props.tabs
    return(
      tabs_arr.map( (tab) => (
        <CardTab name={tab} key={tab} />
      ))
    )
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


const styles = {
  CardTabs:{
    height: '7vh',
    width: '75vw',
    border: '1px solid red',
    display: 'flex',
    flexDirection: 'row'
  }
}


export default connect(mapStateToProps,null)(CardTabs);