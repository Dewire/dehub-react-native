
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ContainerView from '../../app_components/container_view';
import SeparatorLine from '../../app_components/separator_line';
import SectionHeader from '../../app_components/section_header';
import { ListViewChevronRightIcon } from '../../app_components/icons';
import * as globalStyles from '../../styles/global';
import { isIOS } from '../../util/platform';

const EVENT_LOGOUT = 'logout';
const EVENT_NEW_GIST = 'new_gist';

export default class GistsComponent extends Component {
  constructor(props) {
    super(props);
    this.props.fetchData();
    this.onNavigatorEvent = this.onNavigatorEvent.bind(this);
    this.renderGist = this.renderGist.bind(this);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent(event) {
    if (event.id === EVENT_LOGOUT) {
      this.props.onLogoutTapped(this.props.navigator);
    } else if (event.id === EVENT_NEW_GIST) {
      this.props.onNewGistTapped(this.props.navigator);
    }
  }

  render() {
    return (
      <ContainerView {...this.props} testID="gistsContainer">
        <SectionList
          renderItem={this.renderGist}
          renderSectionHeader={({ section }) => <SectionHeader title={section.key} />}
          sections={this.props.sections}
          ItemSeparatorComponent={SeparatorLine}
          onRefresh={() => this.props.fetchData(true)}
          refreshing={this.props.refreshing}
        />
      </ContainerView>
    );
  }

  renderGist({ item }) {
    return (
      <TouchableHighlight
        underlayColor={globalStyles.MEDIUM_OVERLAY_COLOR}
        onPress={() => this.props.onGistTap(item, this.props.navigator)}
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
            <ListViewChevronRightIcon />
          </View>

        </View>
      </TouchableHighlight>
    );
  }
}

const leftButtons = [];
const rightButtons = [];

if (isIOS) {
  leftButtons.push({
    title: 'Logout',
    id: EVENT_LOGOUT,
  });
  rightButtons.push({
    title: 'New Gist',
    id: EVENT_NEW_GIST,
  });
} else {
  rightButtons.push({
    title: 'Logout',
    id: EVENT_LOGOUT,
  });
}

GistsComponent.navigatorButtons = {
  leftButtons,
  rightButtons,
};

if (!isIOS) {
  Icon.getImageSource('ios-add', 24, 'white').then((source) => {
    GistsComponent.navigatorButtons.fab = {
      collapsedId: EVENT_NEW_GIST,
      collapsedIcon: source,
      backgroundColor: '#607D8B',
    };
  });
}

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
