
import { StyleSheet } from 'react-native';

export const BG_COLOR = '#343336';
export const BAR_COLOR = '#4e4d52';
export const TEXT_COLOR = '#BDBDBD';
export const TEXT_COLOR_DARK = '#111';
export const HEADER_TEXT_COLOR = '#fff';
export const MUTED_COLOR = '#8e8786';
export const LINK_COLOR = '#48e9d9';
export const ACCENT_COLORS = ['#d31d65', '#751c53', '#c248c0', '#7d6e8b', '#bbc6f7'];
export const LIGHT_OVERLAY_COLOR = '#fff2';
export const MEDIUM_OVERLAY_COLOR = '#fff4';
export const PADDING_HORIZONTAL = 16;

export const COMMON_STYLES = StyleSheet.create({
  text: {
    color: TEXT_COLOR_DARK,
  },
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
});
