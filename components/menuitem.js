import React, { PropTypes } from 'react';

export default class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.onClick(this.props.name);
    }
    
    render() {
        return (
            <li>
                <a 
                    className={(this.props.active ? 'active' : 'item')}
                    href="#"
                    onClick={this.handleClick}
                >
                    {this.props.name}
                </a>
            </li>
        );
    }
}

MenuItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
}
