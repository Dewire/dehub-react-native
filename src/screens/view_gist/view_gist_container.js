
import { connect } from 'react-redux';
import ViewGistComponent from './view_gist_component';
import { fetchData } from './view_gist_actions';
import {
  selectedGistSelector,
  gistTextSelector,
  showLoadingSelector,
} from './view_gist_selectors';

const mapStateToProps = state => ({
  gist: selectedGistSelector(state),
  gistText: gistTextSelector(state),
  showLoading: showLoadingSelector(state),
});

const mapDispatchToProps = dispatch => ({
  fetchData: gist => dispatch(fetchData(gist.firstFile.raw_url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewGistComponent);
