import React from 'react';

export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <ul>
                    <li><a className="item" href="#">Settlement</a></li>
                    <li><a className="item" href="#">Battallion</a></li>
                    <li><a className="item" href="#">Hero</a></li>
                    <li><a className="item" href="#">Merchant</a></li>
                    <li><a className="item" href="#">Dungeon</a></li>
                    <li><a className="item" href="#">Villain</a></li>
                    <li><a className="item" href="#">Monster</a></li>
                    <li><a className="item" href="#">Encounter</a></li>
                    <li><a className="item" href="#">Reward</a></li>
                </ul>
            </div>
        );
    }
}
