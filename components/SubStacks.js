import ChatDM from './ChatDM/ChatDM';
import ChatHome from './ChatHome/ChatHome';

import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

import Settings from './Settings/Settings';
import Account from './Settings/Account';
import Profile from './Profile/Profile';
import { createStackNavigator } from 'react-navigation-stack';

export const ChatStack = createStackNavigator({
  ChatHome: {
    screen: ChatHome,
    navigationOptions: {
      header: null,
      headerLeft: null,
    },
  },
  ChatDM: {
    screen: ChatDM,
    navigationOptions: {
      header: null,
      headerLeft: null,
    },
  },
});

export const LoginStack = createStackNavigator({
   SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: null,
      headerLeft: null,
    },
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: null,
      headerLeft: null,
    },
  },
});

export const SettingsStack = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      header: null,
      headerLeft: null,
    },
  },
  Account: {
    screen: Account,
    navigationOptions: {
      header: null,
      headerLeft: null,
    },
  },
});
