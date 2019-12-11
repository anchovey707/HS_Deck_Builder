import {combineReducers} from 'redux';
import ClickTabReducer from './ClickTabReducer';
import CardDataReducer from './CardDataReducer';
import CardPageReducer from './CardPageReducer';
import PageCountReducer from './PageCountReducer';

export default combineReducers({
  CardTabs:ClickTabReducer,
  CardData: CardDataReducer,
  CardPages: CardPageReducer,
  PageCount: PageCountReducer
});