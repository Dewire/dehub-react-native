
import React, { Component } from 'react';
import {
  View,
} from 'react-native';

export default class GistsComponent extends Component {

  constructor(props) {
    super(props);
    this.onNavigatorEvent = this.onNavigatorEvent.bind(this);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
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
