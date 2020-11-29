import { combineReducers, createStore, compose } from 'redux';
import tasksReducer from './reducers/tasksReducer';

const reducers = combineReducers({
  tasksReducer: tasksReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());

window.store = store;
export default store;
