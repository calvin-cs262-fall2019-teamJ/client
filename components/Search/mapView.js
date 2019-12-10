import React, { Component } from 'react';
import { SearchBar, Image } from 'react-native-elements';
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

export default class PopulatedMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: this.props.region,
      userLocation: this.props.userLocation,
      markerList: this.props.markerList,
      showsUserLocation: this.props.showsUserLocation,
    };
  }
  render() {
    return (
      <View>
        <Card
          style={{
            borderRadius: 20,
            marginTop: 10
          }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", paddingTop: 15, paddingLeft: 15 }}>
            In your Area...
          </Text>
          <MapView
            style={this.props.style}
            region={this.state.region}
            annotations={this.state.markerList}
            showsUserLocation={this.state.showsUserLocation}
          />
        </Card>
      </View>
    );
  }
}
