import fetch from 'isomorphic-fetch';


const shouldFetchCards = (state) => {
    const { cards, isFetching, didInvalidate } = state;
    if (Object.keys(cards).length < 1) {
        return true;
    }
    if (isFetching) {
        return false;
    }
    return didInvalidate;
}


export const REQUEST_CARDS = 'REQUEST_CARDS';
const requestCards = () => {
    return {
        type: REQUEST_CARDS
    }
} 


export const RECEIVE_CARDS = 'RECEIVE_CARDS';
const receiveCards = (json) => {
    return {
        type: RECEIVE_CARDS,
        cards: json
    }
}

export const RECEIVE_ERROR = 'RECEIVE_ERROR';
const receiveError = (err) => {
    return {
        type: RECEIVE_ERROR,
        message: err
    }
}


export const CLICK_MENU_ITEM = 'CLICK_MENU_ITEM';
export const clickMenuItem = (item) => {
    return {
        type: CLICK_MENU_ITEM,
        selectedItem: item
    };
};



export const DRAW_CARD = 'DRAW_CARD';
export const drawCard = () => {
    return {
        type: DRAW_CARD
    };
};


export const SHUFFLE_DECK = 'SHUFFLE_DECK';
export const shuffleDeck = (deck) => {
    return {
        type: SHUFFLE_DECK,
        deck: deck
    };
};

export const ADD_CARD_TO_HAND = 'ADD_CARD_TO_HAND';
export const addCardToHand = (card) => {
    return {
        type: ADD_CARD_TO_HAND,
        card: card
    };
};


export function fetchCards() {
    return function (dispatch) {
        dispatch(requestCards());

        return fetch('cards.json')
            .then(response => response.json())
            .then(json => dispatch(receiveCards(json)))
            .catch(err => dispatch(receiveError(err)))
    }
}


export function fetchCardsIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchCards(getState())) {
            return dispatch(fetchCards())
        }
    }
}
