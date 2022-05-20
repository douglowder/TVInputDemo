import {DefaultTheme} from 'react-native-paper';
import {Platform} from 'react-native';

const fontSize = Platform.isTV && Platform.OS === 'ios' ? 60.0 : 30.0;

const TVTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0000ff',
  },
  fonts: {
    regular: {
      ...DefaultTheme.fonts.regular,
      fontSize,
    },
    medium: {
      ...DefaultTheme.fonts.medium,
      fontSize,
    },
    light: {
      ...DefaultTheme.fonts.light,
      fontSize,
    },
    thin: {
      ...DefaultTheme.fonts.thin,
      fontSize,
    },
  },
};

export default TVTheme;
