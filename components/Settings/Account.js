import React from 'react';
import {
  Text,
  TopNavigation,
  TopNavigationAction,
  Icon,
} from 'react-native-ui-kitten';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-shadow-cards';
import { BackIcon } from '../Utils/customIcons';
import Fire from '../Fire'

// screen for the "Account Info" page
class Account extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      email: 'kvlinden@calvin.edu',
      phoneNumber: '(616) 526-7111',
    };
  }

  // enables back button to function
  BackAction = () => (
    <TopNavigationAction
      onPress={() => this.props.navigation.goBack()}
      icon={BackIcon}
    />
  );

  // keyword "async" tells javascript that we are implementing a synchronous elements
  async componentDidMount(){
    this.readData();
  }

  async readData(){
    // "await" says do not continue until this command has been fully executed
    let data = await Fire.shared.PullUserInfo("fW480g7VSdBp6Ragz08A")
      console.log(data.settings.email)
    this.setState({
      email: data.settings.email,
      phoneNumber: data.settings.phoneNumber,
    }) 
  }

  render() {
    return (
      <View style={styles.container}>
        <TopNavigation
          title="Account Settings"
          alignment="center"
          leftControl={this.BackAction()}
        />
        <Card style={{ padding: 10, margin: 10 }}>
          <View>
            <Text style={styles.title}> Email </Text>
            <Text style={styles.text}> {this.state.email}</Text>
            <View style={styles.separator} />
            <Text style={styles.title}> Phone </Text>
            <Text style={styles.text}> {this.state.phoneNumber}</Text>
            <View style={styles.separator} />
            <Text style={styles.title}> Password </Text>
            <Text style={{ fontSize: 9, marginLeft: 12 }}> ●●●●●●●● </Text>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 3,
    marginLeft: 10,
  },
  text: {
    marginLeft: 10,
  },
  separator: {
    backgroundColor: '#ececec',
    margin: 10,
    height: 2,
    width: 300,
  },
});

export default Account;
