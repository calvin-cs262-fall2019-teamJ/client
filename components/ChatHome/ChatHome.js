import React from 'react';
import { Header} from 'react-native-elements';
import { Layout, Text } from 'react-native-ui-kitten';

class ChatHome extends React.Component<Props> {

 static navigationOptions = ({ navigation }) => ({
    title: "Chat Home Page"
  });

 
  render(){
    return (
      <Layout>
        <Text> 
          Soon to be changed
        </Text>
      </Layout>
    );
  }

}

export default ChatHome;