import React from 'react';
import '../../../stylesheets/FilterBar/FilterOptions.css';

class AttackFilter extends React.Component{

  constructor(props){
    super()
  }
  
  addMinAttack(val){
    alert(val)
  }

  addMaxAttack(val){
    alert(val)
  }

  render(){
    return(
      <div className='filter-container'>

        <div className='filter-heading'>
          Attack 
        </div>

        <div className='filter-option'>
          
          <input 
            type="number" 
            name="attack-1" 
            min="1" 
            max="60" 
            onKeyPress={ (e) => {
              if (e.key === 'Enter')
                this.addMinAttack(e.target.value)
              }
            }
          />
          ------
          <input 
            type="number" 
            name="attack-2" 
            min="1" 
            max="60"
            onKeyPress={ (e) => {
              if (e.key === 'Enter')
                this.addMaxAttack(e.target.value)
              }
            }/>

        </div>
      </div>
    )
  }

}


export default AttackFilter;