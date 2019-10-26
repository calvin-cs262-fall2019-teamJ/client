// @flow
import React from 'react';
import { Header } from 'react-native-elements';
import { Layout, Text, } from 'react-native-ui-kitten';
import Conversation from './Conversation';
import {
  Button,
  StyleSheet,
  View,
  ListView,
  ScrollView,
} from 'react-native';

import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0
import Fire from '../Fire';

type Props = {
  name?: string,
};

class ChatHome extends React.Component<Props> {
constructor(props){
  super(props)
  this.state={
    messages:[
      {avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330', name: 'Johana James', date: '9:00 AM'},
      {name: 'Janice Billings', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', date:'Yesterday' }
    ]
  }
}
  
 static navigationOptions = ({ navigation }) => ({
    title: "Conversations"
  });

  openChat =(name)=>{
        //for testing purposes 
         Fire.shared.Login('test999@gmail.com', 'test123').then( result=> {
        if(result=== "success") {
          alert(result)
          this.props.navigation.navigate('ChatDM', { name: name})
        }
        else{
          alert(result)
        }
      })
  }
  render() {
    return (
      <Layout>
      <ScrollView>
          {
            this.state.messages.map(convo=>{
              return <Conversation date={convo.date} name= {convo.name} avatar={convo.avatar} openChat={this.openChat}/>
            })

          }
        </ScrollView>
      </Layout>
    );
  }

}

export default ChatHome;
