/**
 * Settings.js allows the users to set notification
 * and sound according to their perference
 */
import * as React from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native';
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
import { LinearGradient } from 'expo-linear-gradient';
import * as ThemeStyles from '../ThemeConstants';
import { StyleConsts } from '../ThemeConstants';
import Fire from '../Fire';

// screen for the "Settings" page
export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notiChecked: false,
      soundChecked: false,
      email: '',
      phoneNumber: '',
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
  async componentDidMount() {
    this.readData();
  }

  /**queries the database to get booleans of notification and sound
   * and set's them as the state of the settings
   */
  async readData() {
    // "await" says do not continue until this command has been fully executed
    let data = await Fire.shared.PullUserInfo('vnX0Jux5a6p2yQXKv58a');
    this.setState({
      notiChecked: data.settings.notifications,
      soundChecked: data.settings.sounds,
      email: data.settings.email,
      phoneNumber: data.settings.phoneNumber,
    });
  }

  render() {
    return (
      <LinearGradient
        colors={[
          'white',
          ThemeStyles.OffWhiteBackground,
          ThemeStyles.OffWhiteBackground,
          ThemeStyles.CalvinBlue,
        ]}
        style={styles.container}>
        <TopNavigation
          title="Settings"
          alignment="start"
          style={StyleConsts.TopHeaderViewStyle}
          titleStyle={StyleConsts.TopHeaderTitleStyle}
        />
        <View style={styles.item}>
          <View style={styles.infoContent}>
            <Text style={styles.info}>Account Settings </Text>
          </View>
        </View>
        <Card style={{ padding: 10, margin: 10 }}>
          <View>
            <Text style={styles.title}> Email </Text>
            <Text style={styles.text}> {this.state.email}</Text>
            <View style={styles.separator} />
            <Text style={styles.title}> Phone </Text>
            <Text style={styles.text}> {this.state.phoneNumber}</Text>
            <View style={styles.separator} />
            <Text style={styles.title}> Password </Text>
            <Text style={styles.password}> ●●●●●●●● </Text>
          </View>
        </Card>
        <View style={styles.item}>
          <View style={styles.infoContent}>
            <Text style={styles.info}>App Settings </Text>
          </View>
        </View>
        <Card style={{ padding: 10, margin: 10 }}>
          <View>
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
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEFEF',
    alignItems: 'center',
    height: Dimensions.get('window').height,
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
    fontWeight: '600',
    justifyContent: 'flex-start',
  },
  button: {
    marginTop: 1,
    marginLeft: 10,
  },
  item: {
    flexDirection: 'row',
  },
  text: {
    marginBottom: 3,
    color: '#989898',
    marginTop: 10,
  },
  password: {
    fontSize: 9,
    marginTop: 10,
    color: '#989898',
  },
});
