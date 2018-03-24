import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import NewDeck from './components/NewDeck';
import DeckList from './components/DeckList';
import { lightPurp, white, purple } from './utils/color'
import { TabNavigator, StackNavigator } from 'react-navigation';
import { MaterialCommunityIcons, FontAwesome, Entypo } from '@expo/vector-icons';
import { Constants } from 'expo'
import IndividualDeckView  from './components/IndividualDeckView';
import { createStore } from 'redux'
import reducer from './reducers/index'
import { Provider } from 'react-redux'


function FlashCardStatusBar ({ backgroundColor, ...props}) {
	return (
		<View style={{ backgroundColor, height: Constants.statusBarHeight}}>
			<StatusBar translucent backgroundColor= {backgroundColor} {...props} />
		</View>
	)
}


const Tabs = TabNavigator ({  //first argument to tab navigator
	DeckList: {
		screen: DeckList,
		navigationOptions: {
			tabBarlabel: 'DeckList',
			tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name ='cards' size={30} color={tintColor}/>
		}
	},

	NewDeck: {
		screen: NewDeck,
		navigationOptions: {
			tabBarlabel: 'NewDeck',
			tabBarIcon: ({ tintColor }) => <Entypo name ='plus' size={30} color={tintColor}/>
		}
	} 
}, { //2nd argument to tab Navigator
	// tabBarPosition: {
	// activeTintColor: lightPurp,
	// style : {
	// 	height: 55,
	// 	backgroundColor: white
	// }
	// }
	tabBarOptions: {
		activeTintColor: Platform.OS === 'ios' ? lightPurp : white,
		style: {
			height: 56,
			backgroundColor: Platform.OS === 'ios' ? white : lightPurp,
			shadowColor: 'rgba(0,0,0,0.24)',
			shadowOffset: {
				width: 0,
				height: 3
			},
			shadowRadius: 6,
			shadowOpacity: 1
		}
	}


})

const MainNavigator = StackNavigator({
	Home: {
		screen: Tabs,
		navigationOptions: {
			header: null
		}
	},
	IndividualDeckView: {
		screen: IndividualDeckView,
		navigationOptions: {
			title: 'Deck Detail',
			headerTintColor: white,
			headerStyle: {
				backgroundColor: lightPurp
			}
		}
	}
})

export default class App extends React.Component {
  render() {
    return (
	<Provider store={createStore(reducer)}>
	  <View style={{flex:1}}>
	  <FlashCardStatusBar backgroundColor={lightPurp} barStyle='light-content'/>
        <MainNavigator/>
	  </View>
	  </Provider>
    );
  }
}
