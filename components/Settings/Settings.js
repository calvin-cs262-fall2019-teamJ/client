import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Layout, Toggle } from 'react-native-ui-kitten';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class Settings extends React.Component {
  state = {
    checked: false,
  };

  onChange = (checked) => {
    this.setState({ checked});
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          SETTINGS
        </Text>
      </View>
      <Layout style=(styles.container)>
      <Toggle
        checked={this.state.checked}
        text='Notifications'
        onChange={this.onChange}
      />
      <Toggle
        checked={this.state.checked}
        text='DM Notifications'
        onChange={this.onChange}
      />
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
