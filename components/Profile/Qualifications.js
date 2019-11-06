import React from 'react';
import { Header } from 'react-native-elements';
import { Layout, Text, ListItem } from 'react-native-ui-kitten';
import { StyleSheet, View } from 'react-native';

class Qualifications extends React.Component<Props> {
  static navigationOptions = ({ navigation }) => ({});

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.inside} category="P1">
          • Profound knowledge of computer science {'\n'} concepts including
          current technology trends {'\n'}• Significant experience leading
          research teams {'\n'} and conducting independent research {'\n'}•
          Adept at applying creative and productive {'\n'} teaching methods{' '}
          {'\n'}• Proficient in the use of most current computer {'\n'} programs
          and software applications {'\n'}• Strong motivational and problem
          solving abilities {'\n'}• Impressive observational skills{'\n'}
        </Text>
        <View style={styles.separator} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  inside: {
    marginLeft: 10,
  },
  separator: {
    backgroundColor: '#ececec',
    marginTop: 10,
    height: 2,
    width: 300,
  },
});

export default Qualifications;
