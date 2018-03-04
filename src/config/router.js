// react library
import React from 'react';

// third-party libraries
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

// containers
import { MoovHomepage, AskHomepage, WalletHomepage, ProfileHomepage } from '../containers';

export const MooveHome = StackNavigator({
  MoovHomePage: {
    screen: MoovHomepage,
    navigationOptions: {
      header: null,
    },
  },
}, {
  navigationOptions: {
    header: 'screen',
  },
});

export const WalletHome = StackNavigator({
  WalletHomePage: {
    screen: WalletHomepage,
    navigationOptions: {
      header: null,
    }
  },
}, {
  navigationOptions: {
    header: 'screen',
  },
});

export const AskHome = StackNavigator({
  AskHomepage: {
    screen: AskHomepage,
    navigationOptions: {
      header: null,
    }
  },
  // ChatScreen: {
  //   screen: ChatScreen,
  //   navigationOptions: {
  //     header: null,
  //   }
  // },
}, {
  navigationOptions: {
    header: 'screen',
  },
});

export const ProfileHome = StackNavigator({
  ProfileHomepage: {
    screen: ProfileHomepage,
    navigationOptions: {
      header: null,
    }
  },
  // BasicInformation: {
  // 	screen: BasicInformation,
  // 	navigationOptions: {
  // 		header: null,
  // 	}
  // },
  // NotificationsPage: {
  // 	screen: NotificationsPage,
  // 	navigationOptions: {
  // 		header: null,
  // 	}
  // },
  // TransactionsPage: {
  // 	screen: TransactionsPage,
  // 	navigationOptions: {
  // 		header: null,
  // 	}
  // }
}, {
  navigationOptions: {
    // header: '',
  },
});


export const Tabs = TabNavigator({
  Moov: {
  	screen: MooveHome,
  	navigationOptions: {
  		tabBarLabel: 'MOOV',
  		color: 'white',
  		style: {
  			color: '#004a80',
  		},
  		tabBarIcon: ({ focused }) => (
  		  focused
        ? <Icon name="ios-car-outline" type="ionicon" color="#004a80" />
          : <Icon name="ios-car-outline" type="ionicon" color="white" />
      ),
  		// tabBarIcon: <Icon name="ios-car-outline" type="ionicon" color="white" />,
  	},
  },
  Wallet: {
  	screen: WalletHome,
  	navigationOptions: {
  		tabBarLabel: 'Wallet',
      tabBarIcon: ({ focused }) => (
        focused
          ? <Icon name="credit-card-plus" type="material-community" color="#004a80" />
          : <Icon name="credit-card-plus" type="material-community" color="white" />
      ),
  		// tabBarIcon: <Icon name="credit-card-plus" type="material-community" color="white" />,
  	},
  },
  AskUs: {
    screen: AskHome,
    navigationOptions: {
      tabBarLabel: 'Ask Us',
      tabBarIcon: ({ focused }) => (
        focused
          ? <Icon name="help" type="entypo" color="#004a80" />
          : <Icon name="help" type="entypo" color="white" />
      ),
      // tabBarIcon: <Icon name="help" type="entypo" color="white" />,
    },
  },
  Profile: {
    screen: ProfileHome,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ focused }) => (
        focused
          ? <Icon name="user-circle" type="font-awesome" color="#004a80" />
          : <Icon name="user-circle" type="font-awesome" color="white" />
      ),
      // tabBarIcon: <Icon name="user-circle" type="font-awesome" color="white" />,
    },
    style: {
      color: 'green',
    },
  },
}, {
  // tabBarPosition: 'top',
  // tabBarOptions: {
  //   style: {
  //     backgroundColor: '#E8E8E8',
  //     padding: 2,
  //     // marginTop: STATUS_BAR_HEIGHT
  //   },
  //   indicatorStyle: {
  //     borderBottomColor: '#ffffff',
  //     borderBottomWidth: 3,
  //   },
  //   tabStyle: {
  //     // borderRightColor: '#004a80',
  //     // borderRightWidth: 1,
  //   },
  //   activeTintColor: '#5EB5A9',
  // },
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor:'#004a80',
    inactiveTintColor:'white',
    style:{
      backgroundColor:'grey',
      borderTopWidth:1,
      borderTopColor:'#D3D3D3'
    },
    tabBarSelectedItemStyle: {
      borderBottomWidth: 2,
      borderBottomColor: 'red',
    },
  },
});
