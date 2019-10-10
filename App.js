// Import the screens
import SignIn from './components/SignIn/SignIn';
// import SignUp from './components/SignUp/SignUp';
// import Profile from './components/Profile/Profile'
// import ChatDM from './components/ChatDM/ChatDM'
// import ChatMessage from './components/ChatMessage/ChatMessage';
// import NewsFeed from './components/NewsFeed/NewsFeed';
// import Initialzizing from './components/Initialzizing'
// Import React Navigation
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
// Create the navigator
const navigator = createStackNavigator({
  SignIn: { screen: SignIn },
  // SignUp: { screen: SignUp },
  // Profile: {screen: Profile},
  // ChatDM: { screen: ChatDM},
  // ChatMessage: {screen: ChatMessage},
  // NewsFeed: {screen: NewsFeed},
  // Initialzizing: {screen: Initialzizing},
});

// create a container to hold the navigator
const App = createAppContainer(navigator);

// Export it as the root component
export default App;