import React from 'react';
import { Header } from 'react-native-elements';
import { Layout, Text, ListItem } from 'react-native-ui-kitten';
import { StyleSheet, View, ScrollView, Button, Animated } from 'react-native';
import Constants from 'expo-constants';
import ProjectSub from './ProjectSub';

import Fire from '../../Fire';

class ProjectSuper extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    console.log(this.props.data);
  }
  // creates a reference to allow naviatation to top of scrollview
  scrollView_Ref = React.createRef();

  // function will scrol to top on buttion press, currently not in action
  toTop = () => {
    this.scrollView_Ref.current.scrollTo({ x: 0, y: 0, animated: true });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView ref={this.scrollView_Ref}>
          {this.props.data.map(project => {
            return (
              <ProjectSub title={project.title} content={project.content} />
            );
          })}

          {/* // not working currently, will replace later
         <Button color="black" title="↑" onPress={this.toTop} /> */}
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
