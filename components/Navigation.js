import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator,} from 'react-navigation-stack';
import { ChatStack, LoginStack, SettingsStack } from './SubStacks'
import { Navigation } from 'react-navigation';


// Import the screens
import DrawerNav from './DrawerNav/DrawerNav';
import Profile from './Profile/Profile';
import NewsFeed from './NewsFeed/NewsFeed';


import Search from './Search/Search';


export const DrawerNavigator = createDrawerNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        header: false,
      },
    },
    NewsFeed: {
      screen: NewsFeed,
      navigationOptions: {
        header: false,
        gesturesEnabled: false,
      }
    },
    Chat: ChatStack,
    Settings: SettingsStack,
  },
  {
    contentComponent: DrawerNav,
  }
);


export const mainNavigator = createStackNavigator({
    Home: {
    screen: DrawerNavigator,
    navigationOptions: {
      header: null,
      headerLeft: null,
      gesturesEnabled: false,
    },
  },
  LoginProcess: { screen: LoginStack },
   Search: {
      screen: Search,
      navigationOptions: {
        header: null,
      },
  },
});
