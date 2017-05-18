
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
 } from 'react-native';
import Toast from 'react-native-easy-toast';
import * as globalStyles from '../styles/global';

export default class ContainerView extends Component {

  componentWillReceiveProps({ error }) {
    if (error) {
      this.errorToast.show(error.message || 'Error occurred');
    }
  }

  render() {
    return (
      <View
        style={[globalStyles.COMMON_STYLES.container, this.props.style]}
        testID={this.props.testID}
      >
        {(this.props.showLoading ? (
          <View style={styles.indicatorContainer}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          this.props.children
        ))}
        <Toast ref={(toast) => { this.errorToast = toast; }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  indicatorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

ContainerView.propTypes = {
  style: View.propTypes.style,
  children: PropTypes.node,
  showLoading: PropTypes.bool,
  error: PropTypes.error,
  testID: PropTypes.string,
};
