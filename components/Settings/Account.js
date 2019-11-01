import React from 'react';
import { Header} from 'react-native-elements';
import { Layout, Text, ListItem} from 'react-native-ui-kitten';
import {StyleSheet, View} from 'react-native'
import Constants from 'expo-constants';
import {Card} from 'react-native-shadow-cards';

class Account extends React.Component<Props> {
  static navigationOptions = ({ navigation }) => ({
  });

  render() {
    return(
      <View style={styles.container}>
        <Card style={{padding: 10, margin: 10,}}>
          <View>
          <Text style={styles.title}> Email </Text>
          <Text> kvlinden@calvin.edu </Text>
          <View style={styles.separator} />   
          <Text style={styles.title}> Phone </Text>
          <Text> (616) 526-7111 </Text>
          <View style={styles.separator} />  
          <Text style={styles.title}> Change Password </Text>
          <Text style={{fontSize: 9}}> ●●●●●●●● </Text>
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
  },
  separator: {
    backgroundColor: '#ececec',
    margin: 10,
    height: 2,
    width: 300,
  },
})
 
export default Account;