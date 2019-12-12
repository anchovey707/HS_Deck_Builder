// MAX INITIAL STATE IS 4
var initial_state = 0


export default (state = initial_state, action) => {
  switch(action.type){

    case 'INCREASE_PAGE_COUNT':
      return (state+1)
    
    case 'DECREASE_PAGE_COUNT':
      return (state-1)

    default:
      return state

  }
}