import React from 'react'
<<<<<<< HEAD

const FilterBar = () => (
  <div className='filter-bar' style={styles.FilterBar}>
    Filter Bar
  </div>
)


const styles = {
  FilterBar:{
    height: '10vh',
    border:'1px solid black',
    fontWeight: 'bold',
    textAlign: 'center',
    
  }
}

=======
import '../../../stylesheets/FilterBar/FilterBar.css';
import SearchFilter from './SearchFilter';
import AttackFilter from './AttackFilter';
import HealthFilter from './HealthFilter';
import ManaFilter from './ManaFilter';

class FilterBar extends React.Component{
 
render(){
  return(
    <div className='filter-bar'>
      <ManaFilter/>
      <AttackFilter/>
      <HealthFilter/>
      <SearchFilter/>
    </div>
  )
}
}


>>>>>>> c35e759ff4490507f3effee08f67554b7fcce9fa
export default FilterBar