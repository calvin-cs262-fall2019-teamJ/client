import React from 'react';
import { Header, SearchBar } from 'react-native-elements';
import {
  Layout,
  Icon,
  Text,
  TopNavigation,
  TopNavigationAction,
  ApplicationProvider,
} from 'react-native-ui-kitten';
import MentorCard from './mentorCard';
import OtherDepartments from './OtherDeptView';
import {
  Button,
  Dimensions,
  StyleSheet,
  View,
  ListView,
  ScrollView,
} from 'react-native';
import Constants from 'expo-constants';
import {SearchIcon, BackIcon, MenuIcon} from '../Utils/customIcons'

// screen for the "Find Mentor" page
export default class FindMentor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yourDepartmentList: [
        {
          avatar:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
          name: 'Johana James',
          date: '9:00 AM',
          position: 'Project Manager',
          company: 'OST',
          grad: 2010,
        },
        {
          name: 'Janice Billings',
          avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          date: 'Yesterday',
          position: 'Software Engineer',
          company: 'Google LLC',
          grad: 2015,
        },
        {
          name: 'John Doe',
          avatar:
            'https://alejandrocremades.com/wp-content/uploads/2016/01/rsz_1speaker_-_alejandro_cremades_360.jpg',
          date: 'Yesterday',
          position: 'CEO',
          company: 'Bazinga Tech',
          grad: 2017,
        },
      ],
      viewMode: 'default',
      search: '',
    };
  }

  // will open the draer
  OpenMenu = () => (
    <TopNavigationAction
      onPress={() => this.props.navigation.toggleDrawer()}
      icon={MenuIcon}
    />
  );

 // MenuIcon = style => <Icon {...style} name="menu-outline" />;

  // what the navigation bar looks like before the search bar is pressed
  defaultNavigation = () => {
    return (
      <View>
        <View
          style={{
            height: Constants.statusBarHeight,
          }}
        />
        <TopNavigation
          title="Mentors"
          alignment="center"
          rightControls={this.expandSearchBar()}
          leftControl={this.OpenMenu()}
        />
      </View>
    );
  };

  // when pressed, it will change the top navigation to a search bar
  expandSearchBar = () => (
    <TopNavigationAction
      onPress={() => {
        this.setState({
          viewMode: 'search',
        });
      }}
      icon={SearchIcon}
    />
  );

  // lets the back button navigate to the 
  backNavigation = () => {
    <TopNavigationAction
      onPress={this.props.navigation.navigate('News Feed')}
      icon={BackIcon}
    />;
  };
  // searches for mentors, soon to be replaced by database query
  updateSearch = searchVal => {
    this.setState({ search: searchVal });
  };


  // defines how the top naviagation looks when the search bar is pressed
  searchBarExpanded = () => {
    return (
      <SearchBar
        ref={search => (this.search = search)}
        platform="ios"
        lightTheme="true"
        round //To make the searchbar corner round (default square)
        searchIcon={{ size: 24 }} //Size of the search icon
        placeholder="Search..."
        containerStyle={{
          backgroundColor: 'white',
          borderWidth: 0,
          borderColor: 'white',
          minWidth: '80%',
          paddingBottom: 10,
        }}
        inputContainerStyle={{
          backgroundColor: '#E7E7E7',
          marginTop: Constants.statusBarHeight,
          minWidth: '78%',
          paddingBottom: 5,
          opacity: 100,
          height: 40,
        }}
        onChangeText={text => this.updateSearch(text)}
        value={this.state.search}
        placeholderTextColor={'#g5g5g5'}
        showCancel="true"
      />
    );
  };

  // will conditionally render what the top navigation looks like
  topNaviagationMode = () => {
    if (this.state.viewMode == 'default') {
      return this.defaultNavigation();
    } else {
      return this.searchBarExpanded();
    }
  };

  /* will navigate to the chat page  (soon to be replaced with navigating 
  to the user's profile )*/
  openChat = name => {
    this.props.navigation.navigate('ChatDM', { name: name });
  };


  render() {
    return (
      <Layout style={{}}>
        {this.topNaviagationMode()}
        <Text
          style={{
            fontSize: 20,
            marginLeft: 10,
            marginBottom: 10,
            fontWeight: 'bold',
          }}>
          Your Department
        </Text>
        <ScrollView>
          {this.state.yourDepartmentList.map(convo => {
            return (
              <MentorCard
                date={convo.date}
                name={convo.name}
                avatar={convo.avatar}
                position={convo.position}
                company={convo.company}
                openChat={this.openChat}
                grad={convo.grad}
                backgroundColor="white"
              />
            );
          })}
        </ScrollView>
        <OtherDepartments />
      </Layout>
    );
  }
}
