import React, { Component } from 'react';
import { SearchBar, Image, Avatar } from 'react-native-elements';
import {
  StyleSheet,
  Text,
  Dimensions,
  SafeAreaView,
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
import PopulatedMap from './mapView';
import Recents from './Recents';

const markers = [
  {
    latitude: 42.92947,
    longitude: -85.58896,
    title: 'Calvin University',
  },
];

const jobPostTexts = [ 
  'The quick brown fox jumped over the lazy dog. A pangram, or holoalphabetic sentence, is a sentence that contains every letter of the alphabet at least once.' +
                'A pangram, or holoalphabetic sentence, is a sentence that' +
                ' contains every letter of the alphabet at least once. The most' +
                ' famous pangram is probably the thirty-five-letter-long The quick ' +
                ' brown fox jumps over the lazy dog,” which has been used to test typing' +
                ' equipment since at least the late 1800s.',

]

export default class SearchDefaultView extends React.Component {

  render() {
    return (
      <ScrollView>
        <View
          style={{
            padding: 10,
          }}>
          <Recents toProfile={this.props.toProfile} />
          <PopulatedMap
            style={{
              flex: 1,
              marginTop: 10,
              paddingHorizontal: 10,
              height: Dimensions.get('window').height * 0.5,
              borderRadius: 20,
            }}
            region={{
              latitude: 42.96336,
              longitude: -85.668083,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            }}
            annotations={markers}
            showsUserLocation={true}
          />
        </View>
          <PostCard
            bgcolor="white"
            text={
              "I'm happy to announce that I've been given the honor of being a panelist at next years World Economic Forum. I'll also be presenting a talk about the how the use of AI in agriculture could help address world hunger."
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
            postNav={this.toProfile}
            postView={params => this.textPress(params)}
          />
        
      </ScrollView>
    );
  }
}
