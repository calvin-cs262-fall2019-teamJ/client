import React from 'react';
import { SafeAreaView, withNavigation, StackNavigator } from 'react-navigation';
import {
  Drawer,
  DrawerHeaderFooter,
  Layout,
  Icon,
  TopNavigation,
  TopNavigationAction,
} from 'react-native-ui-kitten';
import { goToProfile } from '../Navigation';

class DrawerNav extends React.Component {
  constructor(props) {
    super(props);
    
    //renders all but the 'Profile' page in the drawer (we can still navigate to it)
    this.drawerData = props.items.slice(0,5).map(this.createDrawerItem); 
  }

  ProfileIcon = style => (
    <Icon
      {...style}
      name="person"
      onPress={() => {
        this.props.navigation.navigate('Profile');
      }}
    />
  );

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
      icon={this.ProfileIcon}
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
  SettingsStack;
}

export default withNavigation(DrawerNav);
