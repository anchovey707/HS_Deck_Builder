
export const clickTab = (char_class) => {
  return{
    type: 'CLICK_TAB',
    payload:char_class
  }
}

export const loadCardDataByClass = (char_class) => {
  return{
    type: 'LOAD_CARD_BY_CLASS',
    payload:char_class
  }
}