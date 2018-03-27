import  React from 'React';
import { Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import  { lightPurp }  from '../utils/color';


export default function TextButton ({children, onPress, style={}}) {
	return (
		<TouchableOpacity onPress={onPress}>
		<Text style={[styles.reset, style]}>{title='Deck View'}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	reset: {
		color: lightPurp
	}
})