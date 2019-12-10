import React from 'react';
import { SafeAreaView, withNavigation, StackNavigator } from 'react-navigation';
import { StyleSheet } from 'react-native';
import {
  Drawer,
  DrawerHeaderFooter,
  Layout,
  Icon,
  BottomNavigation,
  BottomNavigationTab,
  TopNavigation,
  TopNavigationAction,
} from 'react-native-ui-kitten';
import { goToProfile } from '../Navigation';

const TabBarComponent = ({ navigation }) => {

  const onSelect = (index) => {
    const selectedTabRoute = navigation.state.routes[index];
    navigation.navigate(selectedTabRoute.routeName);
  };

  return (
    <SafeAreaView>
      <BottomNavigation selectedIndex={navigation.state.index} onSelect={onSelect} 
      style={{ backgroundColor: '#71B1C8'}} 
      indicatorStyle={{ backgroundColor: 'white'}}>
        <BottomNavigationTab icon={PersonIcon}/>
        <BottomNavigationTab icon={MentorIcon}/>
        <BottomNavigationTab icon={NewsIcon}/>
        <BottomNavigationTab icon={MessageIcon}/>
        <BottomNavigationTab icon={SettingsIcon}/>
      </BottomNavigation>
    </SafeAreaView>
  );
};

const PersonIcon = (style) => (
  <Icon fill= 'white' name='person-outline' />
);

const MessageIcon = (style) => (
  <Icon fill= 'white'name='message-square-outline' />
);

const SettingsIcon = (style) => (
  <Icon fill= 'white' name='settings-2-outline' />
);

const MentorIcon = (style) => (
  <Icon fill= 'white' name='people-outline' />
);

const NewsIcon = (style) => (
  <Icon fill= 'white' name='radio-outline' />
);

export default TabBarComponent;
