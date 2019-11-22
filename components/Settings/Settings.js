/**
 * Settings.js allows the users to set notification
 * and sound according to their perference
 */
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {
  Layout,
  Toggle,
  Button,
  TopNavigation,
  TopNavigationAction,
  Icon,
} from 'react-native-ui-kitten';
import { Card } from 'react-native-shadow-cards';
import { MenuIcon } from '../Utils/customIcons';
import Fire from '../Fire'

// screen for the "Settings" page
export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notiChecked: false,
      soundChecked: false,
    };
  }

  // naviagates to the account info page
  goToAccount = () => {
    this.props.navigation.navigate('Account');
  };

  // signs out
  goToSignOut = () => {
    this.props.navigation.navigate('SignIn');
  };

  // will open the drawer
  OpenMenu = () => (
    <TopNavigationAction
      onPress={() => this.props.navigation.toggleDrawer()}
      icon={MenuIcon}
    />
  );

  // keyword "async" tells javascript that we are implementing a synchronous elements
  async componentDidMount(){
    this.readData();
  }

  /**queries the database to get booleans of notification and sound
   * and set's them as the state of the settings
   */
  async readData(){
    // "await" says do not continue until this command has been fully executed
    let data = await Fire.shared.PullUserInfo("fW480g7VSdBp6Ragz08A")
    this.setState({
      notiChecked: data.settings.notifications,
      soundChecked: data.settings.sounds,
    }) 
  }

  render() {
    return (
      <View style={styles.container}>
        <TopNavigation
          title="Settings"
          alignment="center"
          leftControl={this.OpenMenu()}
        />
        <Card style={{ padding: 10, margin: 10 }}>
          <View>
            <View style={styles.item}>
              <View style={styles.infoContent}>
                <Text style={styles.info}> Account </Text>
              </View>
              <Button
                style={styles.button}
                appearance="ghost"
                textStyle={styles.buttonText}
                onPress={this.goToAccount.bind(this)}>
                →
              </Button>
            </View>
            <View style={styles.separator} />
            <Toggle
              style={styles.toggle}
              checked={this.state.notiChecked}
              text="Notifications"
              onChange={() =>
                this.setState({ notiChecked: !this.state.notiChecked })
              }
            />
            <View style={styles.separator} />
            <Toggle
              style={styles.toggle}
              checked={this.state.soundChecked}
              text="Sound"
              onChange={() =>
                this.setState({ soundChecked: !this.state.soundChecked })
              }
            />
            <View style={styles.separator} />
            <Button
              style={styles.button}
              appearance="ghost"
              onPress={this.goToSignOut.bind(this)}>
              Log Out
            </Button>
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
  toggle: {
    justifyContent: 'flex-start',
    marginLeft: 20,
  },
  separator: {
    backgroundColor: '#ececec',
    margin: 10,
    height: 2,
    width: 300,
  },
  infoContent: {
    flex: 1,
    paddingLeft: 5,
  },
  info: {
    fontSize: 13,
    marginTop: 10,
    marginLeft: 15,
    color: '#333333',
    fontWeight: 600,
    justifyContent: 'flex-start',
  },
  button: {
    marginTop: 1,
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#333333',
  },
  item: {
    flexDirection: 'row',
  },
});
