import React, { Component } from 'react';
import { SearchBar, Image, Avatar } from 'react-native-elements';
import {
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  Button,
  List,
  ListItem,
  Input,
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from 'react-native-ui-kitten';
import { Card } from 'react-native-paper';
import MapView from 'react-native-maps';
import Constants from 'expo-constants';
import PostCard from '../NewsFeed/PostCard';
import {departmentMembers} from '../Utils/SampleData';

// defines the format of the "recents" area on the search page
export default class Recents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: departmentMembers.slice(1)
    };
  }
  render() {
    return (
      <Card
        style={{
          padding: 10,
          flex: 1,
          alignItems: 'left',
          borderRadius: 20,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            paddingTop: 0,
            paddingLeft: 5,
          }}>
          Recent
        </Text>
        <View
          style={{
            paddingTop: 10,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            alignContent: 'center',
          }}>
          {this.state.users.map(item => {
            return (
              <Avatar
                rounded
                size="medium"
                source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}
                title="User 1"
                containerStyle={{ marginRight: 10 }}
                onPress={this.props.toProfile}
              />
            );
          })}
  
        </View>
      </Card>
    );
  }
}
