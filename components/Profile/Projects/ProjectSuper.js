import React from 'react';
import { Header } from 'react-native-elements';
import { Layout, Text, ListItem } from 'react-native-ui-kitten';
import { StyleSheet, View, ScrollView, Button, Animated } from 'react-native';
import Constants from 'expo-constants';
import ProjectSub from './ProjectSub';

class ProjectSuper extends React.Component<Props> {
  constructor(props){
    super(props)
  }

  scrollView_Ref = React.createRef();

  toTop = () => {
    this.scrollView_Ref.current.scrollTo({ x: 0, y: 0, animated: true });
  };
  render() {
    return (
      <View style={styles.container}>        
        <ScrollView
          ref={this.scrollView_Ref}>
          <ProjectSub
            title="A Reusable Platform"
            description="To work effectively in information-rich environments, knowledge workers must be able to distil the most appropriate information from the deluge of information available to them. This is difficult to do manually. Natural language engineers can support these workers by developing information delivery tools, but because of the wide variety of contexts in which information is acquired and delivered, these tools have tended to be domain-specific, ad hoc solutions that are hard to generalise. This paper discusses Myriad, a platform that generalises the integration of sets of resources to a variety of information delivery contexts. Myriad provides resources from natural language generation for discourse planning as well as a service-based architecture for data access. The nature of Myriad's resources is driven by engineering concerns. It focuses on resources that reason about and generate from coarse-grained units of information, likely to be provided by existing information sources, and it supports the integration of pipe-lined planning and template mechanisms. The platform is illustrated in the context of three information delivery applications and is evaluated with respect to its utility"
          />
          <ProjectSub
            title="Generating UML diagrams from task models"
            description="The importance of task analysis and modelling to software system development is well recognised. After all, the central mission for most software systems is to help users accomplish their tasks. However, while object-oriented analysis and design (OOAD) has been established as the major paradigm in the software industry, effectively incorporating task analysis and modelling into that process is still in the realm of research. In this paper, we propose a novel approach for integrating OOAD and Task Modelling. By exploiting the common semantic ground between task models and system behaviour models, we describe how UML diagrams, such as use cases, use case diagrams and scenario diagrams, can be automatically generated from task models represented in a semi-formal notation. We demonstrate our approach with a working example."
          />

        {/* // not working currently, will replace later
         <Button color="black" title="↑" onPress={this.toTop} /> */
         }
          <View style={styles.separator} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  separator: {
    backgroundColor: '#ececec',
    marginTop: 10,
    height: 2,
    width: 300,
  },
});

export default ProjectSuper;
