import React from 'react';

class CardTab extends React.Component{

  constructor(props){
    super()
  }

  handleClick = () => {
    alert(this.props.name)
  }

  render(){
    return(
      <div className='card-tab' style={styles.CardTab} onClick={this.handleClick}>
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

export default CardTab