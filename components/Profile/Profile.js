import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Constants from 'expo-constants';
import {Button} from 'react-native-ui-kitten';

export default class Profile extends Component {

   static navigationOptions = ({ navigation }) => ({
    title: "Profile"
  });

  goToObjective = () => {
     this.props.navigation.navigate('Objective');
  }

   goToActivities = () => {
     this.props.navigation.navigate('Activities');
  }

   goToExperience = () => {
     this.props.navigation.navigate('Experience');
  }

   goToProjects = () => {
     this.props.navigation.navigate('Projects');
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Image style={styles.avatar}
                source = {require ('../../assets/kvlinden1.png')}
              />
              <Text style={styles.name}>Keith</Text>
              <Text style={styles.name}>Vander Linden</Text>
              <Text style={styles.userInfo}>Grand Rapids, MI </Text>
              <Text style={styles.userInfo}>Year: May 2020 </Text>
            </View>
            <View style={styles.headerRight}>
              <Text style={styles.major}>
                Major:
              </Text>
              <Text style={styles.userEdu}> 
                BA in Mathematic{"\n"}
                MS in Computer Science{"\n"}
                PhD in Cognitive Science{"\n"}
              </Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.item}>
              <View style={styles.infoContent}>
                <Text style={styles.info}> Objective / Summary</Text>
              </View>
                <Button style={styles.button} appearance='ghost' textStyle = {styles.buttonText}
                onPress={this.goToObjective.bind(this)}> + </Button>
            </View>

            <View style={styles.item}>
              <View style={styles.infoContent}>
                <Text style={styles.info}> Experience </Text>
              </View>
               <Button style={styles.button} appearance='ghost' textStyle = {styles.buttonText}
               onPress={this.goToExperience.bind(this)}> + </Button>
            </View>

            <View style={styles.item}>
              <View style={styles.infoContent}>
                <Text style={styles.info}>  Projects </Text>
              </View>
               <Button style={styles.button} appearance='ghost' textStyle = {styles.buttonText}
               onPress={this.goToProjects.bind(this)}> + </Button>
            </View>

            <View style={styles.item}>
              <View style={styles.infoContent}>
                <Text style={styles.info}> Activities / Interests </Text>
              </View>
               <Button style={styles.button} appearance='ghost' textStyle = {styles.buttonText}
               onPress={this.goToActivities.bind(this)}> + </Button>
            </View>

          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    flexDirection: "row",
  },
  headerLeft:{
    display: "flex",
    width: "50%",
    height: 300,
    backgroundColor: "maroon",
  },
  headerRight:{
    display: "flex",
    width: "50%",
    height: 300,
    backgroundColor: "maroon",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "gold",
    marginTop:20,
    marginBottom:20,
    marginLeft: 25,
  },
  name:{
    fontSize:22,
    color:"white",
    fontWeight:'600',
    alignSelf: "center",
    position: "flexbox",
  },
  major:{
    fontSize: 22,
    color: "white",
    fontWeight: 500,
    marginTop: 80,
    marginBottom: 10,
  },
  userInfo:{
    fontSize:16,
    color:"white",
    fontWeight:'600',
    alignSelf: "center",
  },
  userEdu:{
    fontSize:15,
    fontWeight: 600,
    alignSelf: "left",
    color: "white",
    // marginTop: 70
  },
  body:{
    backgroundColor: "white",
    height:600,
    alignItems:'center',
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    alignItems:'center',
    paddingLeft:5
  },
  info:{
    fontSize:20,
    marginTop:25,
    color: "black",
  },
    button: {
    marginTop: 20,
    marginLeft: 10
  },
  buttonText: {
    fontSize: 20,
    color: 'black'
  }
});
