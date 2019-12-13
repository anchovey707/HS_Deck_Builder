var initial_state = []

export default (state = initial_state, action ) => {
  switch(action.type){
    
    case 'DISPLAY_LOADED_DECK':
      return action.payload
      
    default:
      return state
  }
}