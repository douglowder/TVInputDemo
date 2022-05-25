import React from 'react';
import {DarkTheme, DefaultTheme} from 'react-native-paper';
import {useColorScheme, Platform, StyleSheet} from 'react-native';

type Theme = typeof DefaultTheme;

export type TVTheme = Theme & {
  styles: any;
};

const fontSize =
  Platform.isTV && Platform.OS === 'ios' ? 60.0 : Platform.isTV ? 30.0 : 15.0;

const fontConfig = (theme: typeof DefaultTheme) => {
  return {
    regular: {
      ...theme.fonts.regular,
      fontSize,
    },
    medium: {
      ...theme.fonts.medium,
      fontSize,
    },
    light: {
      ...theme.fonts.light,
      fontSize,
    },
    thin: {
      ...theme.fonts.thin,
      fontSize,
    },
  };
};

const scale = Platform.isTV && Platform.OS === 'ios' ? 2.0 : 1.0;

const sizes = {
  buttonMargin: 10.0 * scale,
  rowPadding: 10.0 * scale,
  textPadding: 10.0 * scale,
  spacerWidth: 250.0 * scale,
  labelFontSize: 15.0 * scale,
};

const styleConfig = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: sizes.labelFontSize,
  },
  button: {
    margin: sizes.buttonMargin,
    uppercaseLabel: false,
  },
  spacer: {
    width: sizes.spacerWidth,
  },
});

const tvTheme = (dark: boolean): TVTheme => {
  const baseTheme = dark ? DarkTheme : DefaultTheme;
  return {
    ...baseTheme,
    roundness: scale * 4,
    colors: {
      ...baseTheme.colors,
      primary: dark ? '#ccccff' : '#0000ff',
      accent: dark ? '#0000ff' : '#ccccff',
    },
    fonts: fontConfig(baseTheme),
    styles: styleConfig,
  };
};

const TVThemeDark = tvTheme(true);
const TVThemeDefault = tvTheme(false);

const ThemeContext = React.createContext(TVThemeDefault);

const TVThemeProvider = (props: {children: any}) => {
  const mode = useColorScheme();
  const theme = mode === 'dark' ? TVThemeDark : TVThemeDefault;
  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

const useTVTheme = (): TVTheme => {
  const theme = React.useContext(ThemeContext);
  const result = React.useMemo(() => theme, [theme]);
  return result;
};

export {TVThemeProvider, useTVTheme};
