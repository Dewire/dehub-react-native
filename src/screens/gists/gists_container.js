
import appConnect from '../containers';
import GistsComponent from './gists_component';
import { logout } from '../../store/actions';
import {
  backgroundRequestActiveWithNoFetchDataSelector,
  refreshRequestActiveSelector,
} from '../../store/selectors';
import { GISTS_FETCH_DATA, setState, fetchData } from './gists_actions';
import { sectionsSelector } from './gists_selectors';

const mapStateToProps = state => ({
  sections: sectionsSelector(state),
  showLoading: backgroundRequestActiveWithNoFetchDataSelector(GISTS_FETCH_DATA, 'gists')(state),
  refreshing: refreshRequestActiveSelector(GISTS_FETCH_DATA)(state),
});

const mapDispatchToProps = dispatch => ({
  onLogoutPressed: () => dispatch(logout()),
  fetchData: (isRefresh = false) => dispatch(fetchData(isRefresh)),
  onGistTap: gist => dispatch(
    setState({ tappedGist: gist }),
  ),
});

export default appConnect(mapStateToProps, mapDispatchToProps)(GistsComponent);
