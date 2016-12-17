import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="content">
                    <p>A webapp for the up and coming boardgame, Nations of Rythus* by David Grimmett"</p>
                    <p>App created by <a href="http://grimtech.net/about">Chris Grimmett</a></p>
                    <p>* name pending</p>
                </div>
            </div>
        );
    }
}
