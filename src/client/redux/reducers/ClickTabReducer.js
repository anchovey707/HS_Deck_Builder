var all_classes = ['Mage','Warlock','Warrior','Paladin','Rogue','Shaman','Priest','Hunter','Druid']

var initial_state = all_classes

export default (state=initial_state, action) => {
  switch(action.type){

    case 'CLICK_TAB':
      var new_state = action.payload
      return [new_state]

    default:
      return state
  }
}