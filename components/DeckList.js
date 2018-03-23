import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Platform, StyleSheet } from 'react-native';
import { getDecks } from '../utils/api';
import TextButton from './TextButton';
import { connect } from 'react-redux';
import { getAllDecks } from '../utils/api'
import { receiveDecks } from '../actions/index'

export class Decklist extends Component {

	componentDidMount() {
		getAllDecks()
		.then(decks => this.props.receiveMyDecks(decks))
	}

	render() {
		const { decks } = this.props
		console.log(this.props);
		console.log(getAllDecks())
		//const decks = getDecks();
		//console.log(this.props);
		

		return (
			<View style={styles.container} >
			{Object.keys(decks).map( (deck) => {
				const { questions, title } = decks[deck];
				return (
					<View key={deck}>
					<Text >{title} </Text>
					<Text>{questions.length} </Text>
					<TextButton style={{padding: 10}} onPress={() => this.props.navigation.navigate(
						'IndividualDeckView', {inputId: deck}
					)} >

					</TextButton>
					</View>
				)
		})}
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

function mapDispatchToProps (dispatch){
	return {
		receiveMyDecks: (decks) => {
			dispatch(receiveDecks(decks))
		}
	}
}

function mapStateToProps (decks){
	return decks;
}

export default connect(mapStateToProps, mapDispatchToProps)(Decklist)