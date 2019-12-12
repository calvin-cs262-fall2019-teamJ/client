import React, { Component } from 'react';
import {
  //SearchBar,
  Image,
  Avatar,
} from 'react-native-elements';
import {
  StyleSheet,
  Text,
  Dimensions,
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
import SearchBar from 'react-native-dynamic-search-bar';
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
import * as ThemeStyle from '../ThemeConstants';
import { LinearGradient } from 'expo-linear-gradient';
import { Empty } from '../Utils/customIcons';

import Fire from '../Fire';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'default',
      searchBarShown: 'small',
      searchStr: '',
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
    <Layout style={{ marginTop: 10 }}>
      <TopNavigationAction
        onPress={() => this.props.navigation.goBack()}
        icon={this.BackIcon}
      />
    </Layout>
  );

  BackIcon = style => <Icon {...style} name="arrow-back" />;

  SearchBarlarge = () => (
    <Layout>
      <SearchBar
        pfontColor="#c6c6c6"
        iconColor="#c6c6c6"
        shadowColor="white"
        cancelIconColor="c6c6c6"
        backgroundColor="white"
        fontSize="20"
        cancelIconSize="20"
        iconSize="20"
        noExtraMargin={true}
        onPress={() => {
          console.log("pressed")
        }}
        onChangeText={text => {
          this.updateSearch(text);
        }}
        onPressCancel={() => {
          this.setState({ searchBarShown: 'small', view: 'default' });
        }}
      />
    </Layout>
  );

  SearchBarSmall = () => (
    <Layout style={{ width: 250, overflow: 'hidden' }}>
      <SearchBar
        pfontColor="#c6c6c6"
        iconColor="white"
        shadowColor="white"
        cancelIconColor="c6c6c6"
        backgroundColor="white"
        fontSize="20"
        placeholder="Enter Text here"
        cancelIconSize="20"
        iconSize="20"
        noExtraMargin={true}
        onChangeText={text => {
          this.updateSearch(text)
        }}
        onPressCancel={() => {
          this.setState({ searchBarShown: 'large' });
        }}
        onPress={() => this.setState({ searchBarShown: 'large' })}
      />
    </Layout>
  );

  updateSearch = search => {
    if (search == '') {
      this.setState({ view: 'default', searchStr: search, searchBarShown: 'large' });
    } else {
      this.applySearch(search)
    }
  };

 async applySearch(searchItem){
    console.log("Bill".includes("B"))
    let temp = await Fire.shared.searchUser(searchItem)
    let data = []
    temp.forEach(element=>{
      data.push({
        name: element.profile.nameFirst + " " + element.profile.nameLast,
        location: element.profile.locationCurrent,
        avatar: element.profile.avatar,
        link: element.docID
      })
    })
    this.setState({
      shownData: data,
      searchStr: searchItem,
      view: 'searching',
    });
  }

  filter = (searchParam, searchText) => {
    let allItems = JSON.parse(JSON.stringify(this.state.originalData));
    let shownItems = allItems.filter(item => {
      return item[searchParam].toLowerCase().includes(searchText.toLowerCase());
    });
    //console.log(shownItems);
    this.setState({
      shownData: shownItems,
      searchStr: searchText,
      view: 'searching',
    });
  };

  render() {
    const { search } = this.state;
    return (
        <Layout style={styles.container}>
          <TopNavigation
            alignment="left"
            leftControl={
              this.state.searchBarShown == 'small' ? this.BackAction() : Empty()
            }
            rightControls={
              this.state.searchBarShown == 'small'
                ? this.SearchBarSmall()
                : this.SearchBarlarge()
            }
          />
          <View style={{ backgroundColor: 'white' }} />
          {this.state.view == 'default' ? (
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
        </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    position: 'absolute',
    alignSelf: 'flex-start',
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    marginTop: Constants.statusBarHeight,
    marginBottom: Constants.statusBarHeight,
  },
});
