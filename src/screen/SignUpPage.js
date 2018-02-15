// react libraries
import React from 'react';

// react-native libraries
import { StyleSheet, Text, View } from 'react-native';

class SignUpPage extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>SignUp Page</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export { SignUpPage };