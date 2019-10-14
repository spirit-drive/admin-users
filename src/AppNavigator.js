import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import UsersScreen from './screens/users';

const AppNavigator = createStackNavigator({
  Home: {
    screen: UsersScreen,
  },
});

export default createAppContainer(AppNavigator);
