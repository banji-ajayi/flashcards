import {
	RECEIVE_DECKS,
	ADD_DECK,
	ADD_CARD_TO_DECK
} from '../actions/index';

function decks (state = {}, action) {
	switch (action.type) {
		case RECEIVE_DECKS :
			return {
				...state,
				...action.decks
			}
		case ADD_DECK :
			const addNewDeck = {
			[action.deck] : {
				title: action.deck,
				questions: []
				
			}
		}
			return {
				...state,
				...addNewDeck
			}
		case ADD_CARD_TO_DECK:
		const { question, answer, deck, correct} = action.card
			return {
				...state,
				[deck]: {
					...state[deck],
					questions: [...state[deck].questions, {question, answer, correct}]
				}
			}
		
		default : 
			return state;
	}
}

export default decks;