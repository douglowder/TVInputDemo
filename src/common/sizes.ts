import {Platform} from 'react-native';

const scale = Platform.isTV && Platform.OS === 'ios' ? 2.0 : 1.0;

const sizes = {
  buttonMargin: 10.0 * scale,
  rowPadding: 10.0 * scale,
  textPadding: 10.0 * scale,
  focusGuideWidth: 50.0 * scale,
  spacerWidth: 250.0 * scale,
  labelFontSize: 15.0 * scale,
};

export default sizes;
