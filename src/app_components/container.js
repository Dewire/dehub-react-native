
import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
 } from 'react-native';
import * as globalStyles from '../styles/global';

const Container = ({ children, style, showLoading = false }) => (
  <View style={[globalStyles.COMMON_STYLES.container, style]}>
    {(showLoading ? (
      <View style={styles.indicatorContainer}>
        <ActivityIndicator size="large" />
      </View>
    ) : (
      children
    ))}
  </View>
);

const styles = StyleSheet.create({
  indicatorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Container.propTypes = {
  style: View.propTypes.style,
  children: PropTypes.node,
  showLoading: PropTypes.bool,
};

export default Container;
