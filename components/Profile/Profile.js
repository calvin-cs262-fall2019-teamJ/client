import React from 'react';
import { Header} from 'react-native-elements';
import {Text, View} from 'react-native';

class Profile extends React.Component<Props> {

 static navigationOptions = ({ navigation }) => ({
    title: "Profile Page"
  });

 
  render(){
    return (
      <View>
        <Text> 
          Soon to be changed
        </Text>
      </View>
    );
  }

}

export default Profile;