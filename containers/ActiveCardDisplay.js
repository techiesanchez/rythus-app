import { connect } from 'react-redux';
import CardView from '../components/CardView';


const mapStateToProps = (state) => {
    const { displayedCard } = state;
    console.log(`displayedCard=${displayedCard}`);
    
    if (typeof displayedCard === 'undefined') {
        // @todo show the back of the card instead
        return {
            title: 'test title',
            description: 'test desc',
            picture: 'sotfk.png'
        }
    }
    
    return {
        title: displayedCard.title,
        description: displayedCard.description_markdown,
        picture: displayedCard.picture
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => {
            console.log('onLoad() fired!');
            dispatch(fetchCardsIfNeeded());
        },
        onClickDrawCard: () => {
            dispatch(drawCard());
        },
        fetchPostsIfNeeded: () => {
            dispatch(fetchCardsIfNeeded());
        }
    }
}


const ActiveCardDisplay = connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { pure: false }
)(CardView)

export default ActiveCardDisplay;


