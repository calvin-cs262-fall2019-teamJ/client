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
  TopNavigationAction
} from 'react-native-ui-kitten';
import Constants from 'expo-constants';

export default class Search extends React.Component {

   state = {
    search: '',
     inputInfo: '',
    data: [
        {name: 'Jane Doe', location: 'Grand Rapids, MI', picture: '../../assets/icons/logo.png'},
         {name: 'Keith VanderLinden', location: 'Grand Rapids, MI', picture: '../../assets/kvlinden1.png'},
          {name: 'Juliana Lim', location: 'Farmington Hills, MI',picture: '../../assets/icons/logo.png'},
          {name: 'Keith VanderLinden', location: 'Pontiac, MI',picture: '../../assets/icons/logo.png'},
           {name: 'Cora Jung', location: 'Lansing, MI',picture: '../../assets/icons/logo.png'},
            {name: 'Alvin Chung', location: 'Grand Rapids, MI',picture: '../../assets/icons/logo.png'},
            {name: 'Samuel Zeleke', location: 'Grand Rapids, IL',picture: '../../assets/icons/logo.png'}
    ],
    shownData: [ 
        {name: 'Jane Doe', location: 'Grand Rapids, MI', picture: '../../assets/icons/logo.png'},
         {name: 'Keith VanderLinden', location: 'Grand Rapids, MI', picture: '../../assets/kvlinden1.png'},
          {name: 'Juliana Lim', location: 'Farmington Hills, MI',picture: '../../assets/icons/logo.png'},
          {name: 'Keith VanderLinden', location: 'Pontiac, MI',picture: '../../assets/icons/logo.png'},
           {name: 'Cora Jung', location: 'Lansing, MI',picture: '../../assets/icons/logo.png'},
            {name: 'Alvin Chung', location: 'Grand Rapids, MI',picture: '../../assets/icons/logo.png'},
            {name: 'Samuel Zeleke', location: 'Grand Rapids, IL',picture: '../../assets/icons/logo.png'}
    ],
    filteredData: [ 
    ]
  };
  
 BackAction = () => (
    <TopNavigationAction onPress={()=> this.props.navigation.goBack()} icon={this.BackIcon}/>
  );

   BackIcon = (style) => (
  <Icon {...style} name='arrow-back' />
);

  updateSearch = (search) => {
    this.setState({ search }); 
    let allItems = JSON.parse(JSON.stringify(this.state.filteredData))
   let shownItems = allItems.filter((item) =>{
     return item.name.includes(search)
   })
   this.setState({shownData: shownItems});
};

  updateInput=(val)=>{
    this.setState({inputInfo: val })
  }

  renderItemIcon = (style, iconUri) => (
      <Image source={require('../../assets/kvlinden1.png')} style={{ width:50, height:50 }}/>
    );

  filter = (text) => {
    let allItems = JSON.parse(JSON.stringify(this.state.data))
   let shownItems = allItems.filter((item) =>{
     return item.location.includes(text)
   })
   this.setState({filteredData: shownItems});
   this.setState({shownData: shownItems})
  }

  render() {
    const { search } = this.state;
    const renderItem= ({item, index}) => (
          <ListItem title={`${item.name}`}
          description={`${item.location}`}
          iconUri = {`${item.picture}`}
          icon ={iconUri => this.renderItemIcon(iconUri)}
      />
    );

    return (
  <Layout style={styles.container}>
      <TopNavigation
        alignment='center'
        leftControl={this.BackAction()}
      />
     <SearchBar
     lightTheme
        round //To make the searchbar corner round (default square)
        searchIcon={{size: 24}} //Size of the search icon
        placeholder="Type Here..."
        onChangeText={text => this.updateSearch(text)}
        value={search}
       placeholderTextColor={'#g5g5g5'}
      />
     <Input
          style = {styles.input}
          size = 'small'
          placeholder = "Type Location"
          value={this.state.inputInfo}
          onChangeText={text => this.updateInput(text)}
        />
        <Button  style = {styles.button}
          onPress={()=> this.filter(this.state.inputInfo)}
          >FILTER</Button>
       <List
            style={styles.list}
            data = {this.state.shownData}
            renderItem={renderItem}
          />
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
 container: {
          flexDirection: 'flex',
          paddingVertical: 'flex',
          paddingHorizontal: 'flex',
          paddingTop: Constants.statusBarHeight,
        },
 list: {
    height: '100%',
  },
  input:{
    flexDirection: 'flex-start',
    flex: 1,
    marginTop: 3,
    marginRight: '55%'
  },
  button: {
    width: 90,
    height: 30,
    marginLeft: '47%',
    backgroundColor: 'maroon',
    borderColor: 'maroon',
    borderRadius: 25
  }
})
