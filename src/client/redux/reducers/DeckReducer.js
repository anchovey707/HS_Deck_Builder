var initial_state = []

export default (state = initial_state, action) => {
  switch(action.type){

    case 'ADD_TO_DECK':

      if(deckFull(state)){
        alert('You already have 30 cards in your deck')
        return state
      }

      if(hasDoubles(state, action.payload)){
        alert(`You already have two copies of ${action.payload} !`)
        return state
      }
      else{
        return [...state,action.payload]
      }

    case 'REMOVE_FROM_DECK':
      var arr_after_remove = []

      for(var i = 0; i < state.length; i++){
        if(state[i] !== action.payload){
          arr_after_remove.push(state[i])
        }
      }

      return arr_after_remove

    default:
      return state  
  
  }
}

function hasDoubles(array, val) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
      if (array[i] === val) {
          count++;
      }
  }
  if (count === 2){
    return true
  }
  else{
    return false
  }
}

function deckFull(array){
  if(array.length === 30){
    return true
  }
  else{
    return false
  }
}