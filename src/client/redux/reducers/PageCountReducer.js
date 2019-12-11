var initial_state = 1
// ANY STATE ABOVE 4 IS ERROR

export default (state = initial_state, action) => {
  switch(action.type){

    case 'INCREASE_PAGE_COUNT':
      let next_page = state + 1
      return next_page
    
    case 'DECREASE_PAGE_COUNT':
      let prev_page = state - 1
      return prev_page

    default:
      return state

  }
}