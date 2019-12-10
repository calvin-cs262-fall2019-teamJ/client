import React from 'react';
import { Header } from 'react-native-elements';
import { Layout, Text } from 'react-native-ui-kitten';
import { StyleSheet, View, ScrollView, Button } from 'react-native';

// defines the fromat of a given project
class ProjectSub extends React.Component<Props> {
  render() {
    return (
      <Layout stlye={styles.container}>
        <Text category="s1" style={styles.title}>
          {this.props.title}
        </Text>
        <View style={styles.separator} />
        <Text category="p1">{this.props.content}</Text>
        <View style={styles.separator} />
      </Layout>
    );
  }
}

export default ProjectSub;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 80,
    flex: 1,
  },
  title: {
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  separator: {
    backgroundColor: '#ececec',
    marginTop: 10,
    height: 2,
    width: 150,
    marginBottom: 10,
    alignSelf: 'center',
  },
});
