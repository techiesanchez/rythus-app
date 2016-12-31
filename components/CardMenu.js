import React, { PropTypes } from 'react';
import CardMenuItem from './CardMenuItem';


export default class CardMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="controls">

                <CardMenuItem id="drawCard" value="draw a card" onClick={this.props.onButtonClick} />
                <CardMenuItem id="keepCard" value="put the card in your hand" onClick={this.props.onButtonClick} />
                <CardMenuItem id="shuffleCards" value="re-shuffle the deck" onClick={this.props.onButtonClick} />
            </div>
        );
    }
};


CardMenu.propTypes = {
    onButtonClick: PropTypes.func.isRequired
};
