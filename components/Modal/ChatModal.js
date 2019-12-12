// DisplayModal.js

import React from 'react';
import { Modal, View, Image, Text, StyleSheet, Button } from 'react-native';
import { Card } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import * as ThemeStyle from '../ThemeConstants';

const ChatModal = props => (
  <Modal
    visible={props.display}
    animationType="slide"
    onRequestClose={() => {
      this.setModalVisible(false);
    }}>
   <LinearGradient
        colors={[
          ThemeStyle.OffWhiteBackground,
          ThemeStyle.OffWhiteBackground,
          ThemeStyle.CalvinBlue,
        ]}
        style={styles.container}>
      <Card style = {styles.card}>
        <View>
          <Text style={styles.title}>{props.data}</Text>
          <Text style={styles.text}>
           Our Chat offers both students and alumni to connect with one another, giving them the opportunity to discuss about projects, internships, and so on.
          </Text>
          <Text style={styles.steps}>
            1. To start a new conversation, click on the + icon located at the top right of your page
          </Text>
          <Text style={styles.steps}>
            2. Type in the name you would like to connect with (make sure you check location, major, and graduation year)
          </Text>
          <Text style={styles.steps}>
            3. Once you find the person, tap on their profile leading you into a new chatroom between you and the user
          </Text>
          <Text style={styles.steps}>
            4. Type in a message, and hit send!
          </Text>
          <Button
            onPress={props.close}
            title = "close"
          />
        </View>
      </Card>
      </LinearGradient>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF'
  },
  card: {
    marginTop: 125,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10
  },
  title: {
    fontSize: 30,
    fontStyle: 'arial',
    fontWeight: 15,
    marginLeft: 75,
    marginBottom: 25,
  },
  text: {
    fontSize: 20,
    fontStyle: 'arial',
    marginBottom: 35,
    justifyContent: 'center',
  },
  steps: {
    fontSize: 20,
    marginBottom: 5,
    fontStyle: 'arial',
    marginLeft: 30,
    margin: 10,
  },
});

export default ChatModal;
