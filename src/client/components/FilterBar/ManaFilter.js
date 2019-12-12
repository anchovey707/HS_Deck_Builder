import React from 'react';
import '../../../stylesheets/FilterBar/FilterOptions.css';
import {addMinFilter, addMaxFilter} from '../../redux/actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ManaFilter extends React.Component{

  constructor(props){
    super()
  }

  addMinMana(val){
    this.props.addMinFilter('mana', val)
  }

  addMaxMana(val){
    this.props.addMaxFilter('mana', val)
  }


  render(){
    return(
      <div className='filter-container'> 
        <div className='filter-heading'>
          Mana
        </div>
        <div className='filter-option'>
          <input 
            type="number" 
            name="mana-1" 
            min="0" 
            max="20"
            onKeyPress={ (e) => {
              if (e.key === 'Enter')
                this.addMinMana(e.target.value)
              }
            }
          />
          ------
          <input 
            type="number" 
            name="mana-2" 
            min="0" 
            max="20"
            onKeyPress={ (e) => {
              if (e.key === 'Enter')
                this.addMaxMana(e.target.value)
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



export default connect(mapStateToProps,matchDispatchToProps)(ManaFilter);