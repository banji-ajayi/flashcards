import React, { Component } from 'react';
import { View, TouchableOpacity, Button, Text, Platform, StyleSheet, TextInput } from 'react-native';
import { saveDeckTitle } from '../utils/api';
import { AddDeck } from '../actions'


export default class NewDeck extends Component {

	state = {
		input: ''
	}

	submitTitle = () => {
		const { input } = this.state;
	}

	render() {
		
		return (
			<View  style={styles.container}>
			<Text> hat is the title of your New Deck </Text>
			<TextInput  onChangeText={(input) => this.setState(
				{input: input}
			)} value = {this.state.input}>
			</TextInput>
			<Button onPress={this.submitTitle} title='submit'>

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
	}
})