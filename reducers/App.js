import { CLICK_CARD, REQUEST_CARDS, RECEIVE_CARDS, 
         CLICK_MENU_ITEM, SHUFFLE_DECK, 
         ADD_CARD_TO_HAND, DRAW_CARD } from '../actions';

const countDeck = (cards) => {
    var counter = 0;
    Object.keys(cards).forEach(catName => {
        cards[catName].forEach(card => {
            counter += 1;
        })
    });
    return counter;
}


const CardView = (state = {}, action) => {
    switch (action.type) {
        //case CLICK_MENU_ITEM:
        //    return {
        //    };        
        case RECEIVE_CARDS:
            return Object.assign({}, state, {
                cardCount: countDeck(action.cards)
            });
        default:
            return state;
    }
    

};


const menuItem = (item, selectedItem, index) => {
    if (item.name !== selectedItem) {
        return Object.assign({}, item, {
            active: false,
            key: index
        });
    }
    return Object.assign({}, item, {
        active: true,
        key: index
    });
};

const menuItemTwo = (name, index) => {
    return {
        name: name,
        active: false,
        key: index
    }
};


// Fisher–Yates Shuffle
// greets https://bost.ocks.org/mike/shuffle/
const shuffle = (array) => {
   var m = array.length, t, i;
    // While there remain elements to shuffle…

    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
    t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    
    return array;
}


const card = (item, selectedItem, index) => {
    if (item.name !== selectedItem) {
        return Object.assign({}, item, {
            active: false,
            key: index
        });
    }
    return Object.assign({}, item, {
        active: true,
        key: index
    })
}



/**
   shuffes all the cards in the deck
   turns this
   {
     encounters: [...],
     heros: shuffle([...])
   }

   into this
   {
     encounters: shuffle([...]),
     heros: shuffle([...)
   }
   
 */
const cardShuffler = (cards) => {
    Object.keys(cards).forEach(catName => {
        cards[catName] = shuffle(cards[catName])
    });
    return cards;
}


/**
 * shift the top card from the selected deck
 * return new cards object
 */
const removeTopCard = (cards, selectedItem) => {
    var cardsResult = Object.assign({}, cards);
    console.log(`new cards! selectedItem=${selectedItem}`);
    console.log(cardsResult);
    var topCard = cardsResult[selectedItem].shift();
    return { topCard, cardsResult };
}

/**
 * return the top card from the selected deck
 */
const returnTopCard = (cards, selectedItem) => {
    return cards[selectedItem][0];
}


const createDiscards = (state) => {
    return Object.assign({}, state.discards, {
        displayedCard: {
            cardObject: returnTopCard(state.cards, state.selectedItem),
            deck: state.selectedItem
        }
    })
}

const createMenuItems = (cards) => {
    console.log('createMenuItems');
    console.log(cards);

    var something = [];

    Object.keys(cards).forEach((cardName, i) => {
        console.log(`cardName ${cardName}`);
        something.push(menuItemTwo(cardName, i));
    });

    return something;

}



/**
 * reducer
 *
 * Describes how an action will transform the state into the next state
 */
const appReducer = (state = {        
    cards: {
        heros: []
    }
}, action) => {
    
    switch(action.type) {
        case DRAW_CARD:
            // put displayedCard (if exitss) in belonging deck's discard pile
            if (typeof state.discards !== 'undefined') {
                if (typeof state.displayedCard !== 'undefined') {
                    const discardedCard = state.displayedCard;
                    const discardedCardCategory = state.displayedCard.deck;
                }
            }

            // take top card from belonging deck and put in displayedCard spot
            const { topCard, cardsResult } = removeTopCard(state.cards, state.selectedItem);
            return Object.assign({}, state, {
                cards: cardsResult,
                discards: createDiscards(state),
                displayedCard: topCard
            });

        case CLICK_CARD:
            return Object.assign({}, state, {
                blah: action.selectedItem, 
                cards: state.cards.cards.map((item, i) =>
                    menuItem(item, action.selectedItem, i)
                )
            });
            
        case REQUEST_CARDS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
            
        case RECEIVE_CARDS:
            console.log(`${RECEIVE_CARDS} GOTTEM, BOIZE`);
            console.log(action);
            console.log(Object.keys(action.cards));
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                cards: cardShuffler(action.cards),
                menuItems: createMenuItems(action.cards)
            })
            
        case CLICK_MENU_ITEM:
            return Object.assign({}, state, {
                selectedItem: action.selectedItem, 
                menuItems: state.menuItems.map((item, i) =>
                    menuItem(item, action.selectedItem, i)
                )
            })
            
        default:
            return state;
    }
};








export default appReducer;
