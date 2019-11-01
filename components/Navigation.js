import React from 'react';
import { SafeAreaView, createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import {
  Drawer,
  DrawerHeaderFooter,
  Layout,
  Icon,
  TopNavigation,
  TopNavigationAction,
} from 'react-native-ui-kitten';
// Import the screens
import Profile from './Profile/Profile';
import ChatDM from './ChatDM/ChatDM';
import ChatHome from './ChatHome/ChatHome';
import NewsFeed from './NewsFeed/NewsFeed';

import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import Search from './Search/Search'

const ProfileIcon = style => (
  <Icon {...style} name="person" onPress={() => this.props.navigation.navigate('Profile')} />
);

export class DrawerNav extends React.Component {
  constructor(props) {
    super(props);
    this.drawerData = props.items.map(this.createDrawerItem);
  }

  onRouteSelect = index => {
    const { [index]: route } = this.drawerData;
    this.props.navigation.navigate(route.title);
  };

  createDrawerItem = ({ routeName }) => ({
    title: routeName,
  });

  renderHeader = () => (
    <DrawerHeaderFooter
      title="John Doe"
      description="React Native Developer"
      icon={ProfileIcon}
    />
  );

  render() {
    return (
      <SafeAreaView>
        <Drawer
          data={this.drawerData}
          onSelect={this.onRouteSelect}
          header={this.renderHeader}
        />
      </SafeAreaView>
    );
  }
}

export const DrawerNavigator = createDrawerNavigator({
    NewsFeed: {
      screen: NewsFeed,
      navigationOptions: {
        header: false,
      },
      },
    Chat: ChatHome,
  },
  {
    contentComponent: DrawerNav,
  });

// Create the navigator
const LoginNavigator = createStackNavigator({
  //SignUp: { screen: SignUp },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: null,
      headerLeft: null,
    },
  },
});

export const ChatNavigator = createStackNavigator({
  ChatHome: {
    screen: ChatHome,
    navigationOptions: {
      drawerLabel: () => null 
    },
  },
  ChatDM: {
    screen: ChatDM,
    navigationOptions: {
      drawerLabel: () => null 
    },
  },
});

export const mainNavigator = createStackNavigator({
  LoginProcess: { screen: LoginNavigator },
  Home: { 
    screen: DrawerNavigator,
    navigationOptions: {
      header: null,
      headerLeft: null,
    },
    },
  Profile: { screen: Profile },
});
