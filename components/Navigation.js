import React from 'react';
import {
  SafeAreaView,
  createAppContainer,
  withNavigation,
  StackNavigator
} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator,} from 'react-navigation-stack';
import { ChatStack, LoginStack, SettingsStack } from './SubStacks'
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
import NewsFeed from './NewsFeed/NewsFeed';


import Search from './Search/Search';

const ProfileIcon = style => (
  <Icon
    {...style}
    name="person"
    onPress={() => this.props.navigation.navigate('Profile')}
  />
);

class DrawerNav extends React.Component {
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
      title="Keith VanderLinden"
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
  }SettingsStack
}

export default withNavigation(DrawerNav);


export const DrawerNavigator = createDrawerNavigator(
  {
    NewsFeed: {
      screen: NewsFeed,
      navigationOptions: {
        header: false,
        gesturesEnabled: false,
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        header: false,
    },
  },
    Chat: ChatStack,
    Settings: SettingsStack,
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
