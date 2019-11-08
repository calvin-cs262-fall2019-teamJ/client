import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { ChatStack, LoginStack, SettingsStack } from './SubStacks';
import { Navigation } from 'react-navigation';

// Import the screens
import DrawerNav from './DrawerNav/DrawerNav';
import Profile from './Profile/Profile';
import NewsFeed from './NewsFeed/NewsFeed';

import Search from './Search/Search';

export const DrawerNavigator = createDrawerNavigator(
  {
    NewsFeed: {
      screen: NewsFeed,
      navigationOptions: {
        header: false,
        gesturesEnabled: false,
      },
    },
    Chat: ChatStack,
    Settings: SettingsStack,
    Profile: {
      screen: Profile,
      navigationOptions: {
        header: false,
    },
    },
  },
  {
    contentComponent: DrawerNav,
  }
);

export const mainNavigator = createStackNavigator({
  LoginProcess: { screen: LoginStack },
  Home: {
    screen: DrawerNavigator,
    navigationOptions: {
      header: null,
      headerLeft: null,
      gesturesEnabled: false,
    },
  },
  Search: {
    screen: Search,
    navigationOptions: {
      header: null,
    },
  },
});
