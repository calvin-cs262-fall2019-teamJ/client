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

export default class FindMentor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          avatar:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
          name: 'Johana James',
          date: '9:00 AM',
          position: "Project Manager",
          company: "OST",
          grad: 2010
        },
        {
          name: 'Janice Billings',
          avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          date: 'Yesterday',
          position: "Software Engineer",
          company: "Google LLC",
          grad: 2015

        },
        {
          name: 'John Doe',
          avatar:
            'https://alejandrocremades.com/wp-content/uploads/2016/01/rsz_1speaker_-_alejandro_cremades_360.jpg',
          date: 'Yesterday',
          position: "CEO",
          company: "Bazinga Tech",
          grad: 2017
        },
      ],
      viewMode: 'default',
      search: '',
    };
  }

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
          alignment="Left"
          textstyle={{
            fontSize: 25,
            fontWeight: 'bold',
            marginLeft: 10
          }}
          rightControls={this.searchTrigger()}
        />
      </View>
    );
  };

  searchTrigger = () => (
    <TopNavigationAction
      onPress={() => {
        this.setState({
          viewMode: 'search',
        });
      }}
      icon={this.SearchIcon}
    />
  );

  SearchIcon = style => <Icon {...style} name="search-outline" />;
  BackIcon = style => <Icon {...style} name="chevron-left-outline"/>

  backNavigation = () => {
    <TopNavigationAction
      onPress={this.props.navigation.navigate("News Feed")}
      icon={this.BackIcon}
    />
  }
  
  updateSearch = (searchVal) => {
    this.setState({ search: searchVal })
  };
  searchNavigation = () => {
    return (
      <SearchBar
        ref = {search => this.search = search} 
        platform = "ios"
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
          height: 40
        }}
        onChangeText={text => this.updateSearch(text)}
        value = {this.state.search}
        placeholderTextColor={'#g5g5g5'}
        showCancel = "true"
      />
    );
  };

  topNaviMode = () => {
    if (this.state.viewMode == 'default') {
      return this.defaultNavigation();
    } else {
      return this.searchNavigation();
    }
  };

  openChat = name => {
    this.props.navigation.navigate('ChatDM', { name: name });
  };
  render() {
    return (
      <Layout style={{}}>
        {this.topNaviMode()}
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
          {this.state.messages.map(convo => {
            return (
              <MentorCard
                date={convo.date}
                name={convo.name}
                avatar={convo.avatar}
                position = {convo.position}
                company = {convo.company}
                openChat={this.openChat}
                grad={convo.grad}
                backgroundColor = "white"
              />
            );
          })}
        </ScrollView>
        <OtherDepartments/>
      </Layout>
    );
  }
}
