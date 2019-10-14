import { createStore, combineReducers } from 'redux';
import users from './users';

const reducer = combineReducers({
  users,
});

export default createStore(reducer);
