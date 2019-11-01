// @flow
import React from 'react';
import { Header } from 'react-native-elements';
import {
  Layout,
  Icon,
  Text,
  TopNavigation,
  TopNavigationAction,
} from 'react-native-ui-kitten';
import Conversation from './Conversation';
import { Button, StyleSheet, View, ListView, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0
import Fire from '../Fire';

type Props = {
  name?: string,
};

class ChatHome extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          avatar:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
          name: 'Johana James',
          date: '9:00 AM',
        },
        {
          name: 'Janice Billings',
          avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          date: 'Yesterday',
        },
      ],
    };
  }

    OpenMenu = () => (
    <TopNavigationAction onPress={()=> alert('Will Open drawer')} icon={this.MenuIcon}/>
  );

   MenuIcon = (style) => (
  <Icon {...style} name='menu-outline' />
);

AddConversation = () => (
  <TopNavigationAction onPress={()=> alert('will add conversation')} icon={this.PlusICon}/>
);

  PlusICon = (style) => (
  <Icon {...style} name='plus-outline' />
);

  openChat = name => {
    console.log(this.props.navigation)
    this.props.navigation.navigate('ChatDM', { name: name })
  }
  render() {
    return (
      <Layout style={{paddingTop: Constants.statusBarHeight}} >    
      <TopNavigation
        title='Conversations'
        alignment='center'
        leftControl={this.OpenMenu()}
        rightControls={this.AddConversation()}
    />
        <ScrollView>
          {this.state.messages.map(convo => {
            return (
              <Conversation
                date={convo.date}
                name={convo.name}
                avatar={convo.avatar}
                openChat={this.openChat}
              />
            );
          })}
        </ScrollView>
      </Layout>
    );
  }
}

export default ChatHome;
