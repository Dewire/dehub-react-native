
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableHighlight,
} from 'react-native';
import SeparatorLine from '../../app_components/separator_line';
import SectionHeader from '../../app_components/section_header';
import { ListViewChevronRight } from '../../app_components/icons';
import * as globalStyles from '../../styles/global';

export default class GistsComponent extends Component {

  constructor(props) {
    super(props);
    this.props.fetchData();
    this.onNavigatorEvent = this.onNavigatorEvent.bind(this);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent(event) {
    if (event.id === 'logout') {
      this.props.onLogoutPressed();
    }
  }

  render() {
    return (
      <View style={globalStyles.COMMON_STYLES.container}>
        <SectionList
          renderItem={renderGist}
          renderSectionHeader={({ section }) => <SectionHeader title={section.key} />}
          sections={this.props.sections}
          ItemSeparatorComponent={SeparatorLine}
        />
      </View>
    );
  }
}

const renderGist = ({ item }) => (
  <TouchableHighlight
    underlayColor={globalStyles.MEDIUM_OVERLAY_COLOR}
    onPress={() => console.log('TESTST')}
  >
    <View style={styles.gistCell}>

      <View>
        <Text style={styles.fileText}>
          {item.firstFileName}
        </Text>
        <Text style={[styles.languageText, { color: item.firstFile.color }]} >
          {item.firstFile.language || ''}
        </Text>
      </View>

      <View style={styles.rightColumn}>
        <ListViewChevronRight />
      </View>

    </View>
  </TouchableHighlight>
);

GistsComponent.navigatorButtons = {
  leftButtons: [
    {
      title: 'Logout',
      id: 'logout',
    },
  ],
};

GistsComponent.navigatorStyle = {
  navBarBackgroundColor: globalStyles.BAR_COLOR,
  navBarButtonColor: globalStyles.LINK_COLOR,
  navBarTextColor: 'white',
};

const styles = StyleSheet.create({
  gistCell: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
    paddingHorizontal: globalStyles.PADDING_HORIZONTAL,
    paddingTop: 8,
  },
  rightColumn: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  fileText: {
    color: globalStyles.TEXT_COLOR,
    fontSize: 16,
  },
  languageText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
