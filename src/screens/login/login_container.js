import appConnect from '../containers';
import { login, setState, navigateToGists } from './login_actions';
import {
  usernameSelector,
  passwordSelector,
  loggedInSelector,
  isLoginButtonEnabledSelector,
  isLoginSpinnerActiveSelector,
} from './login_selectors';
import LoginComponent from './login_component';

const mapStateToProps = state => ({
  username: usernameSelector(state),
  password: passwordSelector(state),
  loginButtonEnabled: isLoginButtonEnabledSelector(state),
  showLoginSpinner: isLoginSpinnerActiveSelector(state),
  isLoggedIn: loggedInSelector(state),
});

const mapDispatchToProps = dispatch => ({
  onUsernameChangeText: username => dispatch(setState({ username })),
  onPasswordChangeText: password => dispatch(setState({ password })),
  onLoginPress: () => dispatch(login()),
  navigateToGists: loginState => dispatch(navigateToGists(loginState)),
});

export default appConnect(mapStateToProps, mapDispatchToProps)(LoginComponent);
