
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
} from 'react-native';
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
      <View style={[globalStyles.COMMON_STYLES.container, styles.mainContainer]}>
        <SectionList
          renderItem={({ item }) =>
            <Text>{item.firstFile}</Text>
          }
          renderSectionHeader={({ section }) => <Text>{section.key}</Text>}
          sections={this.props.sections}
        />
      </View>
    );
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
  mainContainer: {
    paddingTop: 5,
  },
});
