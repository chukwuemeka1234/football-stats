import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import teamsReducer from './teams/teams';
import teamReducer from './team/team';
import standingsReducer from './standings/standings';

const combinedReducers = combineReducers({
  standingsReducer,
  teamsReducer,
  teamReducer,
});

const middlewares = [logger, thunk];

const store = createStore(combinedReducers, applyMiddleware(...middlewares));

export default store;
