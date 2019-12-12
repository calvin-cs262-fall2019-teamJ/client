// import the screens
import ChatDM from './ChatDM/ChatDM';
import ChatHome from './ChatHome/ChatHome';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import Settings from './Settings/Settings';
import Profile from './Profile/Profile';
import PostView from './NewsFeed/PostView';
import NewsFeed from './NewsFeed/NewsFeed';
import CreatePost from './NewsFeed/CreatePost';

// import components
import { createStackNavigator } from 'react-navigation-stack';

// going from chathome to chatdm
export const ChatStack = createStackNavigator({
  ChatHome: {
    screen: ChatHome,
    navigationOptions: {
      header: null,
      headerLeft: null,
    },
  },
  ChatDM: {
    screen: ChatDM,
    navigationOptions: {
      header: null,
      headerLeft: null,
    },
  },
});

// going from signup to signin
export const LoginStack = createStackNavigator({
   SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: null,
      headerLeft: null,
    },
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: null,
      headerLeft: null,
    },
  },
});

// going to settings
export const SettingsStack = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      header: null,
      headerLeft: null,
    },
  },
});

// going from newsfeed to createpost and postview
export const NewsFeedStack = createStackNavigator({
  "News Feed": {
      screen: NewsFeed,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
  CreatePost: {
    screen: CreatePost,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
  PostView: {
    screen: PostView,
    navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
  },
});
