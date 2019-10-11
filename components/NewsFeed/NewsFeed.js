import React from 'react';
import { Button, Icon, List, ListItem, Layout, Text } from 'react-native-ui-kitten';
import { Image, StyleSheet, ScrollView, SafeAreaView, View, TouchableHighlight } from "react-native";
import Constants from "expo-constants";
import { Card } from "react-native-paper";

import PostCard from './PostCard';

class NewsFeed extends React.Component<Props> {

 static navigationOptions = ({ navigation }) => ({
    title: "Calvin Connect",
    headerLeft: <TouchableHighlight
      onPress = {() => {alert("Hi! I'm Prof. Vander Linden")}}
      >
      <Image
        style = {{
          height: 30,
          width: 30,
          marginLeft: 10,
          borderRadius: 15,
          borderWidth: 2
        }}
        source = {require('../../assets/kvlinden1.png')}
      />
      </TouchableHighlight>,

      headerRight: 
      <TouchableHighlight
      onPress = {() => {alert("You're looking beautiful today!")}}
      >
      <Image
        style = {{
          height: 30,
          width: 30,
          marginRight: 5,
          borderRadius: 15,
          borderWidth: 2
        }}
        source = {require('../../assets/icons/chatbubble.svg')}
      />
      </TouchableHighlight>
  });

profilePress = () => {
  alert("Going to profile")
}
  render(){
    return (
      <SafeAreaView style = {styles.container}>
        <ScrollView style={styles.scrollView}>
          <PostCard 
            bgcolor = "white"
            text = {postText}
            imageSrc = './quick-brown-fox-18.jpg'
            userImageSrc = '../../assets/kvlinden.png'
          />
          <PostCard 
            bgcolor = "white"
            text = {postText}
            imageSrc = './quick-brown-fox-18.jpg'
            userImageSrc = '../../assets/kvlinden.png'
          />
          <PostCard 
            bgcolor = "white"
            text = {postText}
            imageSrc = './quick-brown-fox-18.jpg'
            userImageSrc = '../../assets/kvlinden.png'
          />
          <PostCard 
            bgcolor = "white"
            text = {postText}
            imageSrc = './quick-brown-fox-18.jpg'
            userImageSrc = '../../assets/kvlinden.png'
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    backgroundColor: "#EFEFEF"
  },
  scrollView: {
    backgroundColor: '#EFEFEF',
    justifyContent: "space-between",
    paddingTop: 'flex',
    marginHorizontal: 1,
  }
});

const postText = "The quick brown fox jumped over the lazy dog"
export default NewsFeed;