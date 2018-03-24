import { AsyncStorage } from 'react-native';

export const STORAGE_KEY = 'MobileFlashcards:card';

const Decks = {
	React: {
	  title: 'React',
	  questions: [
		{
		  question: 'What is React?',
		  answer: 'A library for managing user interfaces',
		  Correct : true 
		},
		{
		  question: 'Regular functions take in arguments while react takes what?',
		  answer: 'Props',
		  Correct: true
		}
	  ]
	},
	Physics: {
	  title: 'Mechanics',
	  questions: [
		{
		  question: 'Below equation represent Newton\'s First Law of motion',
		  answer: 'V^2 = U^2 + 1/2at^2',
		  Correct: false
		}
	  ]
	}
  }

  export const getDecks = () => {
	  return Decks;
  }

  export function saveDeckTitle (title){
	return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
		[title]: {
			title: title,
			questions: []
		}
	}))
}


  export function getAllDecks (){
     
	  return AsyncStorage.getItem(STORAGE_KEY)
	  .then(data => {
		  if(data === null || data === '') {
			  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(Decks))
			  return Decks;
		  } else {
			  return JSON.parse(data);
		  }
	  })
  }