import React, {Component} from 'react';
import { white, gray, blue, black, purple, red } from '../utils/color';
import { NavigationActions } from 'react-navigation';
import { TouchableOpacity, TextInput,
View, Text, StyleSheet, Button, Alert} from 'react-native';

import ToggleButton from './ToggleButton'
import { connect } from 'react-redux';
import ClickButton from './ClickButton';

export class Quiz extends Component {

	state = {
		correct: 0,
		incorrect: 0,
		questionNo: 0,
		question: false
	}
	

	submitYourAnswer = (answer) => {
		const deck = this.props.navigation.state.params.inputId;
		const {questionNo} = this.state;
		const decks = this.props.myDecks;

		if(answer === true) {
			this.setState({correct: this.state.correct + 1})
		} else {
			this.setState({incorrect: this.state.incorrect + 1})
		}
		this.setState({questionNo: this.state.questionNo + 1, question: false})
	}
	

	displayAnswer = () => (
		!this.state.question ? this.setState({ question: true})
		: this.setState({question: false})
	)

	goBack = () => {
		this.props.navigation.dispatch(NavigationActions.back({ key: null }))
	}	

	startOver = () => {
		this.setState(
			{
			correct: 0,
			incorrect: 0,
			questionN0: 0, 
			question: false,
		}
	)
	}





	render() {
		const decks = this.props.myDecks
		const deck = this.props.navigation.state.params.inputId;
		const questionNo = this.state.questionNo;
		const num = this.state.questionNo + 1

		if(questionNo === decks[deck].questions.length) {
			return (
				<View style={styles.container}>
					<Text>{this.state.correct} correct answers out of {decks[deck].questions.length}!</Text>
					
					<ToggleButton color={gray} styles={styles} text={'Start Over'} onPress={this.startOver} />
					<ToggleButton color={black} styles={styles} text={'GoBack'} onPress={this.goBack}/>

					</View>
			)
		}

		return (
			<View style={styles.container}>
			<View style={styles.quiz}>

			<Text style={styles.numQuestions}>{num}/ {decks[deck].questions.length}</Text>
			
			{!this.state.question ? <Text style={styles.askQuestion}>{decks[deck].questions[questionNo].question}</Text>
			: <Text style={styles.askQuestion}>{decks[deck].questions[questionNo].answer}</Text>}


			<TouchableOpacity>
			
			{!this.state.question ? <Text style= {styles.showAnswer} onPress={this.displayAnswer}> Answer </Text>
			: <Text style= {styles.showAnswer} onPress={this.displayAnswer}> Question </Text>}
			
			</TouchableOpacity>

			<ToggleButton color={blue} styles={styles} text={'Correct'} onPress={() => this.submitYourAnswer(true)}/>
			<ToggleButton color={red} styles={styles} text={'Incorrect'} onPress={() => this.submitYourAnswer(false)}/>

			</View>
			</View>
		)
	}
}

const styles = StyleSheet.create ({
	container: {
		flex:1,
		justifyContent: 'center',
		alignItems:'center'
	},
	showAnswer: {
		fontSize:22,
		margin:20,
		color: purple,
		textAlign:'center',
		marginBottom: 15
	},
	numQuestions: {
  		alignSelf: 'flex-start',
  		fontSize: 22,
  		margin: 5,
  		position: 'absolute',
	},
	askQuestion: {
		fontSize: 18,
		textAlign: 'center',
		marginTop: 35,
		
	},
	submitBtnText: {
		color: white,
		fontSize: 22,
		textAlign: 'center'
	},
	androidSubmitBtn: {
		padding: 10,
		paddingLeft: 30,
		paddingRight: 30,
		height: 45,
		borderRadius: 6,
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10

	}

});

function mapStateToProps(myDecks) {
	return {
		myDecks
	}
}


export default connect(mapStateToProps)(Quiz)