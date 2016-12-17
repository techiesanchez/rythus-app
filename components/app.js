import React from 'react';
import CardView from './cardview';
import Footer from './footer';
import Menu from './menu';
import Controls from './controls';
import MyCards from './mycards';


export class RythusCardsApp extends React.Component {
    render() {
        return (
            <div>
                <div className="flex-left top-gap">
                    <div className="unit">
                        <h1 className="title">RythusCardsApp</h1>
                    </div>
                </div>
                <div className="flex-left">
                    <div className="unit-1-2">
                        <CardView />
                    </div>
                    <div className="unit-1-2">
                        <Menu />
                    </div>
                </div>
                <div className="flex-left unit">
                    <Controls />
                </div>
                <div className="flex-left unit">
                    <MyCards />
                </div>
                <div className="flex-center unit">
                    <Footer />
                </div>
            </div>
        );
    }
}
