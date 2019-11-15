/* This file defines the methods and visuals for the "Sign In"  Component*/
import React from 'react';
import {
  Alert,
  TextInput,
  View,
  StyleSheet,
  Image,
  Animated,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import {
  Layout,
  Text,
  List,
  ListItem,
  Input,
  Button,
  TopNavigation,
  TopNavigationAction,
} from 'react-native-ui-kitten';
import Fire from '../Fire';

/* signIn class accepts props from parent component
 * sets the default states
 */
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'test999@gmail.com',
      password: 'test123',
    };
  }

  //sets navigation of Sign In page

  //navigates to "newsfeed" page
  handleLogin = () => {
    if (this.state.email == '' || this.state.password == '') {
      alert('Fill in the required fields');
    } else {
      Fire.shared.Login(this.state.email, this.state.password).then(result => {
        if (result === 'success') {
          this.props.navigation.navigate('Home');
        } else {
          alert(result);
        }
      });
    }
  };

  //navigates to "sign up" page
  gotoSignUp = () => {
    this.props.navigation.navigate('SignUp');
  };

  //displays the page
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Image
          style={{ width: 265, height: 295 }}
          source={require('../../assets/icons/logo.png')}
        />
        <Text style={styles.text}>Calvin Connect</Text>
        <Input
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          placeholder={'email'}
          style={styles.input}
        />
        <Input
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <Button
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={this.handleLogin.bind(this)}>
          Login
        </Button>
        <Button
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={this.gotoSignUp.bind(this)}>
          Sign Up
        </Button>
        <View style={{ height: 60 }} />
      </KeyboardAvoidingView>
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
    borderColor: 'white',
  },
  buttonText: { color: '#71b1c8' },
  text: { marginTop: 10, marginBottom: 20, color: 'black', fontSize: 20 },
});

export default SignIn;
