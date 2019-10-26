import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import { Card } from 'react-native-paper';
import { Button } from 'react-native-ui-kitten';

export default class PostHeader extends React.Component {

  componentDidMount(){
    console.log(this.props)
  }

  returnImageSrc = () => {
    return this.props.userImageSrc
  }
  render () {
    return (
      <View
            style={{
              flex: 1,
              flexDirection: 'row',
              paddingBottom: 10
            }}>
            <TouchableHighlight
              onPress={() => {
                alert("Hi! I'm Prof. Vander Linden");
              }}>
              <Image
                style={{
                  height: 30,
                  width: 30,
                  marginLeft: 10,
                  borderRadius: 15,
                  borderWidth: 2,
                }}
                source= { require(this.returnImageSrc())}
              />
            </TouchableHighlight>
            {/*Name sub-component*/}
            <Text
              style={{
                marginLeft: 10,
                marginTop: 8,
                fontSize: 13,
                textAlign: 'left',
              }}>
              {this.props.userName} • {this.props.timeStamp}
            </Text>
          </View>
    );
  }
}