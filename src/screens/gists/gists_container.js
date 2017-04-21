
import appConnect from '../containers';
import GistsComponent from './gists_component';
import { logout } from '../../store/actions';
import { GISTS_FETCH_DATA } from './gists_actions';
import { sectionsSelector } from './gists_selectors';

const mapStateToProps = state => ({
  sections: sectionsSelector(state),
});

const mapDispatchToProps = dispatch => ({
  onLogoutPressed: () => dispatch(logout()),
  fetchData: () => dispatch({ type: GISTS_FETCH_DATA }),
});

export default appConnect(mapStateToProps, mapDispatchToProps)(GistsComponent);
