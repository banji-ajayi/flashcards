import React from 'react';
import { white, gray, blue, black } from '../utils/color';
import { NavigationActions } from 'react-navigation';
import { TouchableOpacity, TextInput, KeyboardAvoidingView,
View, Text, StyleSheet, Button} from 'react-native';
import { connect } from 'react-redux';
import { addCardToDeck } from '../actions/index';
import { addNewCardToDeck } from '../utils/api';

export default class AddCard extends Component {
	
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

	addNewCard = () => {
		
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

			<Text style={styles.formTitle}>Enter the correctt answer</Text>
			<TextInput style={styles.formInput}
			onChangeText={(correct) => this.setState({
				correct
			})} 
			value={this.state.correct}></TextInput>

			<TouchableOpacity>
			<Button style={styles.addCardBtn} onPress={() => this.addNewCard(name)} title='Submit'/>
			</TouchableOpacity>
			</View>
			</KeyboardAvoidingView>
		)
	}

}

const styles = StyleSheet.create ({
	container: {
		flex:1,
		justifyContent: 'center',
		alignItems:center
	},
	addCardBtn: {
		padding: 8,
		borderWidth: 0.5,
		borderColor: gray,
		backgroundColor: blue,
		borderRadius: 6
	},
	formTitle:{
		fontSize:20,
		color: black
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