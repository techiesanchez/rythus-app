import React, { PropTypes } from 'react';
import MenuItem from './MenuItem';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="menu">
                <ul>
                    {this.props.menuItems.map((item, i) =>
                        <MenuItem
                            name={item.name}
                            onClick={this.props.onMenuItemClick}
                            active={item.active}
                            key={i}
                        />
                     )}
                </ul>
            </div>
        );
    }
}

Menu.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        active: PropTypes.bool.isRequired,
    }).isRequired).isRequired,
    selectedItem: PropTypes.string.isRequired,
    onMenuItemClick: PropTypes.func.isRequired
};
