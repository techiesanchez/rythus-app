import React from 'react';
import SmallCardView from './smallcardview';

export default class MyCards extends React.Component {
    render() {
        return (
            <div className="mycards">
                <ul>
                    <SmallCardView />
                </ul>
            </div>
        );
    }
}
