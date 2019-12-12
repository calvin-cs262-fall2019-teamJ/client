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
import PopulatedMap from './mapView';
import Recents from './Recents';
import * as ThemeStyle from '../ThemeConstants';
import { LinearGradient } from 'expo-linear-gradient';

const markers = [
  {
    latitude: 42.92947,
    longitude: -85.58896,
    title: 'Calvin University',
  },
];

// holds all the activity elements for the search page
export default class SearchDefaultView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <LinearGradient
        colors={['white', ThemeStyle.OffWhiteBackground, ThemeStyle.CalvinBlue]}
        style={{alignItems: 'center'}}>
        <ScrollView>
          <View
            >
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
              "I'm happy to announce that poop I've been given the honor of being a panelist at next years World Economic Forum. I'll also be presenting a talk about the how the use of AI in agriculture could help address world hunger."
            }
            userImageSrc=<Image
              style={{
                height: 30,
                width: 30,
                marginLeft: 10,
                borderRadius: 15,
                borderWidth: 2,
              }}
              source={require('../NewsFeed/18942381.jpg')}
            />
            userName="Keith VanderLinden"
            timeStamp="12 mins ago"
            postNav={this.toProfile}
            postView={params => this.textPress(params)}
          />
        </ScrollView>
      </LinearGradient>
    );
  }
}
