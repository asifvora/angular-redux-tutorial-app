import { applyMiddleware, Store, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export const store: Store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(thunk),
);
