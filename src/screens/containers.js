
import { connect } from 'react-redux';
import { setNavigator, navigate } from '../store/actions';

export default function appConnect(mapStateToProps, mapDispatchToProps, ...rest) {
  return connect(
    mapStateToProps,
    dispatch => ({
      ...globalDispatchToProps(dispatch),
      ...mapDispatchToProps(dispatch),
    }),
    ...rest,
  );
}

const globalDispatchToProps = dispatch => ({
  setNavigator: navigator => dispatch(setNavigator(navigator)),
  navigate: navigation => dispatch(navigate(navigation)),
});
