import { connect } from 'react-redux';
import { shuffleDeck, addCardToHand, drawCard } from '../actions';
import CardMenuDisplay from '../components/CardMenu';


const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        onButtonClick: (id) => {
            switch (id) {
                case 'drawCard':
                    dispatch(drawCard());
                    break;
                case 'keepCard':
                    dispatch(addCardToHand());
                    break;
                case 'shuffleCards':
                    dispatch(shuffleDeck());
                    break;
            }
        }
    }
}



const CardMenu = connect(
    mapStateToProps,
    mapDispatchToProps
)(CardMenuDisplay)

export default CardMenu;


