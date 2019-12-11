
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

export const addCardPages = (card_pages) => {
  return{
    type: 'ADD_CARD_PAGES',
    payload: card_pages
  }
}

export const nextPage = (page_num) => {
  return({
    type: 'INCREASE_PAGE_COUNT',
    payload: page_num
  })
}

export const prevPage = (page_num) => {
  return({
    action: 'DECREASE_PAGE_LOAD',
    payload: page_num
  })
}