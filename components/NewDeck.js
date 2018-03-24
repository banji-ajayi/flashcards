import React, { Component } from 'react';
import { View, TouchableOpacity, Button, Text, Platform, StyleSheet, TextInput } from 'react-native';
import { saveDeckTitle } from '../utils/api';
import { addDeck } from '../actions';
import { connect } from 'react-redux';
import {black} from '../utils/color'


export class NewDeck extends Component {

	state = {
		input: ''
	}

	addTitle = () => {
		const { input } = this.state;
		saveDeckTitle(input)
		this.props.dispatch(addDeck(input))
		this.props.navigation.navigate('IndividualDeckView',
		 {inputId: input})
		 this.setState({input: ''})
	}

	render() {
		
		return (
			<View  style={styles.container}>
			<Text style={styles.formTitle}> What is the title of your New Deck </Text>
			<TextInput  style={styles.formInput} onChangeText={(input) => this.setState(
				{input: input}
			)} value = {this.state.input}>
			</TextInput>
			<Button style={styles.addDeckBtn} onPress={this.addTitle} title='Add Deck'>

			</Button>

			</View>

			
			
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	formTitle:{
		fontSize:20,
		color: "black"
	},
	formInput: {
		height: 35,
		width: 180,
		padding:10,
		margin: 45,
		borderWidth: 0.5,
		borderColor: black,
		borderRadius: 6
	},
	addDeckBtn:{
		padding: 8,
		borderWidth: 0.5,
		borderColor: black
	}
})


export default connect()(NewDeck);