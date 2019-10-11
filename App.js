// Import the screens
import SignIn from './components/SignIn/SignIn';
 import SignUp from './components/SignUp/SignUp';
 import Profile from './components/Profile/Profile'
 import ChatDM from './components/ChatDM/ChatDM'
 import ChatHome from './components/ChatHome/ChatHome';
 import NewsFeed from './components/NewsFeed/NewsFeed';

// Import React Navigation
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import { ApplicationProvider, Layout, Text } from 'react-native-ui-kitten';
import React from 'react';
import { mapping, light as lightTheme, dark as darkTheme } from '@eva-design/eva';

// Create the navigator
const navigator = createStackNavigator({
  SignUp: { screen: SignUp },
  SignIn: { screen: SignIn },
  Profile: {screen: Profile},
  ChatDM: { screen: ChatDM},
  // ChatHome: {screen: ChatHome},
  // NewsFeed: {screen: NewsFeed},
});


// create a container to hold the navigator
const ApplicationContent = createAppContainer(navigator);

//set up to allow UI kitten components
const App = () => (
  <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <ApplicationContent />
  </ApplicationProvider>
);
// Export it as the root component
export default App;