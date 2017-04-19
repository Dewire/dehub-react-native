
import appConnect from '../containers';
import GistsComponent from './gists_component';
import { logout } from '../../store/actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  onLogoutPressed: () => dispatch(logout()),
});

export default appConnect(mapStateToProps, mapDispatchToProps)(GistsComponent);
