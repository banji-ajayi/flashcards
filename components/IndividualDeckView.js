import  React, { Component } from 'React';
import { getDecks } from '../utils/api';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import ClickButton from './ClickButton';
import { white, lightPurp, purple, pink} from '../utils/color';

export class IndividualDeckView extends Component {
	render() {
		const deck = this.props.navigation.state.params.inputId;
		const { decks } = this.props;
		return(
			<View style={styles.container}>
			<Text>{decks[deck].title}</Text>
			<Text>{decks[deck].questions.length}</Text>
			
			<ClickButton style={[styles.clkBtn, {backgroundColor:purple}]}  text={'Add  Card'} 
			onPress={ () => this.props.navigation.navigate('AddCard', {inputId: deck})}/>

			<ClickButton style={[styles.clkBtn, {backgroundColor:pink}]} text={'Start Quiz'} 
			onPress={ () => this.props.navigation.navigate('Quiz', {inputId: deck})}/>

			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex:1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	clkBtn: {	
		padding: 10,
		paddingLeft: 20,
		paddingRight: 6,
		borderRadius: 7,
		height: 44,
		alignSelf: 'flex-end',
		marginRight: 110,

		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10

	},
	addBtnText: {
		color: white,
		fontSize: 21,
		textAlign: 'center'
	}
	
})

function mapStateToProps (decks){
	return {
		decks
	}
}

export default connect(mapStateToProps)(IndividualDeckView)