import React from 'react';
import { Layout, Text, List, ListItem, } from 'react-native-ui-kitten';

class ChatDM extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      selectedIndex: null,
        data: [
        { message: 'Hello, that was so much fun!', time: '10:00AM' },
        { message: 'I agree, good stuff', time: '10:00AM' },
        { message: 'Never again :(', time: '10:00AM' },
      ]
    };
  }

 static navigationOptions = ({ navigation }) => ({
    title: "Chat DM Page"
  });

renderItem = ({ item, index }) => (
    <ListItem
      title={item.message}
      description={item.time}
      onPress={this.onItemPress}
      titleStyle={{fontWeight: 'normal'}}
    />
  );
   onSelect = (selectedIndex) => {
    this.setState({ selectedIndex });
  };

  render(){
    return (
      <Layout>
           <List
          data={this.state.data}
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }

}

export default ChatDM;