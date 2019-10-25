// @flow
import React from 'react';
import { Header } from 'react-native-elements';
import { Layout, Text } from 'react-native-ui-kitten';
import Conversation from './Conversation';

import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0
import Fire from '../Fire';

type Props = {
  name?: string,
};

class ChatHome extends React.Component<Props> {
  
 static navigationOptions = ({ navigation }) => ({
    title: "Conversations"
  });


  render() {
    return (
      <Layout>
        <Conversation name='John Williams' avatar= 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' />
      </Layout>
    );
  }

}

export default ChatHome;
