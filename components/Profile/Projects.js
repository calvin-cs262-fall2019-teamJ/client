import React from 'react';
import { Header} from 'react-native-elements';
import { Layout, Text, ListItem} from 'react-native-ui-kitten';
import {StyleSheet, View} from 'react-native'

class Projects extends React.Component<Props> {
  static navigationOptions = ({ navigation }) => ({
  });

  render() {
    return(
      <View style = {styles.container}>
        <View style = {styles.header}>
          <Text style = {{letterSpacing: 10}} category = 'h5' >PROJECTS</Text>
        </View>
          <Text category = 's1'>
          
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

export default Projects;
