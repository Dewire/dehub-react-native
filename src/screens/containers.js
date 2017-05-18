import { connect } from 'react-redux';

import { popError } from '../util/store';

export default function appConnect(mapStateToProps, mapDispatchToProps, ...rest) {
  return connect(
    state => ({
      ...globalStateToProps(state),
      ...mapStateToProps(state),
    }),
    dispatch => ({
      ...globalDispatchToProps(dispatch),
      ...mapDispatchToProps(dispatch),
    }),
    ...rest,
  );
}

const globalDispatchToProps = dispatch => ({  // eslint-disable-line
});

const globalStateToProps = state => ({  // eslint-disable-line
  error: popError(),
});
