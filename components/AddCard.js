import React, {Component} from 'react';
import { white, gray, blue, black, purple } from '../utils/color';
import { TouchableOpacity, TextInput,
View, Text, StyleSheet, Button, Platform, Alert} from 'react-native';

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
	

	state = {
		answer: '',
		question: ''
	}

	addNewCard = (name) => {
		const deck = this.props.navigation.state.params.inputId;
		const { question, answer, correct} = this.state;

		if (question.trim() === '') {
            Alert.alert('Compulsory','Please enter question');
            return;
        }
        if (answer.trim() === '') {
            Alert.alert('Compulsory','Please enter answer');
            return;
		}

		this.props.dispatch(addCardToDeck(
			{name, question, answer})
		);
		addNewCardToDeck(name, {question, answer});
		this.setState(
			{question: '', answer:''}

		)
		this.props.navigation.navigate(
			'IndividualDeckView', {inputId: deck}
		)
		
	}


	render() {
		const name = this.props.navigation.state.params.inputId
		
		return (
			
			<View style={styles.container}>
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

			
			
			<SubmitBtn onPress={() => this.addNewCard(name)}/>
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
