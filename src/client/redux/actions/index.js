
export const clickTab = (char_class) => {
  return{
    type: 'CLICK_TAB',
    payload:char_class
  }
}

export const addCardData = (cards) => {
  return{
    type: 'ADD_CARD_DATA',
    payload:cards
  }
}

export const showCardData = (card_images) => {
  return{
    type: 'SHOW_CARD_DATA',
    payload: card_images

  }
}