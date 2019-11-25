import React, { Component } from 'react';
import { SearchBar, Image } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';
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

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputInfo: '',
    };
  }

  updateInput = val => {
    this.setState({ inputInfo: val });
  };

  renderItemIcon = (style, iconUri) => (
    <Image
      source={require('../../assets/kvlinden1.png')}
      style={{ width: 50, height: 50 }}
    />
  );

  render() {
    const renderItem = ({ item, index }) => (
      <ListItem
        title={`${item.name}`}
        description={`${item.location}`}
        // iconUri = {`${item.picture}`}
        // icon ={iconUri => this.renderItemIcon(iconUri)}
      />
    );

    return (
      <Layout style={styles.container}>

        <List
          style={styles.list}
          data={this.props.shownData}
          renderItem={renderItem}
        />
      </Layout>
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
