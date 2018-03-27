import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { white } from '../utils/color'

export default function ToggleButton({ onPress, styles, text, color }){
	return (
		<TouchableOpacity onPress={onPress}
						  style={[styles.androidSubmitBtn, { backgroundColor: color }]}>
			<Text style={styles.submitBtnText}>{text}</Text>
		</TouchableOpacity>
	)
}



