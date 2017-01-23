import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  comments: (state = ['a','b']) => state
});

export default rootReducer;
