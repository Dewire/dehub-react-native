import { StyleSheet, Switch, Text, View } from 'react-native';
import React, { Component } from 'react';
import Toast from 'react-native-easy-toast';

import AppTextInput from '../../app_components/app_text_input';
import ContainerView from '../../app_components/container_view';
import * as globalStyles from '../../styles/global';

const EVENT_CREATE_GIST = 'EVENT_CREATE_GIST';

export default class NewGistComponent extends Component {

  constructor(props) {
    super(props);
    this.onNavigatorEvent = this.onNavigatorEvent.bind(this);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    this.setCreateButton(this.props.createButtonDisabled);
    this.props.onTitleChangeText('');
    this.props.onContentChangeText('');
  }

  onNavigatorEvent(event) {
    if (event.id === EVENT_CREATE_GIST) {
      this.props.onCreateGistTapped();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.showCreateOK) {
      this.toast.show('Gist created');
    }
    this.setCreateButton(nextProps.createButtonDisabled);
  }

  setCreateButton(disabled) {
    this.props.navigator.setButtons({
      rightButtons: [{
        title: 'Create',
        id: EVENT_CREATE_GIST,
        disabled,
      }],
      animated: false,
    });
  }

  render() {
    return (
      <ContainerView style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <AppTextInput
            containerFlex={1}
            style={styles.titleInput}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Title"
            onChangeText={this.props.onTitleChangeText}
          />
          <Text style={styles.privateLabel}>PRIVATE</Text>
          <Switch
            style={styles.switch}
            onValueChange={this.props.onPrivateSwitchValueChange}
            value={this.props.isPrivate}
          />
        </View>
        <AppTextInput
          containerFlex={1}
          style={styles.textInput}
          multiline
          placeholder="Text"
          placeholderTextColor="#D1D1D1"
          onChangeText={this.props.onContentChangeText}
        />
        <Toast ref={(toast) => { this.toast = toast; }} />
      </ContainerView>
    );
  }
}

NewGistComponent.navigatorStyle = {
  navBarBackgroundColor: globalStyles.BAR_COLOR,
  navBarButtonColor: globalStyles.LINK_COLOR,
  navBarTextColor: 'white',
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 16,
    paddingTop: 30,
    paddingBottom: 30,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleInput: {
    flex: 1,
    marginRight: 20,
  },
  privateLabel: {
    marginRight: 6,
    color: globalStyles.TEXT_COLOR,
    fontSize: 12,
    fontWeight: 'bold',
  },
  switch: {
    alignSelf: 'center',
    marginLeft: 'auto',
  },
  textInput: {
    flex: 1,
    marginTop: 30,
  },
});
