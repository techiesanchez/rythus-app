import { connect } from 'react-redux';
import { clickMenuItem } from '../actions';
import Menu from '../components/menu';


const mapStateToProps = (state) => {
    console.log('container got state--');
    console.log(state);
    return {
        menuItems: state.menu.menuItems,
        selectedItem: state.menu.selectedItem
        //onMenuItemClick: state.onMenuItemClick
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMenuItemClick: (name) => {
            dispatch(clickMenuItem(name));
        }
    }
}



const SelectableMenu = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu)

export default SelectableMenu;


