import AsyncStorage from '@react-native-community/async-storage';

const key = 'NavigationStateDEV1';

export default __DEV__
  ? {
      persistNavigationState: async navState => {
        try {
          await AsyncStorage.setItem(key, JSON.stringify(navState));
        } catch (err) {
          // handle the error according to your needs
        }
      },
      loadNavigationState: async () => {
        const jsonString = await AsyncStorage.getItem(key);
        return JSON.parse(jsonString);
      },
    }
  : {};
