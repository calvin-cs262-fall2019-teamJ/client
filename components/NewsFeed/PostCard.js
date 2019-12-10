import * as React from 'react';
import {
  Text,
  Dimensions,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { Card } from 'react-native-paper';
import { Button, Input } from 'react-native-ui-kitten';

/*
 * @author Samuel Zeleke sgz4@students.calvin.edu
 * @version 1.0
 *
 * AssetExample is a resuable component that Contains a card, a text,
 * an image, and a button the inverts the color
 *
 */
export default class PostCard extends React.Component {
  /*Function accepts props from parent component
   *and sets the default states
   *
   *@param props properties accepted at declaration
   */
  constructor(props) {
    super(props);
    this.state = {
      annonymity: this.props.annonymity,
      backgroundC: this.props.bgcolor,
      avatar: this.getAvatar(),
      likeTally: 0,
      buttonTitle: 'Like',
      buttonStatus: 'primary',
    };
  }

  /*Function inverts the colors of the items in components with-in the
   *the AssetExample component
   *
   *@param
   */
  increaseLike = () => {
    if (this.state.buttonTitle == 'Like') {
      this.setState({
        likeTally: this.state.likeTally + 1,
        buttonTitle: 'Liked',
        buttonStatus: 'success',
      });
    } else {
      this.setState({
        likeTally: this.state.likeTally - 1,
        buttonTitle: 'Like',
        buttonStatus: 'primary',
      });
    }
  };

  convertTime = timeInSec => {
    if (timeInSec == null) {
      return '';
    }

    let secPerMin = 60;
    let secPerHour = 60 * secPerMin;
    let secPerDay = 24 * secPerHour;
    let secPerWeek = 7 * secPerDay;
    let secPerMon = 4 * secPerWeek;
    let secPerYear = 12 * secPerMon;

    let timeDiff = new Date();
    timeDiff = timeDiff.getSeconds() - timeInSec;

    console.log('log');
    console.log(timeDiff);
    console.log('log2');
    console.log(timeInSec);

    if (timeDiff / secPerMin < 1) {
      return 'A moment ago';
    } else if (timeDiff / secPerHour < 1) {
      timeDiff = parseInt(timeDiff / secPerMin);
      return toString(timeDiff) + ' mins ago';
    } else if (timeDiff / secPerDay < 1) {
      return toString(parseInt(timeDiff / secPerHour)) + ' hours ago';
    } else if (timeDiff / secPerWeek < 1) {
      return toString(parseInt(timeDiff / secPerDay)) + ' days ago';
    } else if (timeDiff / secPerMon < 1) {
      return toString(parseInt(timeDiff / secPerWeek)) + ' weeks ago';
    } else if (timeDiff / secPerYear < 1) {
      return toString(parseInt(timeDiff / secPerMon)) + ' months ago';
    } else {
      return toString(parseInt(timeDiff / secPerYear)) + ' years ago';
    }
  };

  getAvatar() {
    if (this.props.annonymity == true) {
      return (
        <Image
          style={{
            height: 30,
            width: 30,
            marginLeft: 10,
            borderRadius: 15,
            borderWidth: 2,
          }}
          source={require('./18942381.jpg')}
        />
      );
    } else {
      return this.props.userImageSrc;
    }
  }

  navigate_to_profile = () => {
    if (!this.props.annonymity) {
      this.props.profileNav();
    } else {
      alert(
        'The post was sent annonymously; cannot look at the senders profile.'
      );
    }
  };

  /* Renders the component*/
  render() {
    return (
      //Card containing sub-components
      <Card
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginVertical: 6,
          marginLeft: 2,
          marginRight: 2,
          width: Dimensions.get('window').width - 25,
          overflow: 'hidden',
          borderRadius: 15,
        }}>
        {/*main view*/}
        <View
          style={{
            paddingTop: 10,
            maxWidth: Dimensions.get('window').width - 25,
            flex: 1,
            flexDirection: 'column',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              paddingBottom: 10,
            }}>
            <TouchableOpacity onPress={() => this.navigate_to_profile()}>
              {this.state.avatar}
            </TouchableOpacity>
            {/*Name sub-component*/}
            <Text
              style={{
                marginLeft: 10,
                marginTop: 8,
                fontSize: 13,
                textAlign: 'left',
              }}>
              {this.props.anonymous ? 'Anonymous' : this.props.userName} •{' '}
              {this.convertTime(this.props.timeStamp)}
            </Text>
          </View>
          <TouchableWithoutFeedback
            onPress={() => {
              this.props.postView({
                bgcolor: 'white',
                text: this.props.text,
                imageSrc: this.props.imageSrc,
                userImageSrc: this.props.userImageSrc,
                userName: this.props.userName,
                timeStamp: this.props.timeStamp,
                postNav: this.props.postNav,
              });
            }}>
            <Text
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                marginTop: 2,
                fontSize: 14,
                textAlign: 'left',
              }}
              numberOfLines={5}>
              {this.props.text}
            </Text>
          </TouchableWithoutFeedback>
          <TouchableOpacity
            onPress={() => {
              alert("Hi! I'm the image");
            }}
            style={{ paddingTop: 9 }}>
            {this.props.imageSource}
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            marginLeft: 5,
            maxWidth: Dimensions.get('window').width - 30,
          }}>
          <Input placeholder="Comment" size="small" style={{ width: '75%' }} />
          <Button
            status={this.state.buttonStatus}
            onPress={this.increaseLike}
            appearance="ghost"
            style={{ width: '30%' }}>
            Like
          </Button>
        </View>
      </Card>
    );
  }
}