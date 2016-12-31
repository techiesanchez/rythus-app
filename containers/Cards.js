import { connect } from 'react-redux';
import { drawCard } from '../actions';
//import CardView from '../components/CardView';
import { fetchCardsIfNeeded } from '../actions';
import Deck from '../components/Deck';


const mapStateToProps = (state) => {
    const { cards, menu, isFetching } = state
    
    return {
        cards: cards,
        isFetching: isFetching
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


const Cards = connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { pure: false }
)(Deck)

export default Cards;


