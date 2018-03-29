import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Platform, StyleSheet } from 'react-native';
import TextButton from './TextButton';
import { connect } from 'react-redux';
import { getAllDecks } from '../utils/api'
import { receiveDecks } from '../actions/index'
import { white, lightPurp } from '../utils/color';

export class Decklist extends Component {

	componentDidMount() {
		getAllDecks()
		.then(decks => this.props.receiveMyDecks(decks))
	}

	render() {
		const { decks } = this.props
		
		return (
			<View style={styles.container} >
			{Object.keys(decks).map( (deck) => {
				const { questions, title } = decks[deck];
				return (
					<TouchableOpacity style={styles.item} key={deck}
					onPress={() => {this.props.navigation.navigate(
						'IndividualDeckView', {inputId: deck}

					)}}>
					<Text style={styles.fontText} >{title} </Text>
					<Text>{questions.length} </Text>
					<TextButton style={{padding: 10}} onPress={() => this.props.navigation.navigate(
						'IndividualDeckView', {inputId: deck}
					)} >

					</TextButton>
					</TouchableOpacity>
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
	},
	item: {
		backgroundColor: white,
		borderRadius: Platform.OS === 'ios' ? 16 : 2,
		padding: 10,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 5,
		height: 200,
		width: 180,
		justifyContent: 'center',
		shadowRadius: 3,
		shadowOpacity: 0.8,
		shadowColor: 'rgba(0,0,0,0.24)',
		shadowOffset: {
			width: 0,
			height: 3,
		}
	},
	fontText:{
		fontSize: 20,

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
	return {
		decks
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Decklist)