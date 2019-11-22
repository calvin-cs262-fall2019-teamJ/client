/**
 * Newfeed.js defines how the frnt page of the app that
 * shows a user posts created by departmetns, and other user
 * and create their own post. The user can also interact with the posts
 * 
 */
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
import Fire from '../Fire';

/**defines front screen */
class NewsFeed extends React.Component<Props> {
  /**creates newfeed component. Initializes posts */
  constructor(props) {
    super(props);
    this.state = {
      postInfo: [
        {
          annonymous: true,
          text: 'Loading',
          userName: 'user',
          timeStamp: Date.now(),
        },
      ],
    };
  }
  /**queries the database to get posts and set's them as the state of
   * the newsfeed
   */
  async componentDidMount() {
    //alert("poopity")
    let temp = await Fire.shared.PullPosts();

    let temp2 = [];

    temp.map(postData => {
      temp2.push({
        annonymous: postData.anonymous,
        text: postData.text,
        nameLabel: postData.displayName,
        owner: postData.owner,
        timeStamp: postData.timeOfPost,
      });
    });
    this.setState({
      postInfo: temp2,
    });
  }

  //defines how posts behave when post avatars are pressed
  profilePress = () => {
    this.props.navigation.navigate('Profile');
  };

  //defines how posts behave when their text is pressed
  textPress = paramsVal => {
    this.props.navigation.navigate('PostView', { paramsVal });
  };

  //defines top left navigation button
  OpenMenu = () => (
    <TopNavigationAction
      onPress={() => this.props.navigation.toggleDrawer()}
      icon={this.MenuIcon}
    />
  );

  //defines top right navigation button
  OpenSettings = () => (
    <TopNavigationAction
      onPress={() => this.props.navigation.navigate('Search')}
      icon={this.SearchIcon}
    />
  );

  //registers icons for navigation buttons
  MenuIcon = style => <Icon {...style} name="menu-outline" />;
  AddIcon = style => <Icon {...style} name="plus-outline" />;
  SearchIcon = style => <Icon {...style} name="search-outline" />;


  /* Renders the component*/
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TopNavigation
          title="Home"
          alignment="center"
          leftControl={this.OpenMenu()}
          rightControls={this.OpenSettings()}
        />
        <ScrollView style={styles.scrollView}>
          {this.state.postInfo.map(post => {
            return (
              <PostCard
                annonymous={post.annonymous}
                bgcolor="white"
                text={post.text}
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
                userName={post.nameLabel}
                timeStamp={post.timeStamp}
                postNav={this.profilePress}
                postView={params => this.textPress(params)}
              />
            );
          })}
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
          onPress={() => {this.props.navigation.navigate('CreatePost')}}
          icon={this.AddIcon}
          color="black"
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

export default NewsFeed;
