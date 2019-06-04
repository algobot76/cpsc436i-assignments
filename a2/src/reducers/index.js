import { combineReducers } from 'redux';
import items from './items';
import visibilityFilter from './visibilityFilter';
import showPopup from './showPopup';

export default combineReducers({
  items,
  visibilityFilter,
  showPopup
});
