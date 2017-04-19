
import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
} from 'react-native';
import { GISTS_SCREEN } from '../screens';
import * as globalStyles from '../../styles/global';
import AppTextInput from '../../app_components/app_text_input';
import SpinnerReplacer from '../../app_components/spinner_replacer';

export default class LoginComponent extends Component {

  constructor(props) {
    super(props);
    // eslint-disable-next-line dehub/no-props-navigator
    props.setNavigator(props.navigator);
    props.navigate(navigator =>
      navigator.toggleNavBar({
        to: 'hidden',
        animated: false,
      }),
    );
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isLoggedIn && nextProps.isLoggedIn) {
      this.props.navigate(navigator =>
        navigator.push({
          screen: GISTS_SCREEN,
          title: 'Gists',
        }),
      );
    }
  }

  render() {
    return (
      <View style={[globalStyles.COMMON_STYLES.container, styles.mainContainer]}>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={{ marginTop: 75, marginBottom: 50 }}
        />
        <AppTextInput
          style={styles.textInput}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Username"
          onChangeText={this.props.onUsernameChangeText}
          value={this.props.username}
        />
        <AppTextInput
          style={[styles.textInput, { marginTop: 15, marginBottom: 30 }]}
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={this.props.onPasswordChangeText}
          value={this.props.password}
        />
        <SpinnerReplacer isSpinning={this.props.showLoginSpinner}>
          <Button
            disabled={!this.props.loginButtonEnabled}
            onPress={this.props.onLoginPress}
            title="Login"
            color="white"
          />
        </SpinnerReplacer>
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
