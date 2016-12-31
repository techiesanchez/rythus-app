import React, { PropTypes } from 'react';
import url from 'url';


export default class Deck extends React.Component {
    constructor(props) {
        super(props);
        this.buildImageURL = this.buildImageURL.bind(this);
        console.log('-- Deck created with props --');
        console.log(props);
    }
    componentDidMount() {
        this.props.onLoad()
        console.log('Deck did mount');
    }
    componentWillReceiveProps(nextProps) {
        if (typeof nextProps.cards.heros === undefined) {
            this.props.fetchCardsIfNeeded();
        }
    }
    buildImageURL(filename) {
        return url.resolve('/img/', filename);
    }
    render() {
        return (
            <div className="deck">
                <p>categories in this deck--</p>
                {Object.keys(this.props.cards).map((category, i) => {
                    return <p key={i}>{category}</p>
                })}
            </div>
        );
    }
}

Deck.proptypes = {
    cards: PropTypes.shape({
        heros: PropTypes.array,
        encounters: PropTypes.array,
    }).isRequired,
    onLoad: PropTypes.func.isRequired,
    fetchCardsifneeded: PropTypes.func.isRequired
}
