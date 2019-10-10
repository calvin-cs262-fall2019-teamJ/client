import React from 'react';
import { Header} from 'react-native-elements';
import {Text, View} from 'react-native';

class NewsFeed extends React.Component<Props> {

 static navigationOptions = ({ navigation }) => ({
    title: "NewsFeed Page"
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

export default NewsFeed;