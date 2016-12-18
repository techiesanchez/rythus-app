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
    })
}




/**
 * menu reducer
 *
 * Describes how a menu action will transform the state into the next state
 */
const menu = (state = {}, action) => {
    if (action.type === 'CLICK_MENU_ITEM') {
        //console.log(
        return {
             selectedItem: action.selectedItem, 
             menuItems: state.menuItems.map((item, i) =>
                 menuItem(item, action.selectedItem, i)
             )
        }
        
    }
    else {
        return state;
    }
};


export default menu;
