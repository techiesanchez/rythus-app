import React from 'react';
import Footer from './footer';
import SelectableMenu from '../containers/SelectableMenu';
import CardMenu from '../containers/CardMenu';
import MyCards from './mycards'; // this is the player's hand
import Cards from '../containers/Cards';
import ActiveCardDisplay from '../containers/ActiveCardDisplay';


export class RythusCardsApp extends React.Component {
    componentDidMount() {
        
    }
    render() {
        return (
            <div className="flex-center">
                <div className="container">
                    <Cards />
                    
                    <div className="flex-center top-gap">
                        <div className="unit">
                            <h1 className="title">RythusCardsApp</h1>
                        </div>
                    </div>
                    
                    <div className="flex-left">
                        <div className="unit">
                            <ActiveCardDisplay />
                        </div>
                        <div className="unit">
                            <CardMenu />
                        </div>
                    </div>
                    
                    <div className="flex-left">
                        <div className="unit">
                            <MyCards />
                        </div>
                    </div>
                    
                    <div className="flex-left">
                        <div className="unit">
                            <SelectableMenu />
                        </div>
                    </div>
                    <div className="flex-left">
                        <div className="flex-center unit">
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
