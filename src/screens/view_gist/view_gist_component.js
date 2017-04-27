
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';
import * as globalStyles from '../../styles/global';

export default class ViewGistComponent extends Component {

  constructor(props) {
    super(props);
    props.fetchData(props.gist);
  }

  render() {
    const gistText = this.props.gistFetch.url === this.props.gist.firstFile.raw_url
      ? this.props.gistFetch.text
      : '';

    return (
      <View style={globalStyles.COMMON_STYLES.container}>
        <ScrollView>
          <ScrollView horizontal>
            <Text style={styles.text}>
              {gistText}
            </Text>
          </ScrollView>
        </ScrollView>
      </View>
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
