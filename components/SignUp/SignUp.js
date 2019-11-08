/* This file defines the methods and visuals for the "Sign Up"  Component*/
import React from 'react';
import {
  Alert,
  TextInput,
  View,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
} from 'react-native';
import { Input, Button, Layout } from 'react-native-ui-kitten';

/* signUp class accepts props from parent component
 * sets the default states
 */
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '',
      email: '',
      password: '',
    };
  }

  //sets navigation of Sign Up page
  static navigationOptions = ({ navigation }) => ({
    title: 'Sign Up',
  });

  //displays email when "sign up" is clicked. Will send info to database on future implimentations
  onSignUp() {
    const { email } = this.state;
    Alert.alert('Confirmation Email to ' + `${email}` + ' has been sent!');
  }

  //naviates to the "sign in" page
  gotoPage = () => {
    this.props.navigation.navigate('SignIn');
  };

  //displays the page
  render() {
    return (
      <Layout style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../assets/icons/logo.png')}
        />
        <Input
          value={this.state.first}
          onChangeText={first => this.setState({ first })}
          placeholder={'First Name'}
          style={styles.input}
        />
        <Input
          value={this.state.last}
          onChangeText={last => this.setState({ last })}
          placeholder={'Last Name'}
          style={styles.input}
        />
        <Input
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          placeholder={'Email Address'}
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
          onPress={this.onSignUp.bind(this)}
          style={styles.button}
          textStyle={styles.buttonText}>
          Sign Up
        </Button>

        <Button
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={this.gotoPage.bind(this)}>
          Sign In
        </Button>
      </Layout>
    );
  }
}

//organizes and structures display
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 265,
    height: 295,
    marginBottom: 30,
  },
  input: {
    width: 200,
    height: 44,
    borderRadius: 20,
    backgroundColor: '#edf2f2',
    marginBottom: 10,
  },
  button: {
    borderRadius: 8,
    backgroundColor: 'white',
    borderColor: 'white',
  },
  buttonText: { color: '#71b1c8' },
});

export default SignUp;
