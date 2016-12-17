import React from 'react';

export default class CardView extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="title">Earl the Grey</div>
                <div className="background"></div>
                <div className="border"></div>
                <div className="picture"></div>
                <div className="description">Undescribed</div>
            </div>
        );
    }
}
