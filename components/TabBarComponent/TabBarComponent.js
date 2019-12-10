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
import * as ThemeStyles from '../ThemeConstants';
const TabBarComponent = ({ navigation }) => {
  
  this.state = {
    background: ThemeStyles.CalvinBlue
  }

  const changeColor = (colorName) =>{
    let stringColor = ThemeStyles.CalvinBlue

    if (colorName == "marron" || colorName == 0){
      stringColor = ThemeStyles.CalvinMaroon
    }
    
    else if (colorName == "red" || colorName == 1) {
      stringColor = ThemeStyles.CalvinRed
    }
    
    else if (colorName == "blue" || colorName == 2) {
      stringColor = ThemeStyles.CalvinBlue
    }

    else if (colorName == "yellow" || colorName == 3) {
      stringColor = ThemeStyles.CalvinYellow
    }
    else if (colorName == "white") {
      stringColor = ThemeStyles.CalvinWhite
    }
    this.setState({
      background: stringColor
    })
  }
  const onSelect = (index) => {
    const selectedTabRoute = navigation.state.routes[index];
    navigation.navigate(selectedTabRoute.routeName);

  };

  return (
    <Layout>
      <BottomNavigation selectedIndex={navigation.state.index} onSelect={onSelect}
      style={{ backgroundColor: ThemeStyles.CalvinBlue}} 
      indicatorStyle={{ backgroundColor: 'white'}}>
        <BottomNavigationTab icon={PersonIcon}/>
        <BottomNavigationTab icon={MentorIcon}/>
        <BottomNavigationTab icon={NewsIcon}/>
        <BottomNavigationTab icon={MessageIcon}/>
        <BottomNavigationTab icon={SettingsIcon}/>
      </BottomNavigation>
    </Layout>
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
