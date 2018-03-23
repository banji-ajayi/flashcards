import  React, { Component } from 'React';
import { getDecks } from '../utils/api';
import { StyleSheet, Text, View } from 'react-native';

export default class IndividualDeckView extends Component {
	render() {
		const deck = this.props.navigation.state.params.inputId;
		const decks = getDecks();
		//console.log(deck);
		return(
			<View style={styles.container}>
			<Text>{decks[deck].title}</Text>
			<Text>{decks[deck].questions.length}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})