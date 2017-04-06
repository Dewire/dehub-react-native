
import React, { PropTypes } from 'react';
import { TextInput } from 'react-native';
import * as globalStyles from '../styles/global';

const AppTextInput = ({ children, style, ...rest }) => (
  <TextInput
    style={[globalStyles.COMMON_STYLES.text, styles.inputField, style]}
    {...rest}
  >
    {children}
  </TextInput>
);

AppTextInput.propTypes = {
  style: TextInput.propTypes.style,
  children: PropTypes.node,
};

const styles = {
  inputField: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    height: 25,
  },
};

export default AppTextInput;
