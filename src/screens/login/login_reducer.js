
import { LOGOUT } from '../../store/actions';
import { LOGIN_SET_STATE } from './login_actions';

const defaultState = {
  username: '',
  password: '',
  loggedIn: false,
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case LOGOUT:
      return defaultState;
    case LOGIN_SET_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
