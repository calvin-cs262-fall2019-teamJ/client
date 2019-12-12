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
import { Button, Dimensions, StyleSheet, View, ListView, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import {  LinearGradient } from 'expo-linear-gradient'
import * as ThemeStyle from '../ThemeConstants';
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
    <TopNavigationAction
      onPress={() => this.props.navigation.toggleDrawer()}
      icon={this.MenuIcon}
    />
  );

  MenuIcon = style => <Icon {...style} name="menu-outline" />;

  AddConversation = () => (
    <TopNavigationAction
      onPress={() => this.props.navigation.navigate('Search')}
      icon={this.PlusICon}
    />
  );

  PlusICon = style => <Icon {...style} name="plus-outline" />;

  openChat = name => {
    this.props.navigation.navigate('ChatDM', { name: name });
  };
  render() {
    return (
      <LinearGradient
        colors={[
          'white',
          ThemeStyle.OffWhiteBackground,
          ThemeStyle.OffWhiteBackground,
          ThemeStyle.CalvinBlue,
        ]}
        style={styles.container}>
        <TopNavigation
          title="Conversations"
          alignment="start"
          style={ThemeStyle.StyleConsts.TopHeaderViewStyle}
          titleStyle={ThemeStyle.StyleConsts.TopHeaderTitleStyle}
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
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    //alignItems: 'center',
    //justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    minHeight: Dimensions.get('window').height
  },
});

export default ChatHome;
