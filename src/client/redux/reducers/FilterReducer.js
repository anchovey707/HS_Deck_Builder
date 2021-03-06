var initial_state = {
  'attack':{
    'min': null,
    'max': null
  },
  'health':{
    'min': null,
    'max': null
  },
  'mana':{
    'min': null,
    'max': null
  },
  'search':{
    'query':null
  },
  'class':{

  }
}

export default (state = initial_state, action) => {
  switch(action.type){

    case 'ADD_MIN_FILTER':
      let new_min_state = state
      new_min_state[action.filter_type].min = action.payload
      return new_min_state
    
    case 'ADD_MAX_FILTER':
      let new_max_state = state
      new_max_state[action.filter_type].max = action.payload
      return new_max_state

    case 'ADD_CLASS_FILTER':
      let new_class_state = state
      new_class_state[action.filter_type] = action.payload
      return new_class_state
      
    default:
      return state
  }
}