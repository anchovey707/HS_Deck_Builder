import React from 'react'

class CardTile extends React.Component{

  constructor(props){
    super()
  }

  render(){
    return(
      <div style={styles.TileStyle}> {this.props.name}Card </div>
    )
  }
}

export default CardTile

const styles = {
  TileStyle:{
    height: 'calc(100%/30)',
    width: '100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  }
}