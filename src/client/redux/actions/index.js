
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
    type: 'DECREASE_PAGE_COUNT',
    payload: page_num
  })
}

export const addToDeck = (card_name) => {
  return({
    type:'ADD_TO_DECK',
    payload: card_name
  })
}

export const removeFromDeck = (card_name) => {
  return({
    type:'REMOVE_FROM_DECK',
    payload: card_name
  })
}


export const addMinFilter = (filter_type,val) => {
  return({
    type: 'ADD_MIN_FILTER',
    filter_type: filter_type,
    payload: val
  })
}

export const addMaxFilter = (filter_type,val) => {
  return({
    type: 'ADD_MAX_FILTER',
    filter_type: filter_type,
    payload: val
  })
}

export const addClassFilter = (filter_type, val) => {
  return({
    type: 'ADD_CLASS_FILTER',
    filter_type: filter_type,
    payload: val
  })
}