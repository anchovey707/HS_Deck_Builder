import React from 'react';
import '../../../stylesheets/FilterBar/FilterOptions.css';
import {addMinFilter, addMaxFilter} from '../../redux/actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class HealthFilter extends React.Component{

  constructor(props){
    super()
  }

  addMinHealth(val){
    this.props.addMinFilter('health',val)
  }

  addMaxHealth(val){
    this.props.addMaxFilter('health',val)
  }


  render(){
    return(
      <div className='filter-container'> 
        <div className='filter-heading'>
          Health 
        </div>
        <div className='filter-option'>
          <input 
            type="number" 
            name="health-1" 
            min="1" 
            max="60"
            onKeyPress={ (e) => {
              if (e.key === 'Enter')
                this.addMinHealth(e.target.value)
              }
            }
          />
          ------
          <input 
            type="number" 
            name="health-2" 
            min="1" 
            max="60"
            onKeyPress={ (e) => {
              if (e.key === 'Enter')
                this.addMaxHealth(e.target.value)
              }
            }
          />
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



export default connect(mapStateToProps,matchDispatchToProps)(HealthFilter);