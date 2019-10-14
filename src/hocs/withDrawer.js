import React, { useRef, useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';

const renderNavigationView = () => (
  <View style={styles.renderView}>
    <Text>Something menu</Text>
  </View>
);

const withDrawer = Component => ({ drawerProps, ...props }) => {
  const [drawer, setDrawer] = useState();
  const drawerRaw = useRef();
  useEffect(() => {
    setDrawer(drawerRaw.current);
  }, [drawerRaw]);
  return (
    <DrawerLayout renderNavigationView={renderNavigationView} ref={drawerRaw} {...drawerProps}>
      <Component {...props} openDrawer={drawer ? drawer.openDrawer : () => {}} />
    </DrawerLayout>
  );
};

const styles = StyleSheet.create({
  renderView: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default withDrawer;
