import React, { Component } from 'react';
import { SearchBar, Image, Avatar } from 'react-native-elements';
//import SearchBar from 'react-native-dynamic-search-bar';
import {
  StyleSheet,
  Text,
  Dimensions,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Platform,
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
  Modal,
} from 'react-native-ui-kitten';
import { Card } from 'react-native-paper';
import MapView from 'react-native-maps';
import Constants from 'expo-constants';
import PostCard from '../NewsFeed/PostCard';
import PopulatedMap from './mapView';
import Recents from './Recents';
import SearchDefaultView from './SearchDefaultView';
import SearchList from './SearchList';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { UIManager } from 'react-native';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      view: 'defualt',
      inputInfo: '',
      originalData: [
        {
          name: 'Jane Doe',
          location: 'Grand Rapids, MI',
          picture: '../../assets/icons/logo.png',
        },
        {
          name: 'Keith VanderLinden',
          location: 'Grand Rapids, MI',
          picture: '../../assets/kvlinden1.png',
        },
        {
          name: 'Juliana Lim',
          location: 'Farmington Hills, MI',
          picture: '../../assets/icons/logo.png',
        },
        {
          name: 'Keith VanderLinden',
          location: 'Pontiac, MI',
          picture: '../../assets/icons/logo.png',
        },
        {
          name: 'Cora Jung',
          location: 'Lansing, MI',
          picture: '../../assets/icons/logo.png',
        },
        {
          name: 'Alvin Chung',
          location: 'Grand Rapids, MI',
          picture: '../../assets/icons/logo.png',
        },
        {
          name: 'Samuel Zeleke',
          location: 'Grand Rapids, IL',
          picture: '../../assets/icons/logo.png',
        },
      ],
      shownData: [
        {
          name: 'Jane Doe',
          location: 'Grand Rapids, MI',
          picture: '../../assets/icons/logo.png',
        },
        {
          name: 'Keith VanderLinden',
          location: 'Grand Rapids, MI',
          picture: '../../assets/kvlinden1.png',
        },
        {
          name: 'Juliana Lim',
          location: 'Farmington Hills, MI',
          picture: '../../assets/icons/logo.png',
        },
        {
          name: 'Keith VanderLinden',
          location: 'Pontiac, MI',
          picture: '../../assets/icons/logo.png',
        },
        {
          name: 'Cora Jung',
          location: 'Lansing, MI',
          picture: '../../assets/icons/logo.png',
        },
        {
          name: 'Alvin Chung',
          location: 'Grand Rapids, MI',
          picture: '../../assets/icons/logo.png',
        },
        {
          name: 'Samuel Zeleke',
          location: 'Grand Rapids, IL',
          picture: '../../assets/icons/logo.png',
        },
      ],
      filteredData: [],
    };
  }

  BackAction = () => (
    <TopNavigationAction
      onPress={() => this.props.navigation.goBack()}
      icon={this.BackIcon}
    />
  );

  BackIcon = style => <Icon {...style} name="arrow-back" />;

  SearchBarComponent = () => (
    <Layout style={{ width: 300 }}>
      <SearchBar
        lightTheme="true"
        round //To make the searchbar corner round (default square)
        searchIcon={{ size: 24 }} //Size of the search icon
        placeholder="Type Here..."
        containerStyle={{
          backgroundColor: 'white',
          borderColor: 'white',
          marginTop: 0,
        }}
        inputContainerStyle={{
          backgroundColor: 'white',
          marginTop: 0,
          borderColor: 'white',
        }}
        onChangeText={text => this.updateSearch(text)}
        value={this.state.search}
        placeholderTextColor={'#g5g5g5'}
        style={{ borderColor: 'white' }}
      />
    </Layout>
  );

  updateSearch = search => {
    if (search == '') {
      this.setState({ view: 'defualt', search: search });
    } else {
      this.filter('name', search);
    }
  };

  updateInput = val => {
    this.setState({ inputInfo: val });
  };

  renderItemIcon = (style, iconUri) => (
    <Image
      source={require('../../assets/kvlinden1.png')}
      style={{ width: 50, height: 50 }}
    />
  );

  filter = (searchParam, searchText) => {
    let allItems = JSON.parse(JSON.stringify(this.state.originalData));
    let shownItems = allItems.filter(item => {
      return item[searchParam].toLowerCase().includes(searchText.toLowerCase());
    });
    console.log(shownItems);
    this.setState({
      shownData: shownItems,
      search: searchText,
      view: 'searching',
    });
  };

  render() {
    const { search } = this.state;
    return (
      <View style={styles.container}>
        <TopNavigation
          alignment="left"
          leftControl={this.BackAction()}
          rightControls={this.SearchBarComponent()}
        />
        <View style={{ backgroundColor: 'white' }} />
        {this.state.view == 'defualt' ? (
          <SearchDefaultView
            toProfile={() => this.props.navigation.navigate('Profile')}
          />
        ) : (
          <SearchList
            data={this.state.data}
            shownData={this.state.shownData}
            filter={this.filter}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    position: 'relative',
    paddingTop: Constants.statusBarHeight,
  },
});
