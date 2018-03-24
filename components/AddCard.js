import React, {Component} from 'react';
import { white, gray, blue, black, purple } from '../utils/color';
import { NavigationActions } from 'react-navigation';
import { TouchableOpacity, TextInput, KeyboardAvoidingView,
View, Text, StyleSheet, Button, Platform} from 'react-native';
import { connect } from 'react-redux';
import { addCardToDeck } from '../actions/index';
import { addNewCardToDeck } from '../utils/api';

function SubmitBtn ( { onPress}) {
	return (
		<TouchableOpacity
			style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn}
			onPress={onPress}>
			<Text style={styles.addCardBtn}>SUBMIT</Text>
		</TouchableOpacity>
	)
}

export class AddCard extends Component {
	
	// changeText = (question) => {
	// 	this.setState((state) => ({
	// 		state[question]: 
	// 	}))
	// }

	state = {
		correct: '',
		answer: '',
		question: ''
	}

	addNewCard = (card) => {
		const { question, answer, correct} = this.state;

		this.props.dispatch(addCardToDeck({card, question, answer, correct}));
		addNewCardToDeck(card, {question, answer, correct});
		this.setState({question: '', answer:'', correct:''})
		this.props.navigation.dispatch(NavigationActions.back({
			key: 'AddCard'
		}))
		
	}

	

	// changeText = (input) => {
	// 	this.setState({
	// 	input
	// })
	// }

	render() {

		const name = this.props.navigation.state.params.entryId
		
		return (
			<KeyboardAvoidingView behavior='padding' 
			style={styles.container}>
			<View>
			<Text style={styles.formTitle}>Enter the question</Text>
			<TextInput style={styles.formInput}
			onChangeText={(question) => this.setState({
				question
			})} 
			value={this.state.question}></TextInput>

			<Text style={styles.formTitle}>Enter the answer</Text>
			<TextInput style={styles.formInput}
			onChangeText={(answer) => this.setState({
				answer
			})} 
			 value={this.state.answer}></TextInput>

			<Text style={styles.formTitle}>Enter the correct Answer</Text>
			<TextInput style={styles.formInput}
			onChangeText={(correct) => this.setState({
				correct
			})} 
			value={this.state.correct}></TextInput>

			
			<SubmitBtn onPress={() => this.addNewCard(name)}/>
			</View>
			</KeyboardAvoidingView>
		)
	}

}

const styles = StyleSheet.create ({
	container: {
		flex:1,
		justifyContent: 'center',
		alignItems:'center'
	},
	iosSubmitBtn: {
		backgroundColor: purple,
		padding: 10,
		borderRadius: 7,
		height: 45,
		marginLeft: 40,
		marginRight: 40

	},
	androidSubmitBtn: {
		backgroundColor: purple,
		padding: 10,
		paddingLeft: 30,
		paddingRight: 30,
		height: 45,
		//width:160,
		borderRadius: 6,
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',

	},
	addCardBtn: {
		color: white,
		fontSize: 22,
		textAlign: 'center'
	},
	formTitle:{
		fontSize:20,
		color: black,
		textAlign: 'center'
	},
	formInput: {
		height: 35,
		width: 180,
		padding:10,
		margin: 45,
		borderWidth: 0.5,
		borderColor: black,
		borderRadius: 6
	}
})

export default connect()(AddCard);