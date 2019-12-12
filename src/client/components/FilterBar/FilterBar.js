import React from 'react'

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
    textAlign: 'center'
  }
}

export default FilterBar