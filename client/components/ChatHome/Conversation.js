import React from 'react';
import { Header } from 'react-native-elements';
import { Layout, Text, Avatar } from 'react-native-ui-kitten';
import { StyleSheet, View } from 'react-native';

class Conversation extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Layout style={styles.container}>
        <Layout style={styles.avatar} >
          <Avatar
            size="medium"
            source={{ uri: this.props.avatar }}
          />
        </Layout>
        <Layout style={styles.text}>
          <Text> {this.props.name} </Text>
        </Layout>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: '#ff0000',
    height: 50,
    display: 'flex',
    overflow: 'hidden'
  },
  avatar: {
    margin: 6,
    backgroundColor: 'blue',
    width: 45,
  },
  text: {
    color: 'black',
  },
});

export default Conversation;
