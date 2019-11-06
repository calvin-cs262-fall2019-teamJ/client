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
        <Layout style={{marginLeft: 10}}>
          <Text category = 'P1'>
          I am a Professor and Chair of the Department of Computer Science at Calvin University.
          My background is in mathematics and computer science.
          My research interests are in Natural Language Engineering, Human-Computer Interaction, Software Engineering and Cognitive Science.
          </Text>
          <View style={styles.separator} />
        </Layout>
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
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  separator: {
    backgroundColor: '#ececec',
    marginTop: 10,
    height: 2,
    width: 300,
  },
})

export default Objective;