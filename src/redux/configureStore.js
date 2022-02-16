import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const combineReducers = combineReducers({
  standingsReducer,
  teamsReducer,
  teamReducer,
});

const middlewares = [logger, thunk];

const store = createStore(combineReducers, applyMiddleware(...middlewares));

export default store;