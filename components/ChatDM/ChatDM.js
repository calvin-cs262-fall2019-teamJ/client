//@flow
import React from 'react';
import {View, StyleSheet} from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import {
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from 'react-native-ui-kitten';
import Constants from 'expo-constants';


import fire from '../Fire';

export default class ChatDM extends React.Component {
  
  state = {
    messages: []
  };

  get user() {
      return {
        name: this.props.navigation.state.params.name,
        email: this.props.navigation.state.params.email,
        avatar: this.props.navigation.state.params.avatar,
        id: fire.uid,
        _id: fire.uid
    };
  }

    BackAction = () => (
    <TopNavigationAction
      onPress={() => this.props.navigation.goBack()}
      icon={this.BackIcon}
    />
  );

    BackIcon = style => <Icon {...style} name="arrow-back" />;

  render() {
    return (
    <View style = {styles.container}>
    <TopNavigation
          title={this.props.navigation.state.params.name}
          alignment="center"
          leftControl = {this.BackAction()}
        />
      <GiftedChat
        messages={this.state.messages}
        renderBubble={this.renderBubble}
        // onSend={fire.send}
        // user={this.user}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
    );
  }

  componentWillMount() {
    this.setState({
          messages: [
            {
              _id: 1,
              text: 'Hi Samuel Jr.! My company is currently hiring for a Software Development Intern next summer. Would you like to meet up sometime this week and talk about it?',
              createdAt: new Date(),
              user: {
                _id: 2,
                name: this.props.navigation.state.params.name,
                avatar: this.props.navigation.state.params.avatar,
              }
            }
          ]
      });
  }

   onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

    // fire.shared.refOn(message =>
    //   this.setState(previousState => ({
    //     messages: GiftedChat.append(previousState.messages, message)
    //   }))
    // );

  renderBubble (props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#AB4E4E",
          },
          left: {
            backgroundColor: "#E8DC99"
          }
        }}
      />
    )
  }
    // componentWillUnmount() {
  //   fire.shared.off();
  // }
  }





const styles = StyleSheet.create({
    container: {
       paddingTop: Constants.statusBarHeight,
        flex: 1,
    }
})