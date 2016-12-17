/**
 * menu reducer
 *
 * Describes how a menu action will transform the state into the next state
 */
const menu = (state = {}, action) => {
    if (action.type === 'CLICK') {
        switch (action.item) {
            case 'resource': return {selectedItem: 'resource'};
            case 'settlement': return {selectedItem: 'settlement'};
            case 'battallion': return {selectedItem: 'battallion'};
            case 'hero': return {selectedItem: 'hero'};
            case 'merchant': return {selectedItem: 'merchant'};
            case 'dungeon': return {selectedItem: 'dungeon'};
            case 'villain': return {selectedItem: 'villain'};
            case 'monster': return {selectedItem: 'monster'};
            case 'encounter': return {selectedItem: 'encounter'};
            case 'reward': return {selectedItem: 'reward'};
            default: return {selectedItem: 'reward'};
        }
    }
    else {
        console.log('that action is not a click');
        return false
    }
}
