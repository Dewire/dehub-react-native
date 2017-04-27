
import appConnect from '../containers';
import ViewGistComponent from './view_gist_component';
import { fetchGist } from './view_gist_actions';

const mapStateToProps = state => ({
  gistFetch: state.viewGist.gistFetch,
});

const mapDispatchToProps = dispatch => ({
  fetchData: gist => dispatch(fetchGist(gist.firstFile.raw_url)),
});

export default appConnect(mapStateToProps, mapDispatchToProps)(ViewGistComponent);
