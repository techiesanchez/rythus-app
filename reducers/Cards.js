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
 * cards reducer
 *
 * Describes how an action will transform the state into the next state
 */
const cards = (state = {}, action) => {
    if (action.type === 'CLICK_CARD') {
        return { 
             blah: action.selectedItem, 
             cards: state.cards.cards.map((item, i) =>
                 menuItem(item, action.selectedItem, i)
             )
        }
        
    }
    else {
        return state;
    }
};


export default cards;
