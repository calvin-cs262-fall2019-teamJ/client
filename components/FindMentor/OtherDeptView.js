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
import Constants from 'expo-constants';
import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager';
import { Card } from 'react-native-paper';
import { departmentMembers } from '../Utils/SampleData'; // until this comes from the data base, we can keep the memebers here

// defines the component for the "other deparments" section of the "find mentor" page
export default class OtherDepartments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departmentList: [
        { name: 'Physics', members: departmentMembers },
        { name: 'Math', members: departmentMembers },
        { name: 'Business', members: departmentMembers },
      ],
      viewMode: 'default',
      search: '',
    };
  }

  // shows what "page" we're on
  paginationStatus() {
    return <PagerDotIndicator pageCount={3} />;
  }

  mainView() {
    return (
      <IndicatorViewPager
        style={{
          height: 300,
          width: Dimensions.get('window').width * 0.95,
          borderRadius: 20,
          bottom: 0,
        }}
        indicator={this.paginationStatus()}>
        {this.props.data.map(department => {
          return (
            <View style={[styles.indicatorView]}>
              {Department(department.name, department.members)}
            </View>
          );
        })}
      </IndicatorViewPager>
    );
  }
  
  render() {
    return (
      <Layout style={{ marginTop: 20 }}>
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
export const Department = (departmentName, peopleList) => {
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
        {peopleList.map(convo => {
          return (
            <MentorCard
              date={convo.date}
              name={convo.name}
              avatar={convo.avatar}
              position={convo.position}
              company={convo.company}
              openChat={this.openChat}
              grad={convo.grad}
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
    maxWidth: Dimensions.get('window').width * 0.95,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'white',
    borderRadius: 20,
  },

  text: {
    color: '#fff',
    fontSize: 30,
  },
  eachDepartment: {
    marginLeft: 10,
    marignTop: 10,
    backgroundColor: '#FFE8E3',
    borderRadius: 20,
  },
});
