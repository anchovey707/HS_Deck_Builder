import React from 'react'
import '../../../stylesheets/FilterBar/FilterBar.css';
import SearchFilter from './SearchFilter';
import AttackFilter from './AttackFilter';
import HealthFilter from './HealthFilter';
import ManaFilter from './ManaFilter';

class FilterBar extends React.Component{
 
render(){
  return(
    <div className='filter-bar dark-background'>
      <ManaFilter/>
      <AttackFilter/>
      <HealthFilter/>
      <SearchFilter/>
    </div>
  )
}
}


export default FilterBar