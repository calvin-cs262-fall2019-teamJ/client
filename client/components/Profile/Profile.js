import React from 'react';
import { Layout, Text } from 'react-native-ui-kitten';

class Profile extends React.Component<Props> {

 static navigationOptions = ({ navigation }) => ({
    title: "Profile Page"
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

export default Profile;