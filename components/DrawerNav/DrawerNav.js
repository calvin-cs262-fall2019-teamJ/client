import React from 'react';
import { SafeAreaView, createAppContainer} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {
  Drawer,
  DrawerHeaderFooter,
  Layout,
  Icon,
} from 'react-native-ui-kitten';
// Import the screens
import Profile from '../Profile/Profile';
import ChatDM from '../ChatDM/ChatDM';
import ChatHome from '../ChatHome/ChatHome';
import NewsFeed from '../NewsFeed/NewsFeed';

const ProfileIcon = (style) => (
  <Icon {...style} name='person'/>
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
    title='John Doe'
    description='React Native Developer'
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

export const DrawerNavigator = createDrawerNavigator(
  {
    //Profile: { screen: Profile },
    Chat: ChatHome,
    NewsFeed: NewsFeed,
  },
  {
    contentComponent: DrawerNav,
  }
);

export const CustomDrawerNav = createAppContainer(DrawerNavigator);

