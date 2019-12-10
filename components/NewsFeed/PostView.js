import React from 'react';
import {
  Button,
  Input,
  Icon,
  List,
  ListItem,
  Layout,
  Text,
} from 'react-native-ui-kitten';
import {
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';

import PostCard from './PostCard';

class PostView extends React.Component<Props> {
  static navigationOptions = ({ navigation }) => ({
    title: 'Post',
    /*
    headerLeft: <TouchableHighlight
      onPress = {() => {this.props.navigation.navigate('News')}}
      >
      <Image
        style = {{
          height: 30,
          width: 30,
          marginLeft: 10,
          borderRadius: 15,
          borderWidth: 2
        }}
        source = {require('../../assets/kvlinden1.png')}
      />
      </TouchableHighlight>,

      headerRight: 
      <TouchableHighlight
      onPress = {() => { alert("You're looking beautiful today!")}}
      >
      <Image
        style = {{
          height: 30,
          width: 30,
          marginRight: 5,
          borderRadius: 15,
          borderWidth: 2
        }}
        source = {require('../../assets/icons/chatbubble.svg')}
      />
      </TouchableHighlight>
      */
  });

  profilePress = () => {
    alert('Going to profile');
    this.props.navigation.navigate('Profile');
  };

  /* Renders the component*/
  render() {
    return (
      <Layout style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View
            style={{
              paddingTop: 10,
              maxWidth: Dimensions.get('window').width - 25,
              flex: 1,
              flexDirection: 'column',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Profile');
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  paddingBottom: 10,
                }}>
                <Image
                  style={{
                    height: 30,
                    width: 30,
                    marginLeft: 10,
                    borderRadius: 15,
                    borderWidth: 2,
                  }}
                  source={require('../../assets/kvlinden1.png')}
                />

                {/*Name sub-component*/}
                <Text
                  style={{
                    marginLeft: 10,
                    marginTop: 8,
                    fontSize: 13,
                    textAlign: 'left',
                  }}>
                  {this.props.navigation.state.params.userName} •{' '}
                  {this.props.navigation.state.params.timeStamp}
                </Text>
              </View>
            </TouchableOpacity>
            <Text
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                marginTop: 2,
                fontSize: 14,
                textAlign: 'left',
              }}>
              {this.props.navigation.state.params.text}
            </Text>
            <TouchableOpacity
              onPress={() => {
                alert("Hi! I'm the image");
              }}
              style={{ paddingTop: 9 }}>
              <Image
                style={{
                  width: Dimensions.get('window').width - 25,
                  margin: 5,
                }}
                source={require('./quick-brown-fox-18.jpg')}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              marginLeft: 5,
              maxWidth: Dimensions.get('window').width - 30,
            }}>
            <Input
              placeholder="Comment"
              size="small"
              style={{ width: '78%' }}
            />
            <Button appearance="ghost" style={{ width: '25%' }}>
              Like
            </Button>
          </View>
        </ScrollView>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    paddingTop: 'flex',
  },
});

const postText = 'The quick brown fox jumped over the lazy dog';
export default PostView;
