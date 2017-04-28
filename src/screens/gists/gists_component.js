
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableHighlight,
} from 'react-native';
import { VIEW_GIST_SCREEN } from '../screens';
import Container from '../../app_components/container';
import SeparatorLine from '../../app_components/separator_line';
import SectionHeader from '../../app_components/section_header';
import { ListViewChevronRight } from '../../app_components/icons';
import * as globalStyles from '../../styles/global';

export default class GistsComponent extends Component {

  constructor(props) {
    super(props);
    this.props.fetchData();
    this.onNavigatorEvent = this.onNavigatorEvent.bind(this);
    this.renderGist = this.renderGist.bind(this);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent(event) {
    if (event.id === 'logout') {
      this.props.onLogoutPressed();
    }
  }

  render() {
    return (
      <Container showLoading={this.props.showLoading}>
        <SectionList
          renderItem={this.renderGist}
          renderSectionHeader={({ section }) => <SectionHeader title={section.key} />}
          sections={this.props.sections}
          ItemSeparatorComponent={SeparatorLine}
          onRefresh={() => this.props.fetchData(true)}
          refreshing={this.props.refreshing}
        />
      </Container>
    );
  }

  renderGist({ item }) {
    return (
      <TouchableHighlight
        underlayColor={globalStyles.MEDIUM_OVERLAY_COLOR}
        onPress={() => this.onGistTap(item)}
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
  }

  onGistTap(gist) {
    this.props.onGistTap(gist);
    this.props.navigator.push({
      screen: VIEW_GIST_SCREEN,
      title: gist.firstFileName,
    });
  }
}

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
