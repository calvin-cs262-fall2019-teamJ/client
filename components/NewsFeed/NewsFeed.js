import React from 'react';
import {
  Button,
  Icon,
  List,
  ListItem,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction
} from 'react-native-ui-kitten';
import {
  Image,
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
    alert('Going to profile');
    this.props.navigation.navigate('SignIn');
  };


  OpenMenu = () => (
    <TopNavigationAction onPress={()=> this.props.navigation.toggleDrawer()} icon={this.MenuIcon}/>
  );

  MenuIcon = (style) => (
    <Icon {...style} name='menu-outline' />
  );

  AddConversation = () => (
    <TopNavigationAction onPress={()=> alert('Will bring up search')} icon={this.SearchIcon}/>
  );

  SearchIcon = (style) => (
    <Icon {...style} name='search-outline' />
  );

  /* Renders the component*/
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TopNavigation
          title='Home'
          alignment='center'
          leftControl={this.OpenMenu()}
          rightControls={this.AddConversation()}
        />
        <ScrollView style={styles.scrollView}>
          <PostCard
            bgcolor = "white"
            text = {postText +
            "A pangram, or holoalphabetic sentence, is a sentence that" +
            " contains every letter of the alphabet at least once. The most" +
            " famous pangram is probably the thirty-five-letter-long The quick " +
            " brown fox jumps over the lazy dog,” which has been used to test typing" +
            " equipment since at least the late 1800s."}
            imageSrc = './quick-brown-fox-18.jpg'
            userImageSrc = '../../assets/kvlinden.png'
            userName = "Keith VanderLinden"
            timeStamp = "7d ago"
            postNav = {this.profilePress}
          />
         <PostCard
            bgcolor = "white"
            text = {postText +
            "A pangram, or holoalphabetic sentence, is a sentence that" +
            " contains every letter of the alphabet at least once. The most" +
            " famous pangram is probably the thirty-five-letter-long The quick " +
            " brown fox jumps over the lazy dog,” which has been used to test typing" +
            " equipment since at least the late 1800s."}
            imageSrc = './quick-brown-fox-18.jpg'
            userImageSrc = '../../assets/kvlinden.png'
            userName = "Keith VanderLinden"
            timeStamp = "7d ago"
            postNav = {this.profilePress}
          />
          <PostCard
            bgcolor = "white"
            text = {postText +
            "A pangram, or holoalphabetic sentence, is a sentence that" +
            " contains every letter of the alphabet at least once. The most" +
            " famous pangram is probably the thirty-five-letter-long The quick " +
            " brown fox jumps over the lazy dog,” which has been used to test typing" +
            " equipment since at least the late 1800s."}
            imageSrc = './quick-brown-fox-18.jpg'
            userImageSrc = '../../assets/kvlinden.png'
            userName = "Keith VanderLinden"
            timeStamp = "7d ago"
            postNav = {this.profilePress}
          />
          <PostCard
            bgcolor = "white"
            text = {postText +
            "A pangram, or holoalphabetic sentence, is a sentence that" +
            " contains every letter of the alphabet at least once. The most" +
            " famous pangram is probably the thirty-five-letter-long The quick " +
            " brown fox jumps over the lazy dog,” which has been used to test typing" +
            " equipment since at least the late 1800s."}
            imageSrc = './quick-brown-fox-18.jpg'
            userImageSrc = '../../assets/kvlinden.png'
            userName = "Keith VanderLinden"
            timeStamp = "7d ago"
            postNav = {this.profilePress}
          />
        </ScrollView>
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

const postText = "The quick brown fox jumped over the lazy dog. A pangram, or holoalphabetic sentence, is a sentence that contains every letter of the alphabet at least once."

export default NewsFeed;
