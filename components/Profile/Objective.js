import React from 'react';
import { Header} from 'react-native-elements';
import { Layout, Text, ListItem} from 'react-native-ui-kitten';
import {StyleSheet, View} from 'react-native'


class Objective extends React.Component<Props> {
  static navigationOptions = ({ navigation }) => ({
  });

  render() {
    return(
      <View style = {styles.container}>
        <View style = {styles.header}>
          <Text style = {{letterSpacing: 10}} category = 'h5' >OBJECTIVE</Text>
        </View>
          <Text category = 's1'>
          I am a Professor and Chair of the Department of Computer Science at Calvin University.
          My background is in mathematics and computer science.
          My research interests are in Natural Language Engineering, Human-Computer Interaction, Software Engineering and Cognitive Science.
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    backgroundColor: "white",
    marginTop: 20

  },
  header:{
    marginBottom: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: 350,
  }
})

export default Objective;