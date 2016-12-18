import { combineReducers } from 'redux';

import cards from './Cards';
import menu from './Menu';

export default combineReducers({
    menu: menu,
    cards: cards
});
