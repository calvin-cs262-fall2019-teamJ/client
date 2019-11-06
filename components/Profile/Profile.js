import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import {
  Layout,
  Toggle,
  Button,
  TopNavigation,
  TopNavigationAction,
  Icon,
} from 'react-native-ui-kitten';

import Objective from './Objective';
import Activities from './Activities';
import Experience from './Experience';
import Projects from './Projects/ProjectSuper';
import Qualifications from './Qualifications';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSection: 'none',
    };
  }

  OpenMenu = () => (
    <TopNavigationAction
      onPress={() => this.props.navigation.toggleDrawer()}
      icon={this.MenuIcon}
    />
  );

  MenuIcon = style => <Icon {...style} name="menu-outline" />;

  Empty = () => <View />;

  toggleSection = section => {
    let condition = '';
    this.state.openSection == section
      ? (condition = 'none')
      : (condition = section);
    this.setState({ openSection: condition });
  };

  render() {
    return (
      <View style={styles.container}>
        <TopNavigation
          title="Conversations"
          alignment="center"
          leftControl={this.OpenMenu()}
        />
        <ScrollView styles={{ marginBottom: 10 }}>
          <View style={styles.header}>
            <View style={styles.headerTop}>
              <Image
                style={styles.avatar}
                source={require('../../assets/kvlinden1.png')}
              />
            </View>
            <View>
              <Text style={styles.name}>{'\n'}Keith</Text>
              <Text style={styles.name}>Vander Linden</Text>
              <Text style={styles.userInfo}>{'\n'}Grand Rapids, MI </Text>
              <Text style={styles.userInfo}>Year: May 2020 </Text>
            </View>
          </View>

          <View style={styles.education}>
            <Text style={styles.major}>Major:</Text>
            <Text style={styles.userEdu}>
              BA in Mathematics{'\n'}
              MS in Computer Science{'\n'}
              PhD in Cognitive Science{'\n'}
            </Text>
          </View>

          <View style={styles.body}>
            <View style={styles.item}>
              <View style={styles.infoContent}>
                <Text style={styles.info}> Objective </Text>
              </View>
              <Button
                style={styles.button}
                appearance="ghost"
                textStyle={styles.buttonText}
                onPress={() => this.toggleSection('Objective')}>
                {' '}
                +{' '}
              </Button>
            </View>
            {this.state.openSection == 'Objective' ? (
              <View style={styles.separator} />
            ) : (
              this.Empty()
            )}
            {this.state.openSection == 'Objective' ? (
              <Objective />
            ) : (
              this.Empty()
            )}
            <View style={styles.item}>
              <View style={styles.infoContent}>
                <Text style={styles.info}> Experience </Text>
              </View>
              <Button
                style={styles.button}
                appearance="ghost"
                textStyle={styles.buttonText}
                onPress={() => this.toggleSection('Experience')}>
                {' '}
                +{' '}
              </Button>
            </View>
            {this.state.openSection == 'Experience' ? (
              <View style={styles.separator} />
            ) : (
              this.Empty()
            )}
            {this.state.openSection == 'Experience' ? (
              <Experience />
            ) : (
              this.Empty()
            )}
            <View style={styles.item}>
              <View style={styles.infoContent}>
                <Text style={styles.info}> Projects </Text>
              </View>
              <Button
                style={styles.button}
                appearance="ghost"
                textStyle={styles.buttonText}
                onPress={() => this.toggleSection('Projects')}>
                {' '}
                +{' '}
              </Button>
            </View>
            {this.state.openSection == 'Projects' ? (
              <View style={styles.separator} />
            ) : (
              this.Empty()
            )}
            {this.state.openSection == 'Projects' ? <Projects /> : this.Empty()}
            <View style={styles.item}>
              <View style={styles.infoContent}>
                <Text style={styles.info}> Qualifications </Text>
              </View>
              <Button
                style={styles.button}
                appearance="ghost"
                textStyle={styles.buttonText}
                onPress={() => this.toggleSection('Qualifications')}>
                {' '}
                +{' '}
              </Button>
            </View>
            {this.state.openSection == 'Qualifications' ? (
              <View style={styles.separator} />
            ) : (
              this.Empty()
            )}
            {this.state.openSection == 'Qualifications' ? (
              <Qualifications />
            ) : (
              this.Empty()
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: '1',
  },
  header: {
    flexDirection: 'row',
    display: 'flex',
    height: 175,
    backgroundColor: 'maroon',
  },
  headerTop: {
    width: '50%',
  },
  avatar: {
    width: 130,
    height: 130,
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 25,
  },
  userInfo: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
    alignSelf: 'center',
  },
  education: {
    backgroundColor: 'maroon',
    height: 120,
  },
  name: {
    fontSize: 22,
    color: 'white',
    fontWeight: '600',
    alignSelf: 'center',
    position: 'flexbox',
  },
  major: {
    fontSize: 22,
    color: 'white',
    fontWeight: 500,
    marginBottom: 5,
    marginLeft: 30,
  },
  userEdu: {
    fontSize: 15,
    fontWeight: 600,
    alignSelf: 'left',
    color: 'white',
    marginLeft: 30,
  },
  body: {
    backgroundColor: 'white',
    flex: '1',
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
  },
  infoContent: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 5,
  },
  info: {
    fontSize: 20,
    marginTop: 20,
    color: 'black',
  },
  button: {
    marginTop: 20,
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'black',
  },
  separator: {
    backgroundColor: '#ececec',
    marginTop: 10,
    marginLeft: 10,
    height: 2,
    width: 300,
  },
});
