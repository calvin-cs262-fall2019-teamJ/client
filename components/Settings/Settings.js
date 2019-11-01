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

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notiChecked: false,
      soundChecked: false,
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Setting',
  });

  onPressNoti = () => {
    this.setState({ notiChecked: !this.state.notiChecked });
  };

  onPressSound = soundChecked => {
    this.setState({ soundChecked: !this.state.soundChecked });
  };

  goToAccount = () => {
    this.props.navigation.navigate('Account');
  };

  OpenMenu = () => (
    <TopNavigationAction
      onPress={() => this.props.navigation.toggleDrawer()}
      icon={this.MenuIcon}
    />
  );

  MenuIcon = style => <Icon {...style} name="menu-outline" />;

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
              onChange={this.onPressNoti}
            />
            <View style={styles.separator} />
            <Toggle
              style={styles.toggle}
              checked={this.state.soundChecked}
              text="Sound"
              onChange={this.onPressSound}
            />
            <View style={styles.separator} />
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
