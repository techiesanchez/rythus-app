import React, { PropTypes } from 'react'


export default class Cards extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <p>cards collection</p>
                <ul>
                    {this.props.cards.map((card, i) =>
                        <li key={i}>{card.title}</li>
                     )}
                </ul>
            </div>
        )
    }
}

Cards.propTypes = {
    cards: PropTypes.array.isRequired
}
