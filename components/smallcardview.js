import React from 'react';

export default class SmallCardView extends React.Component {
    render() {
        return (
            <div className="smallcard">
                <div className="title">Lima Bean</div>
                <div className="background"></div>
                <div className="border"></div>
                <div className="picture">{this.props.picture}</div>
                <div className="description">A small, disgusting food</div>
            </div>
        );
    }
}
