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
  TouchableHighlight,
} from 'react-native';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import { Card } from 'react-native-paper';
import PostCard from './PostCard';
import Fire from '../Fire';
import * as ThemeStyle from '../ThemeConstants';

class NewsFeed extends React.Component<Props> {
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

  profilePress = userID => {
    this.props.navigation.navigate('Profile', { userID });
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
    this.props.navigation.navigate('CreatePost');
  };

  MenuIcon = style => <Icon {...style} name="menu-outline" />;
  AddIcon = style => <Icon {...style} name="plus-outline" />;

  RightConvo = () => [
    <TopNavigationAction
      onPress={() => this.props.navigation.navigate('CreatePost')}
      icon={this.AddIcon}
    />,
    <TopNavigationAction
      onPress={() => this.props.navigation.navigate('Search')}
      icon={this.SearchIcon}
    />,
  ];

  SearchIcon = style => <Icon {...style} name="search-outline" />;

  /* Renders the component*/
  render() {
    return (
      <LinearGradient
        colors={[
          'white',
          ThemeStyle.OffWhiteBackground,
          ThemeStyle.CalvinBlue,
        ]}
        style={styles.container}>
        <TopNavigation
          title="Home"
          alignment="left"
          style={ThemeStyle.StyleConsts.TopHeaderViewStyle}
          titleStyle={ThemeStyle.StyleConsts.TopHeaderTitleStyle}
          rightControls={this.RightConvo()}
        />
        <ScrollView style={styles.scrollView}>
          {this.state.postInfo.map(post => {
            return (
              <PostCard
                anonymous={post.annonymous}
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
                // timeStamp={post.timeStamp}
                profileNav={() => {this.profilePress(post.owner)}}
                postView={params => this.textPress(params)}
              />
            );
          })}
        </ScrollView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    //justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    
    minHeight: Dimensions.get('window').height
  },
  scrollView: {
    justifyContent: 'space-between',
    marginHorizontal: 1,
  },
});

export default NewsFeed;
