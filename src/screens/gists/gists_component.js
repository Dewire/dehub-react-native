
import React, { Component } from 'react';
import {
  View,
} from 'react-native';

export default class GistsComponent extends Component {

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.id === 'logout') {
      this.props.onLogoutPressed();
    }
  }

  render() {
    return <View />;
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
