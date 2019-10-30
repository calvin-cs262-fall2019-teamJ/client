import React from 'react';
import { Header} from 'react-native-elements';
import { Layout, Text, ListItem} from 'react-native-ui-kitten';
import {StyleSheet, View} from 'react-native'


class Experience extends React.Component<Props> {
  static navigationOptions = ({ navigation }) => ({
  });

  render() {
    return(
      <View style = {styles.container}>
        <View style = {styles.header}>
          <Text style = {{letterSpacing: 10}} category = 'h5' >EXPERIENCE</Text>
        </View>
          <Text style = {styles.inside} category = 's1'>
            Professor of Computer Science{"\n"}
            Calvin University{"\n"}
            1996 - Present 23 years{"\n"}
            Greater Grand Rapids, Michigan Area{"\n"}
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  header:{
    marginLeft: 10,
    marginBottom: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: 350,
  },
  inside:{
    marginLeft: 10
  }
})

export default Experience;