import React from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Image } from 'react-native';
import { Layout, Text, List, ListItem } from 'react-native-ui-kitten';


class SignIn extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
    };
  }

 static navigationOptions = ({ navigation }) => ({
    title: "Welcome"
  });

onLogin() {
  const {username, password} = this.state;
}

gotoNewsFeed=()=> {
  this.props.navigation.navigate('NewsFeed');
}

gotoSignUp=()=> {
  this.props.navigation.navigate('SignUp');
}

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: '35%', height: '25%',}}
          source={require('../../assets/icons/logo.png')}
        />
        
        <Text style={{marginBottom: 20}}>
          Calvin Connect
        </Text>

        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.gotoNewsFeed.bind(this)}
        />

        <Button
          title={'Sign Up'}
          style={styles.input}
          onPress={this.gotoSignUp.bind(this)}
        />
            
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    marginBottom: 10,
  },
});

export default SignIn;