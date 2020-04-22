import { createStore, compose } from 'redux'
import { install } from 'redux-loop';
import { RootReducer } from './RootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    install()
);

export function setupAppStore() {
    return createStore(
        RootReducer,
        enhancers
    );
}
