import React from 'react';
import { FaSearch } from 'react-icons/fa';
 

const SearchBar = () => (
  <div className='search-bar' style={styles.SearchBar}>
    <span className='search-icon' style={styles.SearchIcon}>
      <FaSearch/>
    </span>
  </div>
)

const styles = {
  SearchBar:{
    height: '5vh',
    width: '22vw',
    border: '1px solid gray',
    borderRadius: '20px',
    display:'flex',
    alignItems:'center',
    position: 'relative'
  },
  SearchIcon:{
    position:'absolute',
    right: 20
  }
}

export default SearchBar;