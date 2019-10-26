// @flow
import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0
import {
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from 'react-native-ui-kitten';


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
      name: "Joe Shmoe",
      _id: Fire.shared.uid,
    };
  }
  



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
      <Layout>
      <TopNavigation
        title={this.props.navigation.state.params.name}
        alignment='center'
        leftControl={BackAction()}
      />
      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.shared.send}
        user={this.user}
      />
      </Layout>
    );
  }
}

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon}/>
  );

   const BackIcon = (style) => (
  <Icon {...style} name='arrow-back' />
);

export default ChatDM;
