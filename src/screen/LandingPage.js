// react libraries
import React from 'react';

// react-native libraries
import { StyleSheet, Text, View, Dimensions, Animated, TouchableOpacity } from 'react-native';

// commom
import { StatusBarComponent } from "../common";

// third-party librariesß
import firebase from 'firebase';

class LandingPage extends React.Component {
	/**
	 * constructor
	 */
	constructor () {
		super();
		this.springValue = new Animated.Value(0.3);
	}
	
	/**
	 * componentWillMount
	 *
	 * React life-cycle method initialize firebase app
	 * @return {void}
	 */
	componentWillMount() {
		if (firebase.apps.length === 0) {
			firebase.initializeApp({
				apiKey: "AIzaSyD0ZJS7tPUrOWkZEZQRXDLQfLRT2yxhKMM",
				authDomain: "moov-68c37.firebaseapp.com",
				databaseURL: "https://moov-68c37.firebaseio.com",
				projectId: "moov-68c37",
				storageBucket: "moov-68c37.appspot.com",
				messagingSenderId: "1050975255216"
			});
		}
	}
	
	/**
	 * componentDidMount
	 *
	 * React life-cycle method
	 * @return {void}
	 */
	componentDidMount() {
		this.spring();
	}
	
	/**
	 * spring
	 *
	 * Animates app icon
	 * @returns {void}
	 */
	spring = () => {
		this.springValue.setValue(0.1);
		Animated.spring(
			this.springValue,
			{
				toValue: 1,
				friction: 1
			}
		).start()
	};
	
	/**
	 * appNavigation
	 *
	 * @param {string} page - The page the user wants to navigate to
	 * @return {void}
	 */
	appNavigation = (page) => {
		const { navigate } = this.props.navigation;
		
		if (page === 'signup') {
			navigate('firstStep');
			// navigate('SignUpPage');
		}
		
		if (page === 'login') {
			navigate('LoginPage');
		}
	};
	
	render() {
		const { container, landingPageBody, landingPageBodyText, signUpStyle, signInStyle, TextShadowStyle} = styles;
		let { height, width } = Dimensions.get('window');
		
		return (
			<View style={container}>
				<StatusBarComponent />
				<View style={{ alignItems: 'center'}}>
					<TouchableOpacity onPress={this.spring.bind(this)}>
						<Animated.Image
							style={{
								alignItems: 'center',
								height: height / 3.5,
								width: width / 2,
								transform: [{scale: this.springValue}],
								borderRadius: 25
							}}
							source={require('../../assets/appLogo.png')}
						/>
					</TouchableOpacity>
				</View>
				<View style={landingPageBody}>
          <TouchableOpacity onPress={() => this.appNavigation('login')} >
            <Text style={[landingPageBodyText, signInStyle, TextShadowStyle]} hitSlop={{top: 20, left: 20, bottom: 20, right: 20}}>Sign In</Text>
          </TouchableOpacity>
					<TouchableOpacity onPress={() => this.appNavigation('signup')}>
						<Text style={[ signUpStyle]} hitSlop={{top: 20, left: 20, bottom: 20, right: 20}}>New to MOOV? Sign Up Now!</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
		height: Dimensions.get('window').height
	},
	landingPageBody: {
		flexDirection: 'column',
		// justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: '20%',
	},
	landingPageBodyText: {
		color: '#b3b4b4',
		fontSize: 20,
		// borderWidth: 1,
		// borderColor: '#333',
		borderRadius: 15,
		padding: 8,
		overflow: 'hidden',
		width: Dimensions.get('window').width / 3,
	},
  signInStyle: {
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    backgroundColor: 'white',
    textDecorationLine: 'underline',
  },
  TextShadowStyle:
    {
      textAlign: 'center',
      fontSize: 20,
      // textShadowColor: '#ed1768',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 5,

    },
	signUpStyle: {
    textAlign: 'center',
    color: '#333',
    fontSize: 15,
    borderWidth: 1,
    borderColor: 'white',
    overflow: 'hidden',
    height: Dimensions.get('window').height / 10
    // width: Dimensions.get('window').width / 3,
	},
});

export { LandingPage };
