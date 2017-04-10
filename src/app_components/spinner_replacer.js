
import React, { PropTypes } from 'react';
import { View, ActivityIndicator } from 'react-native';

const SpinnerReplacer = ({ isSpinning, children }) => (
  (isSpinning ? (
    <ActivityIndicator />
  ) : (
    <View>
      {children}
    </View>
  ))
);

SpinnerReplacer.propTypes = {
  isSpinning: PropTypes.bool.isRequired,
};

export default SpinnerReplacer;
