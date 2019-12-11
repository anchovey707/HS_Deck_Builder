var initial_state = []

export default (state=initial_state, action) => {
  switch(action.type){
    case 'ADD_CARD_PAGES':
      return action.payload
    default:
      return state
  }
}