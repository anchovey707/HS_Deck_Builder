var initial_state = []

export default (state = initial_state, action) => {
  switch(action.type){

    case 'ADD_TO_DECK':
      let new_state = state.push(action.payload)
      return state

    
    case 'REMOVE_FROM_DECK':
      var index = state.indexOf(action.payload)
      let new_state = state.splice(index,1)
      return new_state

    default:
      return state  
  
  }
}