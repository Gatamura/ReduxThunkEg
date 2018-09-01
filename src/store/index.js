import { createStore, applyMiddleware } from 'redux';
import Reducers from './ducks';
import Thunk from 'redux-thunk';

const store = createStore(Reducers, applyMiddleware(Thunk));

export default store;
