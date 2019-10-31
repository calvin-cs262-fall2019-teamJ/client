import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { Layout, Toggle } from 'react-native-ui-kitten';

export default class Settings extends Component {

  state = {
    checked: false,
  };

  onChange = (checked) => {
    this.setState({ checked });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          SETTINGS
        </Text>
      </View>
      <Layout style={styles.container}>
        <Toggle
          style={styles.toggle}
          checked={this.state.changed}
          text='Notifications'
          onChange={this.onChange}
        />
        <Toggle
          style={styles.toggle}
          checked={this.state.changed}
          text='Toggle Me'
          onChange={this.onChange}
        />
        <Toggle
          style={styles.toggle}
          checked={this.state.changed}
          text='Toggle Me'
          onChange={this.onChange}
        />
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  toggle: {
    marginVertical: 4,
    marginHorizontal: 4,
  },
});