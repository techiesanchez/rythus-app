import React from 'react';

export default class Controls extends React.Component {
    render() {
        return (
            <div className="controls">
                <ul>
                    <li>
                        <a className="button" href="#">draw a card</a>
                    </li>
                    <li>
                        <a className="button" href="#">re-shuffle the deck</a>
                    </li>
                </ul>
            </div>
        );
    }
}
