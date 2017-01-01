import React, { PropTypes } from 'react';
import url from 'url';


export default class CardView extends React.Component {
    constructor(props) {
        super(props);
        this.buildImageURL = this.buildImageURL.bind(this);
    }
    componentDidMount() {
        console.log('CardView did mount');
    }
    buildImageURL(filename) {
        if (typeof filename === 'undefined') filename = 'sotfk.png';
        return url.resolve('/img/', filename);
    }
    render() {
        return (
            <div className="card">
                <div className="title">{this.props.title}</div>
                <div className="background"></div>
                <div className="border"></div>
                <div className="picture"><img src={this.buildImageURL(this.props.picture)} /></div>
                <div className="description">{this.props.description}</div>
            </div>
        );
    }
}

CardView.proptypes = {
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    cardCount: PropTypes.number.isRequired
}
