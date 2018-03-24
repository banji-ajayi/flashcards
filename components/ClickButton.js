import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default function ClickButton ({onPress, styles, text, color}) {
	return (
		<TouchableOpacity onPress={onPress} style={[styles, {backgroungColor: color}]}>
			<Text style={styles}>{text}</Text>
		</TouchableOpacity>
	)
}



