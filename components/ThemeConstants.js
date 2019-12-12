// import components
import {Platform, StyleSheet} from 'react-native';
import Constants from 'expo-constants';

// make constant headers
export const StyleConsts = StyleSheet.create({
  TopHeaderViewStyle: {
    backgroundColor: "transparent",
    marginTop: Constants.statusBarHeight
  },
  TopHeaderTitleStyle:{
    fontSize: Platform.OS === 'ios' ? 24: 30,
    fontWeight: "bold",
    paddingVertical: 10
  }
});

// make variables for each color
export const CalvinBlue = "#71B1C8"
export const CalvinWhite = "#FFFFFF"
export const CalvinMaroon = "#8C2131"
export const CalvinRed = "#C2002F"
export const CalvinYellow = "#F3CD00"
export const CalvinYellowLight = "#ffe866"
export const OffWhiteBackground = '#EFEFEF'
