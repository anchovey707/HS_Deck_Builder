import React from 'react';
import '../../../stylesheets/FilterBar/FilterOptions.css';


class ManaFilter extends React.Component{

  constructor(props){
    super()
  }

  render(){
    return(
      <div className='filter-container'> 
        <div className='filter-heading'>
          Mana
        </div>
        <div className='filter-option'>
          <input type="number" name="mana-1" min="1" max="20"/>
          ------
          <input type="number" name="mana-2" min="1" max="20"/>
        </div>
      </div>
    )
  }

}


export default ManaFilter;