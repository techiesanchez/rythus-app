import React, { PropTypes } from 'react';
import MenuItem from './menuitem';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        console.log('menu created with props');
        console.log(props);
        //this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return (
            <div className="menu">
                <ul>
                    {console.log(this.props)}
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
        active: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    selectedItem: PropTypes.string.isRequired
}
