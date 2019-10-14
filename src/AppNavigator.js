import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AdminUsersScreen from './screens/adminUsers';

const AppNavigator = createStackNavigator({
  Home: {
    screen: AdminUsersScreen,
  },
});

export default createAppContainer(AppNavigator);
