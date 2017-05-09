import { connect } from 'react-redux';

import { NEW_GIST_CREATE_GIST, createGist, setState } from './new_gist_actions';
import { hasCompletedRequestWithoutError } from '../../util/store';
import { isPrivateSelector, isCreateButtonDisabledSelector } from './new_gist_selectors';
import NewGistComponent from './new_gist_component';

const mapStateToProps = state => ({
  isPrivate: isPrivateSelector(state),
  showCreateOK: hasCompletedRequestWithoutError(NEW_GIST_CREATE_GIST),
  createButtonDisabled: isCreateButtonDisabledSelector(state),
});

const mapDispatchToProps = dispatch => ({
  onTitleChangeText: title => dispatch(setState({ title })),
  onContentChangeText: content => dispatch(setState({ content })),
  onPrivateSwitchValueChange: value => dispatch(setState({ isPrivate: value })),
  onCreateGistTapped: () => dispatch(createGist()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewGistComponent);
