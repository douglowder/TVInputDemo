import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: Platform.isTV ? 30 : 15,
    paddingVertical: Platform.isTV ? 30 : 15,
  },
  text: {
    paddingHorizontal: Platform.isTV ? 20 : 10,
    paddingVertical: Platform.isTV ? 20 : 10,
  },
  textInput: {
    flex: 1,
  },
  button: {
    margin: 4,
    uppercaseLabel: false,
  },
  focusGuideVisible: {
    width: 50,
    backgroundColor: '#dddddd',
  },
  focusGuideHidden: {
    width: 50,
  },
  emptyFocusGuide: {
    width: 50,
  },
  spacer: {
    width: 500,
  },
});

export default styles;
