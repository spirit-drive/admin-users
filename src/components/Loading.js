import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

const Loading = ({ style }) => (
  <View style={[styles.root, style]}>
    <ActivityIndicator size="small" color="#43D1DE" />
  </View>
);

Loading.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Loading.defaultProps = {
  style: undefined,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loading;
