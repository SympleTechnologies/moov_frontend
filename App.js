// react libraries
import React from 'react';

// third-libraries
import { StackNavigator } from 'react-navigation';

// screens
import { LandingPage, SignUpPage, LoginPage, MoovPages } from './src/screen';

export default MainStack = StackNavigator({
	// LandingPage: {
	// 	screen: LandingPage,
	// 	navigationOptions: {
	// 		header: null,
	// 	}
	// },
	// SignUpPage: {
	// 	screen: SignUpPage,
	// 	navigationOptions: {
	// 		header: null,
	// 	}
	// },
	LoginPage: {
		screen: LoginPage,
		navigationOptions: {
			header: null,
		}
	},
	MoovPages: {
		screen: MoovPages,
		navigationOptions: {
			header: null,
		}
	},
}, {
	navigationOptions: {
		header: 'screen',
	}
});