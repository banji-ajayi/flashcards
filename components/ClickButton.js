import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { white } from '../utils/color';

export default function ClickButton ({onPress, style={}, text}) {
	return (
		<TouchableOpacity onPress={onPress} style={style}>
			<Text style={styles.reset}>{text}</Text>
		</TouchableOpacity>
	)
}


const styles = StyleSheet.create({
	reset: {
		color: white,
		fontSize:21
	}
})