import React from 'react';
import { Header} from 'react-native-elements';
import { Layout, Text, ListItem} from 'react-native-ui-kitten';
import {StyleSheet, View, ScrollView, Button} from 'react-native';
import Constants from 'expo-constants';


class Projects extends React.Component<Props> {
  static navigationOptions = ({ navigation }) => ({
  });

toTop = () => {
   this.scroll.scrollTo({x: 0, y: 0, animated: true});
}

  render() {
    return(
      <View style = {styles.container}>
        <ScrollView ref={(c) => {this.scroll = c}}>
          <View style = {styles.header}>
            <Text style = {{letterSpacing: 10}} category = 'h5' >PROJECTS</Text>
          </View>
          <Text style = {styles.inside} category = 's1'>
            <Text style = {styles.title}>
            A reusable platform{"\n"}
            </Text>
To work effectively in information-rich environments, knowledge workers must be able to distil the most appropriate information from the deluge of information available to them. This is difficult to do manually. Natural language engineers can support these workers by developing information delivery tools, but because of the wide variety of contexts in which information is acquired and delivered, these tools have tended to be domain-specific, ad hoc solutions that are hard to generalise. This paper discusses Myriad, a platform that generalises the integration of sets of resources to a variety of information delivery contexts. Myriad provides resources from natural language generation for discourse planning as well as a service-based architecture for data access. The nature of Myriad's resources is driven by engineering concerns. It focuses on resources that reason about and generate from coarse-grained units of information, likely to be provided by existing information sources, and it supports the integration of pipe-lined planning and template mechanisms. The platform is illustrated in the context of three information delivery applications and is evaluated with respect to its utility.{"\n"}{"\n"}
            <Text style = {styles.title}>
            Generating UML diagrams from task models{"\n"}
            </Text>
The importance of task analysis and modelling to software system development is well recognised. After all, the central mission for most software systems is to help users accomplish their tasks. However, while object-oriented analysis and design (OOAD) has been established as the major paradigm in the software industry, effectively incorporating task analysis and modelling into that process is still in the realm of research. In this paper, we propose a novel approach for integrating OOAD and Task Modelling. By exploiting the common semantic ground between task models and system behaviour models, we describe how UML diagrams, such as use cases, use case diagrams and scenario diagrams, can be automatically generated from task models represented in a semi-formal notation. We demonstrate our approach with a working example.{"\n"}
          </Text>
          <Button color= 'black' title='↑' onPress={this.toTop} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  header:{
    marginLeft: 10,
    marginBottom: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: 350,
  },
  inside:{
    marginLeft: 10
  },
  title:{
    fontWeight: 800,
    marginBottom: 9,
    textTransform: 'uppercase',
  }
})

export default Projects;
