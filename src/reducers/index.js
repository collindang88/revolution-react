import { combineReducers } from 'redux';
import personReducer from './personReducer';
import playerReducer from './playerReducer';
import enemyReducer from './enemyReducer';

export default combineReducers({
  peopleStatus: personReducer,
  player: playerReducer,
  enemy: enemyReducer
});