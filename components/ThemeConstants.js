import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

export const StyleConsts = StyleSheet.create({
  TopHeaderViewStyle: {
    backgroundColor: "transparent",
    paddingTop: Constants.statusBarHeight + 10,
  },
  TopHeaderTitleStyle:{
    fontSize: 24,
    fontWeight: "bold"
  }
});

export const CalvinBlue = "#71B1C8"
export const CalvinWhite = "#FFFFFF"
export const CalvinMaroon = "#8C2131"
export const CalvinRed = "#C2002F"
export const CalvinYellow = "#F3CD00"