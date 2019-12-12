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
import ChatModal from '../Modal/ChatModal';

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
          name: 'Juliana Lim',
          avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          date: 'Yesterday',
        },
      ],
      display: false,
    };
  }

    OpenMenu = () => (
    <TopNavigationAction onPress={()=> this.props.navigation.toggleDrawer()} icon={this.MenuIcon}/>
  );

   MenuIcon = (style) => (
  <Icon {...style} name='menu-outline' />
);

AddConversation = () => [
  <TopNavigationAction onPress={()=> this.props.navigation.navigate('Search')} icon={this.PlusICon}/>,
   <TopNavigationAction
      onPress={() => this.triggerModal()}
      icon={this.HelpIcon}
    />,
];

close = () =>{
    this.setState(prevState => {
      return{
        display:false,
      };
    });
  } 
  
  triggerModal() {
    this.setState(prevState => {
      return {
        display: true,
      };
    });
  }

  PlusICon = (style) => (
  <Icon {...style} name='plus-outline' />
);

HelpIcon = style => <Icon {...style} name="question-mark-circle-outline" />;

  openChat = name => {
    this.props.navigation.navigate('ChatDM', { name: name })
  }
  render() {
    return (
      <Layout style={{paddingTop: Constants.statusBarHeight}} >    
       <ChatModal
          data="Chat Help Page"
          display={this.state.display}
          close = {this.close}
        />
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
