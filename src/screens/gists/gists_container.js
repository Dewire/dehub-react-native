
import { connect } from 'react-redux';
import GistsComponent from './gists_component';
import { logout } from '../../base/actions';
import {
  backgroundRequestActiveWithNoFetchDataSelector,
  refreshRequestActiveSelector,
} from '../../base/selectors';
import { GISTS_FETCH_DATA, setState, fetchData, navigateToViewGist } from './gists_actions';
import { sectionsSelector } from './gists_selectors';

const mapStateToProps = state => ({
  sections: sectionsSelector(state),
  showLoading: backgroundRequestActiveWithNoFetchDataSelector(GISTS_FETCH_DATA, 'gists')(state),
  refreshing: refreshRequestActiveSelector(GISTS_FETCH_DATA)(state),
});

const mapDispatchToProps = dispatch => ({
  onLogoutTapped: navigator => dispatch(logout(navigator)),
  fetchData: (isRefresh = false) => dispatch(fetchData(isRefresh)),
  onGistTap: (gist, navigator) => {
    dispatch(setState({ tappedGist: gist }));
    dispatch(navigateToViewGist({ navigator, title: gist.firstFileName }));
  },
  onNewGistTapped: () => { },
});

export default connect(mapStateToProps, mapDispatchToProps)(GistsComponent);
