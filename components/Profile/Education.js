import React from 'react';
import { Header } from 'react-native-elements';
import { Layout, Text, ListItem } from 'react-native-ui-kitten';
import { StyleSheet, View } from 'react-native';
import Fire from '../Fire';

// defines the rendering of the "Education" section of the profile
class Education extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      majors: [],
    };
  }

  render() {
    return (
      <Layout style={styles.container}>
        <Layout style={{ marginLeft: 10 }}>
          <Text category="P1">
            {this.props.majors.map(program => {
              return program + '\n';
            })}
          </Text>
          <View style={styles.separator} />
        </Layout>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
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
});

export default Education;
