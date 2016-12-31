import React, { PropTypes } from 'react';


export default class CardMenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onClick(this.props.id)
    }

    render() {
        return (
            <input 
                type="button" 
                id={this.props.id} 
                className="btn" 
                value={this.props.value}
                onClick={this.handleClick}
            />
        );
    }
};


CardMenuItem.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};
