import React from 'react';
import { Header, SearchBar } from 'react-native-elements';
import {
  Layout,
  Icon,
  Text,
  TopNavigation,
  TopNavigationAction,
  ApplicationProvider,
  ViewPager as Viewer1,
} from 'react-native-ui-kitten';
import MentorCard from './mentorCard';
import {
  Button,
  Dimensions,
  StyleSheet,
  View,
  ListView,
  ScrollView,
} from 'react-native';
import Constants from 'expo-constants';
import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator,
} from 'rn-viewpager';
import { Card } from 'react-native-paper';

export default class OtherDepartments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          avatar:
            'https://tbcdn.talentbrew.com/company/1758/v2_0/images/dale-dockter.jpg',
          name: 'Pearson vanReeken',
          date: '9:00 AM',
          position: 'Sales Manager',
          company: 'Oringa Inc.',
          grad: 2005,
        },
        {
          name: 'Janice vanBillings',
          avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          date: 'Yesterday',
          position: 'Software Engineer',
          company: 'Google LLC',
          grad: 2015,
        },
        {
          name: 'John Doe',
          avatar:
            'https://alejandrocremades.com/wp-content/uploads/2016/01/rsz_1speaker_-_alejandro_cremades_360.jpg',
          date: 'Yesterday',
          position: 'CEO',
          company: 'Bazinga Tech',
          grad: 2017,
        },
        {
          name: 'John Doe',
          avatar:
            'https://alejandrocremades.com/wp-content/uploads/2016/01/rsz_1speaker_-_alejandro_cremades_360.jpg',
          date: 'Yesterday',
          position: 'CEO',
          company: 'Bazinga Tech',
          grad: 2017,
        },
        {
          name: 'John Doe',
          avatar:
            'https://alejandrocremades.com/wp-content/uploads/2016/01/rsz_1speaker_-_alejandro_cremades_360.jpg',
          date: 'Yesterday',
          position: 'CEO',
          company: 'Bazinga Tech',
          grad: 2017,
        },
      ],
      viewMode: 'default',
      search: '',
    };
  }

  defaultNavigation = () => {
    return (
      <View>
        <View
          style={{
            height: Constants.statusBarHeight,
          }}
        />
        <TopNavigation
          title="Mentors"
          alignment="Left"
          textstyle={{
            fontSize: 20,
            fontWeight: 'bold',
          }}
          rightControls={this.searchTrigger()}
        />
      </View>
    );
  };

  searchTrigger = () => (
    <TopNavigationAction
      onPress={() => {
        this.setState({
          viewMode: 'search',
        });
      }}
      icon={this.SearchIcon}
    />
  );
  
  topNaviMode = () => {
    if (this.state.viewMode == 'default') {
      return this.defaultNavigation();
    } else {
      return this.searchNavigation();
    }
  };

  openChat = name => {
    this.props.navigation.navigate('ChatDM', { name: name });
  };

  _renderTitleIndicator() {
    return <PagerTitleIndicator titles={['One', 'Two', 'Three']} />;
  }

  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={3} />;
  }

  _renderTabIndicator() {
    let tabs = [
      {
        text: 'One',
      },
      {
        text: 'Two',
      },
      {
        text: 'Three',
      },
    ];
    return <PagerTabIndicator tabs={tabs} />;
  }

  eachDepartment (departmentName, peopleList) {
    return(
      <ScrollView>
      <Card 
        style = {styles.eachDepartment}
        >
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
      {this.state.messages.map(convo => {
            return (
              <MentorCard
                date={convo.date}
                name={convo.name}
                avatar={convo.avatar}
                position = {convo.position}
                company = {convo.company}
                openChat={this.openChat}
                grad={convo.grad}
                backgroundColor = {styles.eachDepartment}
              />
            );
          })}
      </Card>
      </ScrollView>
    )
  }
  mainView() {
    return (
      <IndicatorViewPager
        style={{ height: 300, width: Dimensions.get('window').width * 0.95, borderRadius: 20 }}
        indicator={this._renderDotIndicator()}>
        <View style={[styles.indicatorView]}>
          {this.eachDepartment("Business")}
        </View>

        <View style={[styles.indicatorView]}>
          {this.eachDepartment("Math")}
        </View>

        <View style={[styles.indicatorView]}>
          {this.eachDepartment("Physics")}
        </View>
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
    borderRadius: 20
  },

  text: {
    color: '#fff',
    fontSize: 30,
  },
  eachDepartment: {
    marginLeft: 10,
    marignTop: 10,
    backgroundColor: "#FFE8E3",
    borderRadius: 20
  }
});
