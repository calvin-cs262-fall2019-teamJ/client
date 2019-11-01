import React, { Component } from 'react';
import { SearchBar, Image } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';
import {
  Button,
  List,
  ListItem,
  Layout
} from 'react-native-ui-kitten';


export default class Search extends React.Component {

   state = {
    search: '',
    data: [
        {name: 'Jane Doe', location: 'Grand Rapids, MI'},
         {name: 'Keith VanderLinden', location: 'Grand Rapids, MI'},
          {name: 'Juliana Lim', location: 'Farmington Hills, MI'},
          {name: 'Keith VanderLinden', location: 'Pontiac, MI'},
           {name: 'Cora Jung', location: 'Lansing, MI'}
    ],
    shownData: [ 
       {name: 'Jane Doe', location: 'Grand Rapids, MI'},
         {name: 'Keith VanderLinden', location: 'Grand Rapids, MI'},
          {name: 'Juliana Lim', location: 'Farmington Hills, MI'},
          {name: 'Keith VanderLinden', location: 'Pontiac, MI'},
           {name: 'Cora Jung', location: 'Lansing, MI'}
    ]
  };

  updateSearch = (search) => {
    this.setState({ search }); 
    let allItems = JSON.parse(JSON.stringify(this.state.data))
   let shownItems = allItems.filter((item) =>{
     return item.name.includes(search)
   })
   this.setState({shownData: shownItems});
};

  render() {
    const { search } = this.state;

  const renderItemIcon = (style) => (
    <Text>
    Test
    </Text>
    );

    const renderItem= ({item, index}) => (
          <ListItem title={`${item.name}`}
          description={`${item.location}`}
          icon={renderItemIcon}
          />
    );

    return (
  <Layout style={styles.container}>
     <SearchBar
     lightTheme
        round //To make the searchbar corner round (default square)
        searchIcon={{size: 24}} //Size of the search icon
        placeholder="Type Here..."
        onChangeText={text => this.updateSearch(text)}
        value={search}
       placeholderTextColor={'#g5g5g5'}
      />
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
        },
 list: {
    height: '100%',
  },
})
