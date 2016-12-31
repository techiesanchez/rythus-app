import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import { RythusCardsApp } from './components/App';


const middleware = [ thunkMiddleware ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}



var initialState = {
    selectedItem: "Encounter",
    menuItems: [
        { name: 'resourcez', active: false },
        { name: 'settlementz', active: false },
        { name: 'battallionz', active: false },
        { name: 'heroz', active: false },
        { name: 'merchantz', active: false },
        { name: 'dungeonz', active: false },
        { name: 'villainz', active: false },
        { name: 'monsterz', active: false },
        { name: 'encounterz', active: false },
        { name: 'rewardz', active: false }
    ],
    isFetching: false,
    cards: {},
    discards: {}
}


var store = createStore(reducers, initialState, applyMiddleware(...middleware));
render(
   <Provider store={store}>
      <RythusCardsApp />
    </Provider>,
    document.getElementById('appy')
);
