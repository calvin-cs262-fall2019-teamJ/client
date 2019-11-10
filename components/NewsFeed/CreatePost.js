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
  SafeAreaView,
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

class CreatePost extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      userID: 'userIDPlaceHolder',
      textInput: '',
      scope: 'Your Department',
      tags: {},
      annonymous: true,
      images: null,
      settingsVisible: false,
      buttonLabel: ['basic', 'basic', 'success'],
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

  backButton = () => (
    <TopNavigationAction
      onPress={() => this.props.navigation.navigate('News Feed')}
      icon={this.back}
    />
  );

  back = style => <Icon {...style} name="arrow-ios-back-outline" />;

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
          style={{ color: 'black', alignSelf: 'right' }}
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
            textAlignVertical="Top"
            style={styles.textInput}
            placeholderTextColor="black"
            placeholder="Say something!"
            multiline={true}
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
              maxWidth: '80%',
              maxHeight: '30%',
              marginBottom: 5
            }}>
            <Button onPress={this.setPublic} status={this.state.buttonLabel[0]}>
              Public
            </Button>
            <Button
              onPress={this.setInstitute}
              status={this.state.buttonLabel[1]}>
              Institution
            </Button>
            <Button
              onPress={this.setDepartment}
              status={this.state.buttonLabel[2]}>
              Department
            </Button>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignContent: "space-between",
              width: Dimensions.get('window').width * 0.95,
            }}>
            <Text
              style={{
                alignSelf: 'left',
                fontSize: 14,
                fontWeight: 'bold',
                marginVertical: 10,
                marginLeft: "5%"
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
  setPublic = () => {
    this.setState({
      scope: 'Public',
      buttonLabel: ['danger', 'basic', 'basic'],
    });
  };
  setInstitute = () => {
    this.setState({
      scope: 'Your Institution',
      buttonLabel: ['basic', 'primary', 'basic'],
    });
  };
  setDepartment = () => {
    this.setState({
      scope: 'Your Department',
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
