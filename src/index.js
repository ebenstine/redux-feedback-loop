import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

//redux necessities
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import { Provider } from 'react-redux';
//single reducer which can sort all data according to the function
const allFeedback = (state = [], action) => {
    switch (action.type) {
        case 'ADD_DAILY_MOOD':
            return [...state, action.payload];
        case 'ADD_DAILY_COMPREHENSION':
            return [...state, action.payload];
        case 'ADD_DAILY_SUPPORT':
            return [...state, action.payload];
        case 'ADD_COMMENTS':
            return [...state, action.payload];
        case 'SUBMIT_RESET':
            return [];
    }
    return state;
}

//use the reducer in the store
const storeInstance = createStore(
    combineReducers({
        allFeedback

    }),
    applyMiddleware(logger)
);



ReactDOM.render( <Provider store = {storeInstance}>< App /></Provider>, document.getElementById('root'));
registerServiceWorker();
