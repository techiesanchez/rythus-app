



export const clickMenuItem = (item) => {
    return {
        type: 'CLICK_MENU_ITEM',
        selectedItem: item
    };
};



export const drawCard = (card) => {
    return {
        type: 'DRAW_CARD',
        card: card
    };
};


export const shuffleDeck = (deck) => {
    return {
        type: 'SHUFFLE_DECK',
        deck: deck
    };
};
