import React, {Component} from 'react';
import { white, gray, blue, black, purple, red } from '../utils/color';
import { NavigationActions } from 'react-navigation';
import { TouchableOpacity, TextInput,
View, Text, StyleSheet, Button, Platform, Alert} from 'react-native';

import ToggleButton from './ToggleButton'
import { connect } from 'react-redux';
import ClickButton from './ClickButton';

function SubmitBtn ({text, color, onPress}) {
	return (
		<TouchableOpacity
			style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn}
			onPress={onPress}>
			
		    <Text style={[styles.submitBtnText,{color:color}] }>{text}</Text>
			</TouchableOpacity>
	)
}

//<Text style={[styles.subHeader, {color: white}]}>

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
		const decks = this.props.myDecks
		const correct = decks[deck].questions[questionNo].correct.toLowerCase;

		if(answer === correct) {
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



	render() {
		const decks = this.props.myDecks
		const deck = this.props.navigation.state.params.inputId;
		const questionNo = this.state.questionNo;
		const num = this.state.questionNo + 1

		if(questionNo === decks[deck].questions.length) {
			return (
				<View>
					<Text>{this.state.correct} correct answers out of {decks[deck].questions.length}!</Text>
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
			<SubmitBtn text={'Correct'} color='blue' onPress={() => this.submitYourAnswer('true')}/>
			<SubmitBtn text={'Incorrect'} color='red' onPress={() => this.submitYourAnswer('false')}/>
			
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
		// top: 0,
  		alignSelf: 'flex-start',
  		// left: 0,
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
		//color: white,
		fontSize: 22,
		textAlign: 'center'
	},
	iosSubmitBtn: {
		backgroundColor: white,
		padding: 10,
		borderRadius: 7,
		height: 45,
		marginLeft: 40,
		marginRight: 40

	},
	androidSubmitBtn: {
		backgroundColor: white,
		padding: 10,
		paddingLeft: 30,
		paddingRight: 30,
		height: 45,
		//width:160,
		borderRadius: 6,
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',

	}

});

function mapStateToProps(myDecks) {
	return {
		myDecks
	}
}


export default connect(mapStateToProps)(Quiz)

// <ClickButton styles= {{	alignSelf: 'center', color: blue}}  text={'Correct'}/> 
// <ClickButton styles= {{	alignSelf: 'center',}} color={red} text={'Incorrect'}/>
//<ToggleButton  style= {styles.showAnswer} text={'Answer'}></ToggleButton>
//<SubmitBtn styles= {{	alignSelf: 'center',backgroundColor:red}}  text={'Testing'}/>