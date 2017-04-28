
import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';
import * as globalStyles from '../../styles/global';
import Container from '../../app_components/container';

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
    fontFamily: 'Menlo',
    margin: 10,
  },
});
