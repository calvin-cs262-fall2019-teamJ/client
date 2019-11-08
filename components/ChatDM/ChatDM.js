// @flow
import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0
import {
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from 'react-native-ui-kitten';
import Constants from 'expo-constants';

import Fire from '../Fire';

type Props = {
  name?: string,
};

class ChatDM extends React.Component<Props> {
  state = {
    messages: [],
  };

  get user() {
    return {
      name: 'Joe Shmoe',
      _id: Fire.shared.uid,
    };
  }

  BackAction = () => (
    <TopNavigationAction
      onPress={() => this.props.navigation.goBack()}
      icon={this.BackIcon}
    />
  );

  BackIcon = style => <Icon {...style} name="arrow-back" />;

  componentDidMount() {
    Fire.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }

  componentWillUnmount() {
    Fire.shared.off();
  }

  render() {
    return (
      <Layout style={{ paddingTop: Constants.statusBarHeight }}>
        <TopNavigation
          title={this.props.navigation.state.params.name}
          alignment="center"
          leftControl={this.BackAction()}
        /> *
        <GiftedChat
          messages={this.state.messages}
          onSend={Fire.shared.send}
          user={this.user}
        />
      </Layout>
    );
  }
}

export default ChatDM;
