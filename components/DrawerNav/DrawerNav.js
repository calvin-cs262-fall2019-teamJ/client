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
import {goToProfile} from '../Navigation'

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
  }
  SettingsStack;
}

const ProfileIcon = style => (
  <Icon
    {...style}
    name="person"
    onPress={() => goToProfile()}
  />
);

export default withNavigation(DrawerNav);
