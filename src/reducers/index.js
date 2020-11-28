import load from './load';
import career from './role';

// import { combineReducers } from 'redux';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  load,
  career
})

export default rootReducer