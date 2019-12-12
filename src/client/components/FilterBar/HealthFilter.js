import React from 'react';
import '../../../stylesheets/FilterBar/FilterOptions.css';


class HealthFilter extends React.Component{

  constructor(props){
    super()
  }

  render(){
    return(
      <div className='filter-container'> 
        <div className='filter-heading'>
          Health 
        </div>
        <div className='filter-option'>
          <input type="number" name="health-1" min="1" max="60"/>
          ------
          <input type="number" name="health-2" min="1" max="60"/>
        </div>
      </div>
    )
  }

}


export default HealthFilter;