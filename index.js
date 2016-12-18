import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import reducers from './reducers';
import { RythusCardsApp } from './components/App';


const middleware = []
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}



var initialState = {
    menu: {
        selectedItem: "Encounter",
        menuItems: [
            { name: 'Resource', active: false },
            { name: 'Settlement', active: false },
            { name: 'Battallion', active: false },
            { name: 'Hero', active: false },
            { name: 'Merchant', active: false },
            { name: 'Dungeon', active: false },
            { name: 'Villain', active: false },
            { name: 'Monster', active: false },
            { name: 'Encounter', active: false },
            { name: 'Reward', active: false }
        ]
    }
}


var store = createStore(reducers, initialState, applyMiddleware(...middleware));

render(
    <Provider store={store}>
      <RythusCardsApp />
    </Provider>,
    document.getElementById('appy')
);
