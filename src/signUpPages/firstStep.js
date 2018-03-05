// react libraries
import React from 'react';

// react-native libraries
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

// third-party libraries
// import { FormLabel, FormInput } from 'react-native-elements'


class firstStep extends React.Component {
  state= {
    userToken: '',
  };

  /**
   * componentDidMount
   *
   * React life-cycle method sets user token
   * @return {void}
   */
  componentDidMount() {

  }

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        {/*<FormLabel >Email</FormLabel>*/}
        {/*<FormInput />*/}
        {/*<FormLabel >Password</FormLabel>*/}
        {/*<FormInput />*/}
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

export { firstStep };
