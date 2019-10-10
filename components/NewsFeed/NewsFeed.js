import React from 'react';
import { Layout, Text } from 'react-native-ui-kitten';

class NewsFeed extends React.Component<Props> {

 static navigationOptions = ({ navigation }) => ({
    title: "NewsFeed Page"
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

export default NewsFeed;