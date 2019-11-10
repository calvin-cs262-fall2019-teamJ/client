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
  TouchableHighlight,
} from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import PostCard from './PostCard';

class NewsFeed extends React.Component<Props> {
  profilePress = () => {
    this.props.navigation.navigate('Profile');
  };

  textPress = paramsVal => {
    this.props.navigation.navigate('PostView', { paramsVal });
  };

  OpenMenu = () => (
    <TopNavigationAction
      onPress={() => this.props.navigation.toggleDrawer()}
      icon={this.MenuIcon}
    />
  );

  createPost = () => {
    this.props.navigation.navigate("CreatePost")
  }

  MenuIcon = style => <Icon {...style} name="menu-outline" />;
  AddIcon = style => <Icon {...style} name="plus-outline" />;

  AddConversation = () => (
    <TopNavigationAction
      onPress={() => this.props.navigation.navigate('Search')}
      icon={this.SearchIcon}
    />
  );

  SearchIcon = style => <Icon {...style} name="search-outline" />;

  /* Renders the component*/
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TopNavigation
          title="Home"
          alignment="center"
          leftControl={this.OpenMenu()}
          rightControls={this.AddConversation()}
        />
        <ScrollView style={styles.scrollView}>
          <PostCard
            bgcolor="white"
            text={
              "Calvin's Business department is looking for Alumni in Computer Science who could give a seminar talk about how technical staff interact with business adminstrators. Please contact us using the department email listed on Calvin's website if intrested."
            }
            userImageSrc=<Image
              style={{
                height: 30,
                width: 30,
                marginLeft: 10,
                borderRadius: 15,
                borderWidth: 2,
              }}
              source={require('./18942381.jpg')}
            />
            userName="Annonymous"
            timeStamp="A moment ago"
            postNav={this.profilePress}
            postView={params => this.textPress(params)}
          />
          <PostCard
            bgcolor="white"
            text={'Looking for help in project inolving React Native!'}
            userImageSrc=<Image
              style={{
                height: 30,
                width: 30,
                marginLeft: 10,
                borderRadius: 15,
                borderWidth: 2,
              }}
              source={require('./18942381.jpg')}
            />
            userName="Annonymous"
            timeStamp="5 mins ago"
            postNav={this.profilePress}
            postView={params => this.textPress(params)}
          />
          <PostCard
            bgcolor="white"
            text={
              "I'm happy to announce that I've been given the honor of being a panelist at next years World Economic Forum. I'll also be presenting a talk about the how the use of AI in agriculture could help address world hunger."
            }
            imageSource={
              <Image
                style={{
                  width: Dimensions.get('window').width - 10,
                  margin: 5,
                }}
                source={require('./50304057_303.jpg')}
              />
            }
            userImageSrc=<Image
              style={{
                height: 30,
                width: 30,
                marginLeft: 10,
                borderRadius: 15,
                borderWidth: 2,
              }}
              source={require('../../assets/kvlinden1.png')}
            />
            userName="Keith VanderLinden"
            timeStamp="12 mins ago"
            postNav={this.profilePress}
            postView={params => this.textPress(params)}
          />
          <PostCard
            bgcolor="white"
            text={
              "I'm looking for a Software Engineering Internship in the Bay Area. I have good experience in Web Dev, application development, and AI reasearch, and I'm intrested in projects web projects that employe AI to enhance user's exprerience. Please leave a comment below if you are aware of good projects."
            }
            userImageSrc=<Image
              style={{
                height: 30,
                width: 30,
                marginLeft: 10,
                borderRadius: 15,
                borderWidth: 2,
              }}
              source={require('../../assets/kvlinden1.png')}
            />
            userName="Keith VanderLinden"
            timeStamp="7d ago"
            postNav={this.profilePress}
            postView={params => this.textPress(params)}
          />

          <PostCard
            bgcolor="white"
            text={'TECHNOLOGY IS VALUE LADEN!'}
            userImageSrc=<Image
              style={{
                height: 30,
                width: 30,
                marginLeft: 10,
                borderRadius: 15,
                borderWidth: 2,
              }}
              source={require('./18942381.jpg')}
            />
            userName="Annonymous"
            timeStamp="3w ago"
            postNav={this.profilePress}
            postView={params => this.textPress(params)}
          />

          <PostCard
            bgcolor="white"
            text={
              "The rise of social media companies, and their awesome power should remind us that of my Fourth Idea in on the Age of Technology: Technological change is not additive. Companies like facebook didn't only give us an additional way of connecting with people, they also created new industries and raised more ethical questions"
            }
            imageSource={
              <Image
                style={{
                  width: Dimensions.get('window').width - 10,
                  margin: 5,
                }}
                source={require('./facebook banner.jpg')}
              />
            }
            userImageSrc=<Image
              style={{
                height: 30,
                width: 30,
                marginLeft: 10,
                borderRadius: 15,
                borderWidth: 2,
              }}
              source={require('./download.jfif')}
            />
            userName="Neil Postman"
            timeStamp="Several Years Ago"
            postNav={this.profilePress}
            postView={params => this.textPress(params)}
          />
        </ScrollView>
        <Button
          appearance="fill"
          style={{
            position: 'absolute',
            marginTop: Dimensions.get('window').height * 0.89,
            marginLeft: Dimensions.get('window').width * 0.82,
            width: 60,
            height: 60,
            borderRadius: 60,
            backgroundColor: '#FF522D',
            borderColor: '#FF522D',
          }}
          textStyle={{ color: '#FF4821' }}
          onPress={this.createPost}
          icon = {this.AddIcon}
          color = "black"
          />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //alignItems: 'center',
    //justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#EFEFEF',
  },
  scrollView: {
    backgroundColor: '#EFEFEF',
    justifyContent: 'space-between',
    paddingTop: 'flex',
    marginHorizontal: 1,
  },
});

const postText =
  'The quick brown fox jumped over the lazy dog. A pangram, or holoalphabetic sentence, is a sentence that contains every letter of the alphabet at least once.';

export default NewsFeed;
