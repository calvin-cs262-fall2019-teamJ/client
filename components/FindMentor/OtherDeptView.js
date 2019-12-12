import React from 'react';
import { Header, SearchBar } from 'react-native-elements';
import {
  Layout,
  Icon,
  Text,
  TopNavigation,
  TopNavigationAction,
  ViewPager as Viewer1,
} from 'react-native-ui-kitten';
import MentorCard from './mentorCard';
import { Dimensions, StyleSheet, View, ScrollView } from 'react-native';
import * as ThemeStyles from '../ThemeConstants'
import Constants from 'expo-constants';
import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager';
import { Card } from 'react-native-paper';
import { departmentMembers } from '../Utils/SampleData'; // until this comes from the data base, we can keep the members here
import expect, { createSpy, spyOn, isSpy } from 'expect';


// defines the component for the "other deparments" section of the "find mentor" page
export default class OtherDepartments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMode: 'default',
      search: '',
    };
  }

  // shows what "page" we're on
  paginationStatus() {
    return <PagerDotIndicator selectedDotStyle ={{backgroundColor: '#c6c6c6'}} dotStyle={{backgroundColor: '#ededed'}} pageCount={this.props.data.length} />;
  }

  mainView() {
    return (
      <IndicatorViewPager
        style={{
          height: 300,
          width: Dimensions.get('window').width * 0.95,
          borderRadius: 20,
          top: 0,
          backgroundColor: "transparent"
        }}
        indicator={this.paginationStatus()}>
        {this.props.data.map(department => {
          return (
            <View style={[styles.indicatorView]}>
             {DepartmentPage(department.name, department.members)} 
            </View>
          );
        })}
      </IndicatorViewPager>
    );
  }
  
  render() {
    return (
      <Layout style={{ marginTop: 10, backgroundColor: "transparent"}}>
        <Text
          style={{
            fontSize: 20,
            marginLeft: 10,
            marginBottom: 10,
            fontWeight: 'bold',
          }}>
          Other Departments
        </Text>
        {this.mainView()}
      </Layout>
    );
  }
}
// defines the styling for each format for each individual department
export const DepartmentPage = (departmentName, mentorList) => {
  return (
    <ScrollView style={{ bottom: 0 }}>
      <Card style={styles.eachDepartment}>
        <Text
          style={{
            fontSize: 20,
            marginLeft: 10,
            marginBottom: 10,
            marginTop: 15,
            fontWeight: 'bold',
          }}>
          {departmentName}
        </Text>
        {mentorList.map(mentor => {
                console.log(mentor.name)
          return (
            <MentorCard
              name={mentor.name}
              avatar={mentor.avatar}
              position={mentor.position}
              company={mentor.company}
              grad={mentor.grad}
              backgroundColor={styles.eachDepartment}
            />
          );
        })}
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorView: {
    flex: 1,
    maxWidth: Dimensions.get('window').width * 0.99,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'transparent',
    borderRadius: 20,
  },

  text: {
    color: '#fff',
    fontSize: 30,
  },
  eachDepartment: {
    marginLeft: 10,
    marignTop: 10,
    backgroundColor: ThemeStyles.CalvinYellowLight,
    borderRadius: 20,
  },
});
