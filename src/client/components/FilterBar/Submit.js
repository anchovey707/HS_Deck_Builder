import React from 'react';
import '../../../stylesheets/FilterBar/FilterOptions.css';


class Submit extends React.Component{

  render(){
    return(
      <div className='filter-container'> 
        <div className='filter-heading'>
          Submit
        </div>
        <div className='filter-option'>
          <button type="button"> Submit </button>
        </div>
      </div>
    )
  }
}

export default Submit;