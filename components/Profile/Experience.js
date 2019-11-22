import React from 'react';
import { Header } from 'react-native-elements';
import { Layout, Text, ListItem } from 'react-native-ui-kitten';
import { StyleSheet, View } from 'react-native';
import Fire from '../Fire';

// defines the format of the "Expirience" section of the profile
class Experiences extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.inside} category="P1">
          {this.props.jobs.map(job => {
            return (
              job.title +
              '\n' +
              job.company +
              '\n' +
              job.startDate +
              ' - ' +
              job.endDate +
              '\n' +
              job.location +
              '\n\n'
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
  },
  inside: {
    marginLeft: 35,
  },
  separator: {
    backgroundColor: '#ececec',
    marginTop: 10,
    height: 2,
    width: 300,
  },
});

export default Experiences;
