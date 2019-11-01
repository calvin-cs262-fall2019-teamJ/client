import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Card } from 'react-native-paper';
import { Button } from 'react-native-ui-kitten';

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
      backgroundC: this.props.bgcolor,
      text: this.props.text,
      imageSrc: this.props.imageSrc,
      imageUserPhotoSrc: this.props.userImageSrc,
      likeTally: 0,
      buttonTitle: "Like",
      buttonStatus: "primary"
    };
  }

  /*Function inverts the colors of the items in components with-in the
   *the AssetExample component
   *
   *@param
   */
  increaseLike = () =>{

    if (this.state.buttonTitle == "Like"){
      this.setState(
      {
        likeTally: this.state.likeTally + 1,
        buttonTitle: "Liked",
        buttonStatus: "success"
      } 
      )
      alert("Liked " + this.state.likeTally + " times")
    }
    else{
      this.setState(
      {
        likeTally: this.state.likeTally - 1,
        buttonTitle: "Like",
        buttonStatus: "primary"
      } 
      )
      alert("Liked " + this.state.likeTally + " times")
    }
  }

  /* Renders the component*/
  render() {
    return (
      //Card containing sub-components
      <Card style = {
        {
          marginTop: 8
        }
      }>
        {/*View Containing Text and image*/}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
            backgroundColor: "white",
          }}>

          {/*Text sub-component*/}
          <Text
            style={{
              margin: 24,
              marginTop: 0,
              fontSize: 14,
              textAlign: 'left',
            }}>
            {this.props.text}
          </Text>

          {/*Image sub-component*/}
          <Image
            style = {styles.logo}
            source={require('./quick-brown-fox-18.jpg')}
            resizeMode = "stretch"
          />
        </View>

        {/*Button that inverts the color of the images*/}
        <Button
        appearance = "outline" 
        onPress = {() => this.increaseLike()}
        status = {this.state.buttonStatus}
        >
        {this.state.buttonTitle}
        </Button>
      </Card>
    );
  }
}

var style
const styles = StyleSheet.create({
  logo: {
    height: 150,
    width: 350
  },
});