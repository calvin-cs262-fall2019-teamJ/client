import React from 'react';
import {
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from 'react-native-ui-kitten';

export const BackIcon = style => <Icon {...style} name="arrow-back" />;

export const MenuIcon = style => <Icon {...style} name="menu-outline" />;

export const SearchIcon = style => <Icon {...style} name="search-outline" />;

export const EditIcon = style => <Icon {...style} name="edit-outline" />;

export const HelpIcon = style => <Icon {...style} name="question-mark-circle-outline" />;

export const MessageIcon = style => (
  <Icon {...style} name="message-circle-outline" />
);

export const Empty = () => <Layout />;
