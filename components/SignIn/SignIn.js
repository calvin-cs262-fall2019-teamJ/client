/* This file defines the methods and visuals for the "Sign In"  Component*/
import React from 'react';
import { Alert, TextInput, View, StyleSheet, Image } from 'react-native';
import { Layout, Text, List, ListItem, Input, Button} from 'react-native-ui-kitten';

/* signIn class accepts props from parent component
 * sets the default states
 */
class SignIn extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
    };
  }
 
 //sets navigation of Sign In page
 static navigationOptions = ({ navigation }) => ({
    title: "Welcome"
  });
  
  //needs username and password to log in
  onLogin() {
    const {username, password} = this.state;
  }
  
  //navigates to "newsfeed" page
  gotoNewsFeed=()=> {
    this.props.navigation.navigate('NewsFeed');
  }
  
  //navigates to "sign up" page
  gotoSignUp=()=> {
    this.props.navigation.navigate('SignUp');
  }
  
  //displays the page
  render() {
    return (
      <Layout style={styles.container}>
        <Image
        style={{width: '45%', height: '25%'}}
        source={require('../../assets/icons/logo.png')}
        />
        <Text style={styles.text}>
          Calvin Connect
        </Text>
        <Input
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <Input
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <Button
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={this.gotoNewsFeed.bind(this)}
        >
          Login
        </Button>
        <Button
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={this.gotoSignUp.bind(this)}
        >
          Sign Up
        </Button>
      </Layout>
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
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: '#edf2f2',
  },
  button: { 
  borderRadius: 8,
  backgroundColor: 'white',
  borderColor: 'white'
  },
  buttonText: { color: '#71b1c8' },
  text: { marginTop: 10, marginBottom: 20, color: 'black', fontSize: 20 },
});

export default SignIn;
