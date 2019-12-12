/**
 * Profile.js shows all the user informations including their career,
 * objectives, skills and more. All users have a profile page that
 * other users can view.
 */
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
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects/ProjectSuper';
import Qualifications from './Qualifications';
import { MenuIcon, EditIcon, Empty, MessageIcon } from '../Utils/customIcons';
import { LinearGradient } from 'expo-linear-gradient';
import * as ThemeStyles from '../ThemeConstants';
import { StyleConsts } from '../ThemeConstants';
import { Card } from 'react-native-shadow-cards';
import Fire from '../Fire';
import ProfileModal from '../Modal/ProfileModal';

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
      type: '',
      content: '',
      display: false,
    };
  }

  // will open the drawer on press
  OpenMenu = () => (
    <TopNavigationAction
      onPress={() => this.props.navigation.toggleDrawer()}
      icon={MenuIcon}
    />
  );

  close = () => {
    this.setState(prevState => {
      return {
        display: false,
      };
    });
  };

   HelpIcon = style => <Icon {...style} name="question-mark-circle-outline" />;

  // conditionally rendered on weather you're viewing your profile or someone elses
  EditProfile = () => [
    <TopNavigationAction
      //onPress={() => this.props.navigation.toggleDrawer()} will naviagate to edit profile page
      icon={this.state.isSelf == true ? EditIcon : MessageIcon}
    />,
    <TopNavigationAction
      onPress={() => this.triggerModal()}
      icon={this.HelpIcon}
    />,
  ];


  triggerModal() {
    this.setState(prevState => {
      return {
        display: true,
      };
    });
  }



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

  /**queries the database to get all user info and set them
   * as state of profile
   */
  async readData() {
    // "await" says do not continue until this command has been fully executed
    let data = await Fire.shared.PullUserInfo('vnX0Jux5a6p2yQXKv58a');
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
      type: data.type,
    });
  }

  // parsing data for experience and pushing them into a list
  parseExperience = data => {
    let expList = [];
    data.experience.forEach(job => {
      expList.push({
        title: job.title,
        company: job.company,
        startDate: job.startDate,
        endDate: job.endDate,
        location: job.location,
      });
      return expList;
    });
  };

  render() {
    return (
      <LinearGradient
        colors={[
          'white',
          ThemeStyles.OffWhiteBackground,
          ThemeStyles.OffWhiteBackground,
          ThemeStyles.CalvinBlue,
        ]}
        style={styles.container}>
        <TopNavigation
          title="Profile"
          alignment="start"
          style={StyleConsts.TopHeaderViewStyle}
          titleStyle={StyleConsts.TopHeaderTitleStyle}
          rightControls={this.EditProfile()}
        />
         <ProfileModal
          data="Profile Help Page"
          display={this.state.display}
          close = {this.close}
        />
        <ScrollView styles={{ marginBottom: 10 }}>
          <View style={styles.header}>
            <View style={styles.center}>
              <Image
                style={styles.avatar}
                source={{ uri: this.state.avatar }}
              />
              <View style={styles.typeContainer}>
                <Text style={styles.type} appearance="alternative">
                  {this.state.type}
                </Text>
              </View>
            </View>
          </View>
          <Card style={styles.card}>
            <View style={styles.body}>
              <View style={styles.center}>
                <Text style={styles.name}>
                  {this.state.name.first} {this.state.name.last}
                </Text>
                <Text style={styles.center}>{this.state.locationCurrent} </Text>
                <Text style={styles.objective}>{this.state.content}</Text>
              </View>
              <View style={styles.item}>
                <View style={styles.infoContent}>
                  <Text style={styles.info}> Education </Text>
                </View>
                <Button
                  style={styles.button}
                  appearance="ghost"
                  textStyle={styles.buttonText}
                  onPress={() => this.toggleSection('Education')}>
                  {' '}
                  {this.state.openSection == 'Education' ? '-' : '+'}{' '}
                </Button>
              </View>
              {this.state.openSection == 'Education' ? (
                <View style={styles.separator} />
              ) : (
                Empty()
              )}
              {this.state.openSection == 'Education' ? (
                <Education majors={this.state.major} />
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
          </Card>
        </ScrollView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEFEF',
    alignItems: 'center',
  },
  header: {
    backgroundColor: 'transparent',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    overflow: 'hidden',
    marginBottom: 30,
    marginTop: 20,
    borderWidth: 3,
    borderColor: ThemeStyles.CalvinBlue,
  },
  typeContainer: {
    borderRadius: 20,
    backgroundColor: 'transparent',
    width: 80,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 15,
    borderColor: ThemeStyles.CalvinBlue,
    borderWidth: 2,
    resizeMode: 'contain',
  },
  type: {
    fontSize: 15,
    color: ThemeStyles.CalvinBlue,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 22,
    color: 'black',
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  objective: {
    fontSize: 15,
    color: '#949494',
    fontStyle: 'italic',
    alignSelf: 'center',
    textAlign: 'center',
    margin: 5,
  },
  body: {
    backgroundColor: 'transparent',
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
  card: {
    marginTop: 20,
    marginBottom: 80,
  },
});
