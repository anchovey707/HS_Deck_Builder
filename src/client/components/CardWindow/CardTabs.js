import React from 'react';
import CardTab from './CardTab';
import {connect} from 'react-redux';


class CardTabs extends React.Component{

  constructor(props){
    super()
  }

  componentDidMount(){
    fetch('https://us.api.blizzard.com/hearthstone/cards?locale=en_US&set=rise-of-shadows&class=mage&access_token=USTdYzhi6GloLuBWELb5Z0k1dj6CFWMWyy')
    .then( res => res.json())
    .then( data => console.log(data))
  }


  renderTabs(){
    

    // GET TABS FROM GLOBAL STORE 
    var tabs_arr = this.props.tabs
    var num_tabs = tabs_arr.length


    // SHOW CLASS NAME IF RENDERED ALONE 
   if(num_tabs === 1){
    return(
      tabs_arr.map( (tab) => (
        <CardTab name={tab} key={tab} showName={true} />
      ))
    )
   }

   // ELSE RENDER WITHOUT NAME 
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
