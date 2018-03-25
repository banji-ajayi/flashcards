import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { white } from '../utils/color'

// export default function ClickButton ({onPress, styles, text}) {
// 	return (
// 		<TouchableOpacity onPress={onPress}>
// 			<Text style={styles}>{text}</Text>
// 		</TouchableOpacity>
// 	)
// }


export default function ToggleButton ({children, style = {} }) {
	return (
		<TouchableOpacity>
		<Text style={[styles.reset, style]}>{children}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	reset: {
		textAlign: 'center',
		color: white
	}
})
