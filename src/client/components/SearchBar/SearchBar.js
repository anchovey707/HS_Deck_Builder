import React from 'react';
import { FaSearch } from 'react-icons/fa';
 

const SearchBar = () => (
  <div className='search-bar' style={styles.SearchBar}>
    <form>
      <input type='text' style={styles.FormInput} />
    </form>
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
  FormInput:{
    height: '4vh',
    width: '18vw',
    marginLeft:'1vw',
    borderRadius: '20px',
    outline: 'none',
    border: 'none',
    fontSize: '12px'

  },
  SearchIcon:{
    position:'absolute',
    right: 15
  }
}

export default SearchBar;