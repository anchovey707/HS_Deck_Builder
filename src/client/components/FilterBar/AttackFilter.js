import React from 'react';
import '../../../stylesheets/FilterBar/FilterOptions.css';
import {addMinFilter, addMaxFilter} from '../../redux/actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class AttackFilter extends React.Component{

  constructor(props){
    super()
  }
  
  addMinAttack(val){
    this.props.addMinFilter('attack', val)
  }

  addMaxAttack(val){
    this.props.addMaxFilter('attack', val)
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
            min="0" 
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
            min="0" 
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

function mapStateToProps(state){

}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    addMinFilter:addMinFilter,
    addMaxFilter:addMaxFilter
  }, dispatch)
}


export default connect(mapStateToProps,matchDispatchToProps)(AttackFilter);