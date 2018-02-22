// react libraries
import React from 'react';

// react-native libraries
import { StyleSheet, View, ActivityIndicator, AsyncStorage } from 'react-native';

// third-party libraries
import firebase from "firebase";
import { NavigationActions } from 'react-navigation';
import * as axios from 'axios';

// component
import { LoginForm } from "../component";

// commom
import { StatusBarComponent, HeaderComponent } from "../common";

class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			errorMessage: '',
			loading: false
		};
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
	 * signInOnServer
	 *
	 * signs user in on our web server
	 * @return {void}
	 */
	signInOnServer  = () => {
		axios.post('https://moov-backend-staging.herokuapp.com/api/v1/login',
			{
				"email": this.state.email,
			}
		)
			.then((response) => {
				this.signInSuccess(response);
			})
			.catch((error) => {
				this.setState({ loading: !this.state.loading, errorMessage: error.response.data.data.message })
			});
	};
	
	/**
	 * onLoginSuccess
	 *
	 * Navigates user to MoovPage
	 * @return {void}
	 */
	signInSuccess (response) {
		const { navigate } = this.props.navigation;
		AsyncStorage.setItem("token", response.data.data.token);
		this.setState({ loading: !this.state.loading });
		navigate('MoovPages');
	};

    /**
     * onSubmit
     *
     * Submits form to firebase database
     * @return {void}
     */
    onSubmit = () => {
        if(this.validateFields()) {
            this.setState({ errorMessage: '' })
            this.setState({ loading: !this.state.loading, errorMessage: '' });
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(this.signInOnServer)
                .catch((error) => {
                    this.setState({ errorMessage: error.message, loading: !this.state.loading })
                });
        }

    };
	
	/**
	 * validateFields
	 *
	 * validates user input fields
	 * @return {boolean}
	 */
	validateFields = () => {
		var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		
		if ( this.state.email === '') {
			this.setState({ errorMessage: 'Email field cannot be empty' })
		} else if(this.state.email.match(pattern) === null) {
			this.setState({ errorMessage: 'Email address is badly formatted' })
		} else if ( this.state.password === '' ) {
			this.setState({ errorMessage: 'Password field cannot be empty' })
		} else if(this.state.password.length < 6) {
			this.setState({ errorMessage: 'Password cannot be less than 6 characters' })
		} else {
			return true
		}
		
	};
	
	render() {
		const { container, activityIndicator } = styles;
		const resetAction = NavigationActions.reset({
			index: 0,
			actions: [
				NavigationActions.navigate({routeName: 'LandingPage'})
			]
		});
		
		// ACTIVITY INDICATOR
		if (this.state.loading) {
			return (
				<View style={{flex: 1}}>
					<StatusBarComponent />
					<ActivityIndicator
						color = '#004a80'
						size = "large"
						style={activityIndicator}
					/>
				</View>
			);
		}
		
		return (
			<View>
				<StatusBarComponent />
				<HeaderComponent
					headerText='Existing User'
					backgroundColor='#004a80'
					leftIconColor='#fff'
					rightIconColor='#fff'
					centerTextColor='#fff'
					onLeftPress={() => { this.props.navigation.dispatch(resetAction); }}
					onRightPress={() => { const { navigate } = this.props.navigation; navigate('SignUpPage'); }}
					iconName ='md-person-add'
					iconType ='ionicon'
				/>
				<View style={container}>
					<LoginForm
						emailValue={this.state.email}
						errorMessage={this.state.errorMessage}
						onChangeEmailText={email => this.setState({ email })}
						passwordValue={this.state.password}
						onChangePasswordText={password => this.setState({ password })}
						onSubmit={() => this.onSubmit()}
						buttonIconName='login'
						buttonIconType='entypo'
						buttonText='Login'
						requester='Login'
					/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		backgroundColor: '#fff',
		paddingTop: '5%'
	},
	activityIndicator: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: 200
	},
});

export { LoginPage };
