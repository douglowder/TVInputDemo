import {StyleSheet} from 'react-native';
import sizes from './sizes';
import TVTheme from './TVTheme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: TVTheme.colors.surface,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: sizes.rowPadding,
  },
  text: {
    padding: sizes.textPadding,
  },
  textInput: {
    flex: 1,
  },
  labelStyle: {
    color: TVTheme.colors.primary,
  },
  button: {
    margin: sizes.buttonMargin,
    uppercaseLabel: false,
  },
  focusGuideVisible: {
    width: sizes.focusGuideWidth,
    backgroundColor: TVTheme.colors.error,
  },
  focusGuideHidden: {
    width: sizes.focusGuideWidth,
  },
  emptyFocusGuide: {
    width: sizes.focusGuideWidth,
  },
  spacer: {
    width: sizes.spacerWidth,
  },
});

export default styles;
