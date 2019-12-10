import {combineReducers} from 'redux';
import ClickTabReducer from './ClickTabReducer';

export default combineReducers({
  CardTabs:ClickTabReducer
});