// react libraries
import React from 'react';

// react-native libraries
import {
  StyleSheet,
  View,
  AsyncStorage,
  Dimensions,
  Platform,
  ImageBackground,
  TouchableOpacity,
  Keyboard
} from 'react-native';

// third-party libraries
import { Avatar, Card, ListItem } from 'react-native-elements'

// common
import { StatusBarComponent } from "../common";
import * as axios from "axios/index";

class ProfileHomepage extends React.Component {
  state= {
    userToken: '',
    firstName: '',
    lastName: '',
    email: '',
    image_url: '',
    user_type: '',
    stdId: ''
  };

  /**
   * componentDidMount
   *
   * React life-cycle method sets user token
   * @return {void}
   */
  componentWillMount() {
    AsyncStorage.getItem("token").then((value) => {
      this.setState({ userToken: value });
      this.getUser(value);
    }).done();
    Keyboard.dismiss()
  }

  componentDidMount() {
    Keyboard.dismiss();
  }

  /**
   * getUser
   *
   * Retrives user basic information
   * @return {void}
   */
  getUser = (token) => {
    console.log(token);
    axios.get('https://moov-backend-staging.herokuapp.com/api/v1/basic_info', {
      headers: {
        'Authorization': `Bearer ${token}`
        // 'Authorization': `Bearer ${token}`
      },
    })
      .then((response) => {
        console.log(response);
        this.setState({
          email: response.data.data.basic_info.email,
          firstName: response.data.data.basic_info.firstname,
          lastName: response.data.data.basic_info.lastname,
          image_url: response.data.data.basic_info.image_url,
          stdId: response.data.data.basic_info.id,
          user_type: response.data.data.basic_info.id.user_type,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {
    Keyboard.dismiss();
    let { height, width } = Dimensions.get('window');
    let name = 'Loading.........';
    let image = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973461_1280.png'

    if(this.state.firstName !== ''){
      name =
        `${this.state.firstName.charAt(0).toUpperCase() + this.state.firstName.slice(1)} ${this.state.lastName.charAt(0).toUpperCase() + this.state.lastName.slice(1)}`
    }

    if(this.state.image_url !== '') {
      image = `${this.state.image_url}`
    }

    return (
      <View style={styles.container}>
        <StatusBarComponent style={{ height: (Platform.OS === 'ios') ? 60 : 0 }} />
        <View>
          <View style={{ height: height / 2.5, backgroundColor: '#004a80', marginTop: (Platform.OS === 'ios') ? 20 : 0 }}>
            <ImageBackground
              style={{width: width, height: '100%'}}
              blurRadius={2}
              opacity={0.9}
              source={{uri: `${image}` }}
            >
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Avatar
                  xlarge
                  rounded
                  source={{uri: `${image}`}}
                  onPress={() => console.log("Works!")}
                  activeOpacity={0.7}
                />
              </View>
            </ImageBackground>
          </View>
          <View style={{ height: height / 2.5 }}>
            <Card title={name}>
              <Card containerStyle={{padding: 0}} >
                <TouchableOpacity
                  onPress={() => {
                    const { navigate } = this.props.navigation;
                    navigate('BasicInformation');
                  }}
                >
                  <ListItem
                    roundAvatar
                    title='Basic Information'
                    // avatar='https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
                  />
                </TouchableOpacity>
              </Card>
              <Card containerStyle={{padding: 0}} >
                <TouchableOpacity
                  onPress={() => {
                    const { navigate } = this.props.navigation;
                    navigate('NotificationsPage');
                  }}
                >
                  <ListItem
                    roundAvatar
                    title='Notifications'
                    // avatar='https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
                  />
                </TouchableOpacity>
              </Card>
              <Card containerStyle={{padding: 0}} >
                <TouchableOpacity
                  onPress={() => {
                    const { navigate } = this.props.navigation;
                    navigate('TransactionsPage');
                  }}
                >
                  <ListItem
                    roundAvatar
                    title='Transaction Details'
                    // avatar='https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
                  />
                </TouchableOpacity>
              </Card>
            </Card>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
});

export { ProfileHomepage };
