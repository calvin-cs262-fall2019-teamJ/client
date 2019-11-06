import React from 'react';
import { Header} from 'react-native-elements';
import { Layout, Text, ListItem} from 'react-native-ui-kitten';
import {StyleSheet, View} from 'react-native'


class Experiences extends React.Component<Props> {
  static navigationOptions = ({ navigation }) => ({
  });

  render() {
    return(
      <View style = {styles.container}>
          <Text style = {styles.inside} category = 'P1'>
              Professor of Computer Science{"\n"}
              Calvin University{"\n"}
              1996 - Present 	•  23 years{"\n"}
              Greater Grand Rapids, Michigan Area{"\n"}
              {"\n"}
              Visiting Researcher{"\n"}
              CSIRO ICT Centre{"\n"}
              1997 - 2018  •  21 years{"\n"}
              Sydney, Australia{"\n"}
              {"\n"}
              Research Fellow{"\n"}
              ITRI - University of Brighton{"\n"}
              1993 - 1996  	•  3 years{"\n"}
              Brighton, United Kingdom{"\n"}
          </Text>
          <View style={styles.separator} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  inside:{
    marginLeft: 35
  },
  separator: {
    backgroundColor: '#ececec',
    marginTop: 10,
    height: 2,
    width: 300,
  },
})

export default Experiences;