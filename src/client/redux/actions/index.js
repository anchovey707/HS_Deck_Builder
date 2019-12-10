
export const clickTab = (char_class) => {
  return{
    type: 'CLICK_TAB',
    payload:char_class
  }
}

export const loadCardData = (char_class) => {
  return{
    type: 'LOAD_DATA',
    payload:char_class
  }
}