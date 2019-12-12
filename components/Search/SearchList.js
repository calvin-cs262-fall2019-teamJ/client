import React, { Component } from 'react';
import { SearchBar, Image } from 'react-native-elements';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
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
import Constants from 'expo-constants';
import * as ThemeStyle from '../ThemeConstants';
import { LinearGradient } from 'expo-linear-gradient';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItemIcon = (style, iconUri) => (
    <Image
      source={require('../../assets/kvlinden1.png')}
      style={{ width: 50, height: 50 }}
    />
  );
  componentDidUpdate() {
   // alert(this.props.shownData.length);
  }

  renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.name}`}
      description={`${item.location}`}
      iconUri = {`${item.avatar}`}
      icon ={iconUri => this.renderItemIcon(iconUri)}
    />
  );

  render() {
    return (
      <LinearGradient
        colors={['white', ThemeStyle.OffWhiteBackground, ThemeStyle.CalvinBlue]}
        style={styles.container}>
        <ScrollView>
          <List
            style={styles.list}
            data={this.props.shownData}
            renderItem={this.renderItem}
          />
        </ScrollView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: '1',
  },
  list: {
    height: '100%',
  },
});
