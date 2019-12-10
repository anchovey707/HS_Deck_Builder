import React from 'react';
import CardTabs from './CardTabs';


const CardWindow = () => (
  <div className='card-window' style={styles.CardWindow}>
    <CardTabs/>
  </div>
)

export default CardWindow

const styles = {
  CardWindow:{
    height: '85vh',
    width: '75vw',
    border: '1px solid black'
  }
}