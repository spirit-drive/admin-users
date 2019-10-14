import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigator from './src/AppNavigator';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <AppNavigator />
    </Provider>
  );
};

export default App;
