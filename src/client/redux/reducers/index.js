import {combineReducers} from 'redux';
import ClickTabReducer from './ClickTabReducer';
import CardDataReducer from './CardDataReducer';
import CardPageReducer from './CardPageReducer';
import PageNumberReducer from './PageNumberReducer';
import DeckReducer from './DeckReducer';
import FilterReducer from './FilterReducer';

export default combineReducers({
  card_tabs:ClickTabReducer,
  card_data: CardDataReducer,
  card_pages: CardPageReducer,
  page_num: PageNumberReducer,
  deck: DeckReducer,
  filters: FilterReducer
});
