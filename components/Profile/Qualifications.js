import React from 'react';
import { Header } from 'react-native-elements';
import { Layout, Text, ListItem } from 'react-native-ui-kitten';
import { StyleSheet, View } from 'react-native';
import Fire from '../Fire'

// defines the the rendering of the
class Qualifications extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.inside} category="P1">
          {this.props.list.map(quality => {
            return '• ' + quality + '\n\n';
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
