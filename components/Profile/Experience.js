import React from 'react';
import { Header } from 'react-native-elements';
import { Layout, Text, ListItem } from 'react-native-ui-kitten';
import { StyleSheet, View } from 'react-native';

// defines the format of the "Expirience" section of the profile
class Experiences extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [
        {
          title: 'Professor of Computer Science',
          company: 'Calvin University',
          dateRange: '1996 - Present 	•  23 years',
          location: 'Greater Grand Rapids, Michigan Area',
        },
        {
          title: 'Visiting Researcher',
          company: 'CSIRO ICT Centre',
          dateRange: '1997 - 2018  •  21 years',
          location: 'Sydney, Australia',
        },
        {
          title: 'Research Fellow',
          company: 'ITRI - University of Brighton',
          dateRange: '1993 - 1996  	•  3 years',
          location: 'Brighton, United Kingdom',
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.inside} category="P1">
          {this.state.jobs.map(job => {
            return (
              job.title +'\n' +
              job.company + '\n' +
              job.dateRange +'\n' +
              job.location +'\n\n'
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
