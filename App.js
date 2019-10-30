// Import the screens
import {DrawerNavigator} from './components/DrawerNav/DrawerNav';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Profile from './components/Profile/Profile';
import Objective from './components/Profile/Objective';
import Experience from './components/Profile/Experience';
import Projects from './components/Profile/Projects';
import Activities from './components/Profile/Activities';
import ChatDM from './components/ChatDM/ChatDM';
import ChatHome from './components/ChatHome/ChatHome';
import NewsFeed from './components/NewsFeed/NewsFeed';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import 'react-native-svg';

// Import React Navigation
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { ApplicationProvider, IconRegistry, Layout, Text } from 'react-native-ui-kitten';
import React from 'react';
import {
  mapping,
  light as lightTheme,
  dark as darkTheme,
} from '@eva-design/eva';

// Create the navigator
const navigator = createStackNavigator({
  //SignUp: { screen: SignUp },
  //SignIn: { screen: SignIn },
  Profile: {screen: Profile},
  Objective: {screen: Objective},
  // Projects: {screen: Projects},
  // Activities: {screen: Activities},
 // DrawerNav:{screen: DrawerNavigator },
  ChatHome: {
    screen: ChatHome,
    navigationOptions:  {
      header: null,
      headerLeft: null
    }
    },
  NewsFeed: {screen: NewsFeed},
  ChatDM: { 
    screen: ChatDM,
    navigationOptions:  {
      header: null,
      headerLeft: null
    } 
},
});

// create a container to hold the navigator
const ApplicationContent = createAppContainer(navigator);

//set up to allow UI kitten components
const App = () => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <ApplicationContent />
    </ApplicationProvider>
  </React.Fragment>
);
// Export it as the root component
export default App;
