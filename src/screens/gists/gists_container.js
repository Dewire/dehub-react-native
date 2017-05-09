
import { connect } from 'react-redux';
import GistsComponent from './gists_component';
import { logout } from '../../base/actions';
import { sectionsSelector } from './gists_selectors';
import {
  isActiveBackgroundRequestWithNoFetchedDataSelector,
  isActiveRefreshRequestSelector,
} from '../../base/selectors';
import {
  GISTS_FETCH_DATA,
  setState,
  fetchData,
  navigateToViewGist,
  navigateToNewGist,
} from './gists_actions';

const mapStateToProps = state => ({
  sections: sectionsSelector(state),
  showLoading: isActiveBackgroundRequestWithNoFetchedDataSelector(GISTS_FETCH_DATA, 'gists')(state),
  refreshing: isActiveRefreshRequestSelector(GISTS_FETCH_DATA)(state),
});

const mapDispatchToProps = dispatch => ({
  onLogoutTapped: navigator => dispatch(logout(navigator)),
  fetchData: (isRefresh = false) => dispatch(fetchData(isRefresh)),
  onGistTap: (gist, navigator) => {
    dispatch(setState({ tappedGist: gist }));
    dispatch(navigateToViewGist({ navigator, title: gist.firstFileName }));
  },
  onNewGistTapped: navigator => dispatch(navigateToNewGist({ navigator, title: 'New Gist' })),
});

export default connect(mapStateToProps, mapDispatchToProps)(GistsComponent);
