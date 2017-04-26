
import React, { PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as globalStyles from '../styles/global';

const SectionHeader = ({ title, style }) => (
  <View style={[styles.sectionHeader, style]} >
    <Text style={styles.text}>{title}</Text>
  </View>
);

SectionHeader.propTypes = {
  style: View.propTypes.style,
  title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  sectionHeader: {
    flex: 1,
    backgroundColor: globalStyles.LIGHT_OVERLAY_COLOR,
    height: 25,
    justifyContent: 'center',
    paddingHorizontal: globalStyles.PADDING_HORIZONTAL,
  },
  text: {
    color: globalStyles.TEXT_COLOR,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default SectionHeader;
