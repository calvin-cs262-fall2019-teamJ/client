import React from 'react';
import { Header } from 'react-native-elements';
import { Layout, Text, Avatar } from 'react-native-ui-kitten';
import { StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Conversation extends React.Component<Props>{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <TouchableOpacity style={styles.container} onPress={()=>{this.props.openChat(this.props.name)} } >
        <Avatar style={styles.avatar} size='medium' source={{ uri: this.props.avatar }} />
        <Text style={styles.name}> {this.props.name} </Text>
        <Text style={styles.date}> {this.props.date} </Text>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 15,
    height: 50,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    margin: 5,
    width: 45,
    height: 45,
    borderRadius: 20,
    marginRight: 5
  },
  name:{
    color: '#6B6969',
    fontSize: 20,
  },
  date:{
    marginLeft: 'auto',
    fontSize: 12,
    color: '#888888',
  }
});

export default Conversation;