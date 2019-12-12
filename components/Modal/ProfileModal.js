// DisplayModal.js

import React from 'react';
import { Modal, View, Image, Text, StyleSheet, Button } from 'react-native';
import { Card } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import * as ThemeStyle from '../ThemeConstants';
import Profile from '../Profile/Profile';

const ProfileModal = props => (
  <Modal
    visible={props.display}
    animationType="slide">
    <LinearGradient
      colors={[
        ThemeStyle.OffWhiteBackground,
        ThemeStyle.OffWhiteBackground,
        ThemeStyle.CalvinBlue,
      ]}
      style={styles.container}>
      <Card style={styles.card}>
        <View>
          <Text style={styles.title}>{props.data}</Text>
          <Text style={styles.text}>
            This is a great opportunity to advertise yourself as one of the top,
            potential candidates in the Calvin Community.
          </Text>
          <Text style={styles.text}>
            Here are some good suggestions to ensure you make a good profile:
          </Text>
          <Text style={styles.steps}>
            1. Make sure your objective is appealing, accurate, and detailed
            enough free of any grammatical errors.
          </Text>
          <Text style={styles.steps}>
            2. Include in any job experiences that are relevant to your major or
            current interests
          </Text>
          <Text style={styles.steps}>
            3. Be specific when describing roles or tasks
          </Text>
          <Text style={styles.steps}>
            4. Make sure to add in any projects you have previously done outside
            of your school work
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
    backgroundColor: '#EFEFEF',
  },
  card: {
    marginTop: 125,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
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

export default ProfileModal;
