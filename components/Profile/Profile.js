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
import Experience from './Experience';
import Projects from './Projects/ProjectSuper';
import Qualifications from './Qualifications';
import { MenuIcon, EditIcon, Empty, MessageIcon } from '../Utils/customIcons';

import Fire from '../Fire';

// Profile screen
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelf: true,
      openSection: '',
      avatar: '',
      name: { first: '', last: '' },
      locationCurrent: '',
      graduatingClass: '',
      major: [],
      projectsData: [],
      experienceData: [],
    };
  }

  // will open the drawer on press
  OpenMenu = () => (
    <TopNavigationAction
      onPress={() => this.props.navigation.toggleDrawer()}
      icon={MenuIcon}
    />
  );

  // conditionally rendered on weather you're viewing your profile or someone elses
  EditProfile = () => (
    <TopNavigationAction
      //onPress={() => this.props.navigation.toggleDrawer()} will naviagate to edit profile page
      icon={this.state.isSelf == true ? EditIcon : MessageIcon}
    />
  );

  toggleSection = section => {
    let condition = '';
    this.state.openSection == section
      ? (condition = 'none')
      : (condition = section);
    this.setState({ openSection: condition });
  };

  // keyword "async" tells javascript that we are implementing a synchronous elements
  async componentDidMount() {
    this.readData();
  }

  async readData() {
    // "await" says do not continue until this command has been fully executed
    let data = await Fire.shared.PullUserInfo('T41MxCh0VTy8qRc7vcPK');
    this.setState({
      name: { first: data.profile.nameFirst, last: data.profile.nameLast },
      locationCurrent: data.profile.locationCurrent,
      graduatingClass: data.profile.gradClass,
      major: data.profile.major,
      content: data.profile.objective,
      list: data.profile.qualifications,
      projectsData: data.profile.projects,
      experienceData: data.profile.experience,
      avatar: data.profile.avatar,
    });
  }

  parseExperience = data => {
    let expList = [];
    data.experience.forEach(job => {
      expList.push({
        title: job.title,
        company: job.company,
        startYear: job.startYear,
        endDate: job.endDate,
        location: job.location,
      });
      return expList;
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TopNavigation
          title="Profile"
          alignment="center"
          leftControl={this.OpenMenu()}
          rightControls={this.EditProfile()}
        />
        <ScrollView styles={{ marginBottom: 10 }}>
          <View style={styles.header}>
            <View style={styles.headerTop}>
              <Image
                style={styles.avatar}
                source={{ uri: this.state.avatar }}
              />
            </View>
            <View>
              <Text style={styles.name}>
                {'\n'}
                {this.state.name.first}
              </Text>
              <Text style={styles.name}>{this.state.name.last}</Text>
              <Text style={styles.userInfo}>
                {'\n'}
                {this.state.locationCurrent}{' '}
              </Text>
              <Text style={styles.userInfo}>
                Year: {this.state.graduatingClass}{' '}
              </Text>
            </View>
          </View>

          <View style={styles.education}>
            <Text style={styles.major}>Major:</Text>
            <Text style={styles.userEdu}>
              {this.state.major.map(program => {
                return program + '\n';
              })}
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
                {this.state.openSection == 'Objective' ? '-' : '+'}{' '}
              </Button>
            </View>
            {this.state.openSection == 'Objective' ? (
              <View style={styles.separator} />
            ) : (
              Empty()
            )}
            {this.state.openSection == 'Objective' ? (
              <Objective content={this.state.content} />
            ) : (
              Empty()
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
                {this.state.openSection == 'Experience' ? '-' : '+'}{' '}
              </Button>
            </View>
            {this.state.openSection == 'Experience' ? (
              <View style={styles.separator} />
            ) : (
              Empty()
            )}
            {this.state.openSection == 'Experience' ? (
              <Experience jobs={this.state.experienceData} />
            ) : (
              Empty()
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
                {this.state.openSection == 'Projects' ? '-' : '+'}{' '}
              </Button>
            </View>
            {this.state.openSection == 'Projects' ? (
              <View style={styles.separator} />
            ) : (
              Empty()
            )}
            {this.state.openSection == 'Projects' ? (
              <Projects data={this.state.projectsData} />
            ) : (
              Empty()
            )}
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
                {this.state.openSection == 'Qualifications' ? '-' : '+'}{' '}
              </Button>
            </View>
            {this.state.openSection == 'Qualifications' ? (
              <View style={styles.separator} />
            ) : (
              Empty()
            )}
            {this.state.openSection == 'Qualifications' ? (
              <Qualifications list={this.state.list} />
            ) : (
              Empty()
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
