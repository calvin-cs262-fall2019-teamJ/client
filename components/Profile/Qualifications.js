import React from 'react';
import { Header } from 'react-native-elements';
import { Layout, Text, ListItem } from 'react-native-ui-kitten';
import { StyleSheet, View } from 'react-native';

class Qualifications extends React.Component<Props> {
   constructor(props) {
    super(props);
    this.state = {
      list:[
        "Profound knowledge of computer science concepts including current technology trends",
        "Significant experience leading research teams and conducting independent research",
      "Adept at applying creative and productive teaching methods ",
      "Proficient in the use of most current computer programs and software applications",
      " Strong motivational and problem solving abilities ",
      "Impressive observational skills", 
      ]
    };
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.inside} category="P1">
          {this.state.list.map(quality => {
            return (
              '•' + quality + '\n'
            );
          })}
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
