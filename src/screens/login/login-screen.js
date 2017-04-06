
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import * as globalStyles from '../../styles/global';
import AppTextInput from '../../app-components/AppTextInput';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    props.navigator.toggleNavBar({
      to: 'hidden',
      animated: false,
    });
  }

  render() {
    return (
      <View style={[globalStyles.COMMON_STYLES.container, styles.mainContainer]}>
        <Text>Hello!</Text>
        <AppTextInput style={styles.textInput} />
        <AppTextInput style={[styles.textInput, { marginTop: 20 }]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    paddingTop: 30,
  },
  textInput: {
    marginLeft: 50,
    marginRight: 50,
  },
});
