
import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as globalStyles from '../styles/global';

const SeparatorLine = ({ style }) => (
  <View style={[styles.line, style]} />
);

const styles = StyleSheet.create({
  line: {
    height: StyleSheet.hairlineWidth,
    width: '95%',
    backgroundColor: globalStyles.MEDIUM_OVERLAY_COLOR,
    marginLeft: '5%',
  },
});

export default SeparatorLine;
