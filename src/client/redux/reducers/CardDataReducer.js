var initial_state = []

export default (state = initial_state, action) => {
  switch(action.type){
    case 'LOAD_DATA':
      var class_name = action.payload.toLowerCase()
      var url = `https://us.api.blizzard.com/hearthstone/cards?locale=en_US&class=${class_name}&access_token=USTdYzhi6GloLuBWELb5Z0k1dj6CFWMWyy`
      fetch(url)
      .then( res => res.json())
      .then( data => console.log(data))
      return state
    default:
      return state
  }
}