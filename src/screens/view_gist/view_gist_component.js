
import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';
import * as globalStyles from '../../styles/global';
import Container from '../../app_components/container';
import { isIOS } from '../../util/platform';

export default class ViewGistComponent extends Component {

  constructor(props) {
    super(props);
    props.fetchData(props.gist);
  }

  render() {
    return (
      <Container showLoading={this.props.showLoading}>
        <ScrollView>
          <ScrollView horizontal>
            <Text style={styles.text}>
              {this.props.gistText}
            </Text>
          </ScrollView>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: globalStyles.TEXT_COLOR,
    fontFamily: isIOS ? 'Menlo' : 'monospace',
    margin: 10,
  },
});

// TODO: the documentation says this should be remembered across pushes (the same is set in
// gists_component) but it is only rememberd on iOS.
ViewGistComponent.navigatorStyle = {
  navBarBackgroundColor: globalStyles.BAR_COLOR,
  navBarButtonColor: globalStyles.LINK_COLOR,
  navBarTextColor: 'white',
};
