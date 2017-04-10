
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
