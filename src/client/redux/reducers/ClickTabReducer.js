var all_classes = ['mage','warlock','warrior','paladin','rogue','shaman','priest','hunter','druid']

var initial_state = all_classes

export default (state=initial_state, action) => {
  switch(action.type){

    case 'CLICK_TAB':
      return [action.payload]

    default:
      return state
  }
}