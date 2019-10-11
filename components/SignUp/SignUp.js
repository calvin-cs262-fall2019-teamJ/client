import React from 'react';
import {
  Alert,
  Button,
  TextInput,
  View,
  StyleSheet,
  Image,
  Text,
  ImageBackground
} from 'react-native';

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

  static navigationOptions = ({ navigation }) => ({
    title: 'Sign Up Page',
  });

  onSignUp() {
    const { email } = this.state;
    Alert.alert('Confirmation Email to ' + `${email}` + ' has been sent!');
  }

  gotoPage = () => {
    this.props.navigation.navigate('SignIn');
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: '25%', height: '15%', marginBottom: 70, margin: 'center'}}
          source={require('../../assets/icons/calvinconnect.png')}
          />
        <TextInput
          value={this.state.first}
          onChangeText={first => this.setState({ first })}
          placeholder={'First Name'}
          style={styles.input}
        />
        <TextInput
          value={this.state.last}
          onChangeText={last => this.setState({ last })}
          placeholder={'Last Name'}
          style={styles.input}
        />
        <TextInput
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          placeholder={'Email Address'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />

        <Button
          title={'Sign Up'}
          style={styles.input}
          onPress={this.onSignUp.bind(this)}
        />

        <Button
          title={'Sign in'}
          style={styles.input}
          onPress={this.gotoPage.bind(this)}
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

  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'black',
    marginBottom: 30,
  },
});

export default SignUp;
