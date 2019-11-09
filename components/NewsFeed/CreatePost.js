import React from 'react';
import {
  Button,
  Icon,
  List,
  ListItem,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from 'react-native-ui-kitten';
import {
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import PostCard from './PostCard';
import { LinearGradient } from 'expo-linear-gradient';
import * as RNFS from 'react-native-filesystem';

class CreatePost extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      userID: 'userIDPlaceHolder',
      textInput: '',
      scope: 'Department',
      tags: {},
      annonymous: true,
    };
  }

  profilePress = () => {
    this.props.navigation.navigate('Profile');
  };

  textPress = paramsVal => {
    this.props.navigation.navigate('PostView', { paramsVal });
  };

  OpenMenu = () => (
    <TopNavigationAction
      onPress={() => this.props.navigation.toggleDrawer()}
      icon={this.back}
    />
  );

  back = style => <Icon {...style} name="arrow-ios-back-outline" />;

  AddConversation = () => (
    <TopNavigationAction
      onPress={() => this.props.navigation.navigate('Search')}
      icon={this.SearchIcon}
    />
  );

  SearchIcon = style => <Icon {...style} name="settings-2-outline" />;

  topNavigation = () => {
    return (
      <View>
        <View
          style={{
            height: Constants.statusBarHeight,
            backgroundColor: 'white',
          }}
        />
        <TopNavigation
          title="New Post"
          alignment="center"
          leftControl={this.OpenMenu()}
          rightControls={this.AddConversation()}
          hear
        />
      </View>
    );
  };

  annonymousLabel = () => {
    return (
      <Text
        style={{
          paddingLeft: 10,
          fontSize: 12,
          fontWeight: 'bold',
          color: '#00F500',
        }}>
        Anonymous
      </Text>
    );
  };

  publicLabel = () => {
    return (
      <Text
        style={{
          paddingLeft: 10,
          fontSize: 12,
          fontWeight: 'bold',
          color: '#EB350D',
        }}>
        Public
      </Text>
    );
  };

  mainHeader = () => {
    return (
      <View>
        <Text style={styles.scopeStyle}>Your {this.state.scope}</Text>
        {this.state.annonymous ? this.annonymousLabel() : this.publicLabel()}
      </View>
    );
  };

  inputText = () => {
    return (
      <View style={styles.textCard}>
        <Text
          style={{
            opacity: 1,
            fontSize: 23,
            paddingTop: 15,
            fontWeight: 'bold',
            color: 'black',
            paddingLeft: 10,
          }}>
          Your Text
        </Text>
        <View
          style={{
            marginTop: 5,
            backgroundColor: '#DEDEDE',
            minWidth: Dimensions.get('window').width * 0.97,
            opacity: 0.8,
            marginBottom: 30
          }}>
          <TextInput
            textAlignVertical="Top"
            style={{ 
              marginTop: 5,
              marginLeft: 10,
              marginBottom: 30,
              backgroundColor: '#DEDEDE',
              alighnSelf: 'center',
              minHeight: '30%',
              opacity: 0.8,
              width: Dimensions.get('window').width - 30,
            }}
            placeholderTextColor = "black"
            placeholder = "Say something!"
            multiline={true}
          />
        </View>
      </View>
    );
  };
  /* Renders the component*/
  render() {
    return (
      <View style={styles.container}>
        {this.topNavigation()}
        <LinearGradient colors={['#FFFFFF', '#FFB7A8']} style={styles.mainView}>
          {this.mainHeader()}

          {this.inputText()}
        </LinearGradient>
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: 'black',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: 'flex-start',
  },
  scopeStyle: {
    paddingLeft: 10,
    paddingTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  annonymityTextStyle: {
    paddingLeft: 10,
    fontSize: 12,
    fontWeight: 'bold',
  },
  mainView: {
    height: Dimensions.get('window').height,
    borderTopColor: 'grey',
  },
  textCard: {
    marginTop: 10,
    width: Dimensions.get('window').width * 0.97,
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: '#EEEEEE',
    opacity: 0.8,
  },
};
export default CreatePost;
