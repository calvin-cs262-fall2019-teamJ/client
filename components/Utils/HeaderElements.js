import React from 'react';
import { TopNavigation, TopNavigationAction } from 'react-native-ui-kitten';
import { withNavigation } from 'react-navigation';
import { MenuIcon, BackIcon } from './customIcons';
import { useNavigation, useNavigationParam} from 'react-navigation-hooks'

export const OpenMenu =()=> (
      <TopNavigationAction
        onPress={()=> this.props.navigation.toggleDrawer() }
        icon={MenuIcon}
      />
  );

export const BackButton = ()=> (
      <TopNavigationAction
        onPress={() => this.props.navigation.goBack()}
        icon={BackIcon}
      />
    );