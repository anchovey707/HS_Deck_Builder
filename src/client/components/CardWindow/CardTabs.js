import React from 'react';
import CardTab from './CardTab';

const CardTabs = () => (
  <div className='card-tabs' style={styles.CardTabs} >
   
    <CardTab name='warrior'/>
    <CardTab name='hunter'/>
    <CardTab name='mage'/>

    <CardTab name='warlock'/>
    <CardTab name='shaman'/>
    <CardTab name='rogue'/>

    <CardTab name='paladin'/>
    <CardTab name='druid'/>
    <CardTab name='priest'/>

  </div>
)

const styles = {
  CardTabs:{
    height: '7vh',
    width: '75vw',
    border: '1px solid red',
    display: 'flex',
    flexDirection: 'row'
  }
}

export default CardTabs;