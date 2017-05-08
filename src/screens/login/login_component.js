
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
import { isIOS } from '../../util/platform';

export default class LoginComponent extends Component {

  constructor(props) {
    super(props);
    props.navigator.toggleNavBar({
      to: 'hidden',
      animated: false,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isLoggedIn && nextProps.isLoggedIn) {
      const command = isIOS ? 'push' : 'resetTo';
      this.props.navigator[command]({
        screen: GISTS_SCREEN,
        title: 'Gists',
      });
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
          testID="usernameInput"
        />
        <AppTextInput
          style={[styles.textInput, { marginTop: 15, marginBottom: 30 }]}
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={this.props.onPasswordChangeText}
          value={this.props.password}
          testID="passwordInput"
        />
        <SpinnerReplacer isSpinning={this.props.showLoginSpinner}>
          <Button
            disabled={!this.props.loginButtonEnabled}
            onPress={this.props.onLoginPress}
            title="Login"
            color={isIOS ? 'white' : 'gray'}
            testID="loginButton"
          />
        </SpinnerReplacer>
      </View>
    );
  }
}

LoginComponent.navigatorStyle = {
  navBarBackgroundColor: globalStyles.BAR_COLOR,
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    paddingTop: 30,
  },
  textInput: {
    width: 175,
  },
});
