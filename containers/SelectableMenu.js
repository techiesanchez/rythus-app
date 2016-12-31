import { connect } from 'react-redux';
import { clickMenuItem } from '../actions';
import Menu from '../components/Menu';


const mapStateToProps = (state) => {
    return {
        menuItems: state.menuItems,
        selectedItem: state.selectedItem
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


