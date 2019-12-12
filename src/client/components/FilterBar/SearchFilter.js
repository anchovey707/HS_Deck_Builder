import React from 'react';
import '../../../stylesheets/FilterBar/FilterOptions.css';


class SearchFilter extends React.Component{

  constructor(props){
    super()
  }

  render(){
    return(
      <div className='filter-container'> 
        <div className='filter-heading'>
          Search
        </div>
        <div className='filter-option'>
          <input type="text" name="search"/>
        </div>
      </div>
    )
  }
}


export default SearchFilter;