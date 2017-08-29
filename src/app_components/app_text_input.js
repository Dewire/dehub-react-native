import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import * as globalStyles from '../styles/global';

const AppTextInput = ({ children, style, containerFlex, ...rest }) => (
  // We wrap the text input in a View here to remove inconsistencies that exist between the
  // iOS and the Android implementation. For example the iOS TextInput seems to want to expand
  // as much as possible horizontally, and it doesn't respect alignItems on it's parent.
  <View style={{ flex: (containerFlex || containerFlex === 0) ? containerFlex : -1 }}>
    <TextInput
      style={[globalStyles.COMMON_STYLES.text, styles.inputField, style]}
      underlineColorAndroid="transparent"
      {...rest}
    >
      {children}
    </TextInput>
  </View>
);

AppTextInput.propTypes = {
  style: TextInput.propTypes.style,
  children: PropTypes.node,
};

const styles = {
  inputField: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 2,
    padding: 5,
    height: 35,
    fontSize: 14,
  },
};

export default AppTextInput;
