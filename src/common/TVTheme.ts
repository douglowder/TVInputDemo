import {DarkTheme, DefaultTheme} from 'react-native-paper';
import {Appearance, Platform} from 'react-native';

const fontSize = Platform.isTV && Platform.OS === 'ios' ? 60.0 : 30.0;

const isDark = Appearance.getColorScheme() === 'dark';
const ChosenTheme = isDark ? DarkTheme : DefaultTheme;

const TVTheme = {
  ...ChosenTheme,
  colors: {
    ...ChosenTheme.colors,
    primary: isDark ? '#ccccff' : '#0000ff',
    accent: isDark ? '#0000ff' : '#ccccff',
  },
  fonts: {
    regular: {
      ...ChosenTheme.fonts.regular,
      fontSize,
    },
    medium: {
      ...ChosenTheme.fonts.medium,
      fontSize,
    },
    light: {
      ...ChosenTheme.fonts.light,
      fontSize,
    },
    thin: {
      ...ChosenTheme.fonts.thin,
      fontSize,
    },
  },
};

export default TVTheme;
