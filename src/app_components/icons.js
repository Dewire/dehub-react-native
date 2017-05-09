
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import * as globalStyles from '../styles/global';

export const ListViewChevronRightIcon = props => (
  <Icon
    size={20}
    color={globalStyles.LIGHT_OVERLAY_COLOR}
    {...props}
    name="ios-arrow-forward"
  />
);
