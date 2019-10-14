import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AdminUsersScreen from './screens/adminUsers';
import persistNavigationState from './persistNavigationState';

const AppNavigator = createStackNavigator({
  Home: {
    screen: AdminUsersScreen,
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default props => <AppContainer {...persistNavigationState} {...props} />;
