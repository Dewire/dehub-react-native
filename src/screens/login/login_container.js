
import { connect } from 'react-redux';
import { isSpinActiveSelector } from '../../store/selectors';
import LoginComponent from './login_component';
import { login, setState } from './login_actions';
import { loggedInSelector, isLoginButtonEnabledSelector } from './login_selectors';

const mapStateToProps = state => ({
  loginButtonEnabled: isLoginButtonEnabledSelector(state),
  showLoginSpinner: isSpinActiveSelector(state),
  isLoggedIn: loggedInSelector(state),
});

const mapDispatchToProps = dispatch => ({
  onUsernameChangeText: username => dispatch(setState({ username })),
  onPasswordChangeText: password => dispatch(setState({ password })),
  onLoginPress: () => dispatch(login()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
