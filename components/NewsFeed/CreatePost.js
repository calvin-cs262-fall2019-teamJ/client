/**
 * @fileoverview CreatPost.js defines a CreatePost screen that lets the user add
 * a post to the database.
 * 
*/
import * as React from 'react';
import {
  Button,
  CheckBox,
  Icon,
  List,
  ListItem,
  Layout,
  Modal,
  Text,
  Toggle,
  TopNavigation,
  TopNavigationAction,
} from 'react-native-ui-kitten';
import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import { Card } from 'react-native-paper';
import PostCard from './PostCard';
import Fire from '../Fire';

/**
 * A screen that lets the user add a post
 * 
 */
class CreatePost extends React.Component<Props> {
  
  /**
   * Initializes CreatPost and its states
   * @param props properties passed from parent component
   */
  constructor(props) {
    super(props);
    /**
     * states for screen
     */
    this.state = {
      userID: 'userIDPlaceHolder',
      userName: 'Joe Budden',
      textInput: '',
      scope: 'To your department',
      tags: {},
      annonymous: true,
      images: null,
      settingsVisible: false,
      buttonLabel: ['basic', 'basic', 'success'],
      change: false,
    };
  }

  /**
   * get permission form user to access gallary
   */
  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  /**
   * get image from Camera roll using expo imagepicker API
   */
  _pickImage = async () => {
    this.getPermissionAsync();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });
    
    console.log(result);
    
    if (!result.cancelled) {
      this.setState({ images: result.uri });
    }
    console.log(this.state.images);
  };

  /**
   * defines the back button for top navigation action
   */
  backButton = () => (
    <TopNavigationAction
      onPress={() => this.props.navigation.navigate('News Feed')}
      icon={this.back}
    />
  );

  //registers Icon for back button 
  back = style => <Icon {...style} name="arrow-ios-back-outline" />;
  //registers settings button icon
  settingsIcon = style => <Icon {...style} name="settings-2-outline" />;

  //defines the top navigation bar
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
          leftControl={this.backButton()}
          hear
        />
      </View>
    );
  };

  //defines label for "anonymous" posts
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

  //defines label for "public" posts
  publicLabel = () => {
    return (
      <Text
        style={{
          paddingLeft: 10,
          fontSize: 12,
          fontWeight: 'bold',
          color: '#EB350D',
        }}>
        Not Anonymous
      </Text>
    );
  };

  //defines layout of scope, and annonymity labels and their settings
  mainHeader = () => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text style={styles.scopeStyle}>{this.state.scope}</Text>
          {this.state.annonymous ? this.annonymousLabel() : this.publicLabel()}
        </View>
        <Button
          appearance="ghost"
          style={{ color: 'black', alignSelf: 'right' }}
          status="basic"
          size="giant"
          icon={this.settingsIcon}
          onPress={this.settingVisibilityChange}
        />
      </View>
    );
  };

  //defines the function of the settings page 
  settingVisibilityChange = () => {
    if (this.state.settingsVisible) {
      this.setState({
        settingsVisible: false,
      });
    } else {
      this.setState({
        settingsVisible: true,
      });
    }
  };

  /**
   * defines text input area. It uses a card and 
   * a textInput component nested in a view with a similar background color 
   * to pad text
   */
  inputText = () => {
    return (
      <View style={styles.textCard} enabled>
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
            marginBottom: 30,
          }}>
          <TextInput
            textAlignVertical="Top"
            style={styles.textInput}
            placeholderTextColor="black"
            placeholder="Say something!"
            multiline={true}
            onChangeText={text => {
              this.setState({
                textInput: text,
                change: true,
              });
              console.log(this.state.textInput)
            }}
          />
        </View>
      </View>
    );
  };

  /**
   * Defines layout for image uploading area when empty
   */
  emptyImageUpload = () => {
    return (
      <TouchableOpacity
        style={{
          height: Dimensions.get('window').width * 0.2,
          width: Dimensions.get('window').width * 0.97,
          opacity: 0.8,
          alignContent: 'center',
          justifyContent: 'center',
        }}
        onPress={this._pickImage}>
        <Text style={{ alignSelf: 'center' }}>Add Images</Text>
      </TouchableOpacity>
    );
  };

  //defines layout for image uploading area once a user has added at least one image
  occupiedImageUpload = () => {
    return (
      <Layout
        style={{
          backgroundColor: '#FFFFFF',
          width: Dimensions.get('window').width * 0.97,
          opacity: 1,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          alignSelf: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 10,
            marginLeft: 15,
            marginBottom: 10,
            opacity: 1,
          }}>
          Images
        </Text>
      </Layout>
    );
  };

  //defines image uploading component
  imageUploadView = () => {
    return (
      <View style={styles.imageUploadStyle}>
        {this.state.images == null
          ? this.emptyImageUpload()
          : this.occupiedImageUpload()}
      </View>
    );
  };

  //defines modal for post settings
  settingsView() {
    return (
      <Modal
        allowBackdrop={true}
        backdropStyle={{ backgroundColor: 'black', opacity: 0.5 }}
        onBackdropPress={this.settingVisibilityChange}
        visible={this.state.settingsVisible}>
        <View
          style={{
            backgroundColor: '#EEEEEE',
            alignSelf: 'center',
            alignContent: 'center',
            borderRadius: 20,
            minHeight: Dimensions.get('window').height * 0.2,
            minWidth: Dimensions.get('window').width * 0.95,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              alignSelf: 'center',
              marginVertical: 10,
            }}>
            {' '}
            Scope{' '}
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              paddingLeft: '0%',
              alignContent: 'space-between',
              backgroundColor: '#EEEEEE',
              maxWidth: '80%',
              maxHeight: '30%',
              marginBottom: 5,
              alignSelf: "left"
            }}>
            <Button onPress={this.setInstitute} status={this.state.buttonLabel[0]} appearance = "ghost">
              institution
            </Button>
            <Button
              onPress={this.setDepartment}
              status={this.state.buttonLabel[1]}
               appearance = "ghost">
              Department
            </Button>
            <Button
              onPress={this.setFriends}
              status={this.state.buttonLabel[2]}
               appearance = "ghost">
              Connections
            </Button>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignContent: 'space-between',
              width: Dimensions.get('window').width * 0.95,
            }}>
            <Text
              style={{
                alignSelf: 'left',
                fontSize: 14,
                fontWeight: 'bold',
                marginVertical: 10,
                marginLeft: '5%',
              }}>
              {' '}
              Annonymous{' '}
            </Text>
            <Toggle
              style={{ paddingBottom: 10 }}
              checked={this.state.annonymous}
              size="tiny"
              onChange={this.annonymityChange}
            />
          </View>
        </View>
      </Modal>
    );
  }
  //sets post's scope to connections; used in settingsView
  setFriends = () => {
    this.setState({
      scope: 'To connections',
      buttonLabel: ['basic', 'basic', 'success'],
    });
  };
  //sets post's scope to institution; used in settingsView
  setInstitute = () => {
    this.setState({
      scope: 'To your institution',
      buttonLabel: ['danger', 'basic', 'basic'],
    });
  };
  //sets post's scope to department; used in settingsView
  setDepartment = () => {
    this.setState({
      scope: 'To your department',
      buttonLabel: ['basic', 'primary', 'basic'],
    });
  };

  //changes poster's anonymity for the post; used in settingsView
  annonymityChange = () => {
    if (this.state.annonymous) {
      this.setState({ annonymous: false });
    } else {
      this.setState({ annonymous: true });
    }
  };

  /* Renders the component*/
  render() {
    return (
      <View style={styles.container}>
        {this.topNavigation()}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <LinearGradient
            colors={['#FFFFFF', '#FFDCD5']}
            style={styles.mainView}>
            {this.mainHeader()}
            {this.settingsView()}

            <ScrollView
              style={{
                minHeight: Dimensions.get('window').height * 0.8,
                borderTopColor: 'grey',
                alignContent: 'center',
              }}
              overScrollMode="never">
              {this.inputText()}
              {this.imageUploadView()}
            </ScrollView>
            <Text>{/*Renders the post button*/}</Text>
            <Button
              appearance="fill"
              style={{
                position: 'absolute',
                marginTop: Dimensions.get('window').height * 0.8,
                marginLeft: Dimensions.get('window').width * 0.67,
                width: 110,
                borderRadius: 20,
                backgroundColor: 'white',
                borderColor: 'white',
              }}
              onPress={async () => {
                if (this.state.textInput) {
                  let postStatus = Fire.shared
                    .CreatePost(
                      this.state.userID,
                      this.state.userName,
                      this.state.textInput,
                      this.state.scope,
                      this.state.tags,
                      this.state.annonymous
                    )
                    .then(() => {
                      console.log(this.state.textInput);
                      alert('Post Successfully Uploaded');
                      this.props.navigation.navigate('News Feed');
                    })
                    .catch(error => {
                      alert('Post upload failed. Please try again later.');
                      console.log(error);
                    });
                } else {
                  alert('Please add some text to your post');
                }
              }}
              textStyle={{ color: '#FF4821' }}>
              {' '}
              Post{' '}
            </Button>
          </LinearGradient>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

//defines the style of components
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
    alignContent: 'center',
  },
  textCard: {
    width: Dimensions.get('window').width * 0.97,
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    opacity: 0.8,
  },
  textInput: {
    marginTop: 5,
    marginLeft: 10,
    marginBottom: 30,
    backgroundColor: '#DEDEDE',
    alighnSelf: 'center',
    minHeight: Dimensions.get('window').height * 0.25,
    opacity: 0.8,
    width: Dimensions.get('window').width - 30,
  },
  imageUploadStyle: {
    backgroundColor: '#EEEEEE',
    alignSelf: 'center',
    minHeight: Dimensions.get('window').height * 0.2,
    width: Dimensions.get('window').width * 0.97,
    marginTop: 15,
    opacity: 0.9,
    borderRadius: 20,
  },
  settingsViewContainer: {
    width: Dimensions.get('window').width * 0.7,
    alignSelf: 'center',
  },
};
export default CreatePost;
