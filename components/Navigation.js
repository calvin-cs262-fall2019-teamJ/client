// import components
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { ChatStack, LoginStack, SettingsStack, NewsFeedStack } from './SubStacks';
import { Navigation } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// import the screens
import TabBarComponent from './TabBarComponent/TabBarComponent';
import Profile from './Profile/Profile';
import NewsFeed from './NewsFeed/NewsFeed';
import FindMentor from './FindMentor/FindMentor';
import Search from './Search/Search';

// creating bottom navigation
export const TabNavigator = createBottomTabNavigator(
  {
    Profile: Profile,
    "Find a Mentor": FindMentor,
    "News Feed": NewsFeedStack,
    Chat: ChatStack,
    Settings: SettingsStack,    
  },
  {
    tabBarComponent: TabBarComponent,
  }
);

// creating stack navigation
export const mainNavigator = createStackNavigator({
  LoginProcess: { screen: LoginStack },
  Home: {
    screen: TabNavigator,
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
