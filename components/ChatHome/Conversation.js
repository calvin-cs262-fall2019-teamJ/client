import React from 'react';
import { Header } from 'react-native-elements';
import { Layout, Text, Avatar } from 'react-native-ui-kitten';
import { StyleSheet} from 'react-native';

class Conversation extends React.Component<Props>{
  constructor(props){
    super(props);
  }

    return (
      <Layout style={styles.container}>
        <Avatar size='medium' style={styles.avatar} source={{ uri: this.props.avatar }} />
        <Text style={styles.text}> {this.props.name} </Text>
      </Layout>
    );
}


const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: 'red',
    borderColor: 'black',
    height: 50,
    display: 'inline-block',
  },
  avatar: {
    margin: 6,
  },
  text:{
    color: 'black'
  }
});

export default Conversation;