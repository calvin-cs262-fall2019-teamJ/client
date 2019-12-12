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
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import { Card } from 'react-native-paper';
import PostCard from './PostCard';
import Fire from '../Fire';
import * as ThemeStyle from '../ThemeConstants';

class CreatePost extends React.Component<Props> {
  constructor(props) {
    super(props);
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

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

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

  back = style => <Icon {...style} name="arrow-ios-back-outline" />;

  backButton = () => (
    <TopNavigationAction
      onPress={() => this.props.navigation.navigate('News Feed')}
      icon={this.back}
    />
  );

  AddConversation = () => (
    <TopNavigationAction
      onPress={() => this.props.navigation.navigate('Search')}
      icon={this.settingsIcon}
    />
  );

  settingsIcon = style => <Icon {...style} name="settings-2-outline" />;
  addIcon = style => <Icon {...style} name="plus-outline" />;
  topNavigation = () => {
    return (
      <TopNavigation
        title="NewPost"
        alignment="left"
        style={ThemeStyle.StyleConsts.TopHeaderViewStyle}
        titleStyle={ThemeStyle.StyleConsts.TopHeaderTitleStyle}
        leftControl={this.backButton}
      />
    );
  };
  defaultNavigation = () => {
    return (
      <View>
        <TopNavigation
          title="New Post"
          alignment="start"
          leftControl={this.backButton()}
          style={ThemeStyle.StyleConsts.TopHeaderViewStyle}
          titleStyle={ThemeStyle.StyleConsts.TopHeaderTitleStyle}
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
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text style={styles.scopeStyle}>{this.state.scope}</Text>
          {this.state.annonymous ? this.annonymousLabel() : this.publicLabel()}
        </View>
        <Button
          appearance="ghost"
          style={{ color: 'black', alignSelf: 'flex-start' }}
          status="basic"
          size="giant"
          icon={this.settingsIcon}
          onPress={this.settingVisibilityChange}
        />
      </View>
    );
  };

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
            marginBottom: 30,
          }}>
          <TextInput
            textAlignVertical="top"
            style={styles.textInput}
            placeholderTextColor="black"
            placeholder="Say something!"
            multiline={true}
            onChangeText={text => {
              this.setState({
                textInput: text,
                change: true,
              });
              console.log(this.state.textInput);
            }}
          />
        </View>
      </View>
    );
  };

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

  imageUploadView = () => {
    return (
      <View style={styles.imageUploadStyle}>
        {this.state.images == null
          ? this.emptyImageUpload()
          : this.occupiedImageUpload()}
      </View>
    );
  };

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
              paddingLeft: '5%',
              alignContent: 'space-between',
              backgroundColor: '#EEEEEE',
              maxWidth: Dimensions.get('window').width * 0.8,
              maxHeight: Dimensions.get('window').height * 0.3,
              marginBottom: 5,
            }}>
            <Button onPress={this.setPublic} status={this.state.buttonLabel[0]}>
              Institution
            </Button>
            <Button
              onPress={this.setInstitute}
              status={this.state.buttonLabel[1]}>
              Department
            </Button>
            <Button
              onPress={this.setDepartment}
              status={this.state.buttonLabel[2]}>
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
                alignSelf: 'flex-start',
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
  setFriends = () => {
    this.setState({
      scope: 'To your institution',
      buttonLabel: ['danger', 'basic', 'basic'],
    });
  };
  setInstitute = () => {
    this.setState({
      scope: 'To your department',
      buttonLabel: ['basic', 'primary', 'basic'],
    });
  };
  setDepartment = () => {
    this.setState({
      scope: 'To connections',
      buttonLabel: ['basic', 'basic', 'success'],
    });
  };

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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <LinearGradient
            colors={[
              'white',
              ThemeStyle.OffWhiteBackground,
              ThemeStyle.OffWhiteBackground,
              ThemeStyle.CalvinBlue,
            ]}
            style={styles.mainView}>
            {this.defaultNavigation()}
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
    textAlignVertical: 'top',
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
