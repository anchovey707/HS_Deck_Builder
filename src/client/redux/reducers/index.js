import {combineReducers} from 'redux';
import ClickTabReducer from './ClickTabReducer';
import CardDataReducer from './CardDataReducer';

export default combineReducers({
  CardTabs:ClickTabReducer,
  CardData: CardDataReducer
});