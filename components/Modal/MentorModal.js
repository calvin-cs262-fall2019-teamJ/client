// DisplayModal.js

import React from 'react';
import { Modal, View, Image, Text, StyleSheet, Button } from 'react-native';
import { Card } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import * as ThemeStyle from '../ThemeConstants';

const MentorModal = props => (
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
           The mentorship page is located on the bottom of the tab on the first left. You can also use the search function provided on top to look for a specific user.
          </Text>
          <Text style={styles.steps}>
            1. Tap on the icon, and it’ll locate you to a page with your department displayed on the top
          </Text>
          <Text style={styles.steps}>
            2. You can also use the search function to look for specific types of people based on location, ethnicity, or major
          </Text>
          <Text style={styles.steps}>
            3. If interested, you can then request them by tapping on the button on the far right of the user’s name in the list
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

export default MentorModal;
