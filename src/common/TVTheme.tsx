/*
 * Implements a react-native-paper theme provider and hook using React context
 * Adds our styles to the theme object so those can be picked up by our
 * styled components.
 * Switches between dark and light themes with the RN useColorScheme hook.
 */

import React from 'react';
import {DarkTheme, DefaultTheme} from 'react-native-paper';
import {useColorScheme, Platform, StyleSheet} from 'react-native';
import type {ViewStyle, TextStyle} from 'react-native';
type Theme = typeof DefaultTheme;

// Add styles to the theme type
export type TVTheme = Theme & {
  styles: Styles;
  sizes: any;
};

// This takes care of issues with the different screen sizes on TV platforms and
// phone platforms.
const fontSize =
  Platform.isTV && Platform.OS === 'ios' ? 40.0 : Platform.isTV ? 20.0 : 15.0;

// Patch the default react-native-paper font definitions to use our custom
// font sizing
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

// On Apple TV, the screen is quite large (1920x1080) so we use this to
// scale up everything on this platform for visibility
// and for consistency with Android TV
const scale = Platform.isTV && Platform.OS === 'ios' ? 2.0 : 1.0;

const sizes = {
  buttonMargin: 10.0 * scale,
  rowPadding: 10.0 * scale,
  textPadding: 10.0 * scale,
  spacerWidth: 250.0 * scale,
  labelFontSize: 15.0 * scale,
  smallTextSize: 7.0 * scale,
  smallTextPadding: 2.0 * scale,
  headerFontSize: 30.0 * scale,
  headerHeight: 60.0 * scale,
};

interface Styles {
  container: ViewStyle;
  row: ViewStyle;
  text: TextStyle;
  textInput: TextStyle;
  button: ViewStyle & {uppercaseLabel: boolean};
  spacer: ViewStyle;
}

// Now define the styles based on the above sizes
const styleConfig = StyleSheet.create<Styles>({
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

// Returns the dark or light theme we want for TV
const tvTheme = (dark: boolean): TVTheme => {
  const baseTheme = dark ? DarkTheme : DefaultTheme;
  return {
    ...baseTheme,
    roundness: scale * 4,
    colors: {
      ...baseTheme.colors,
      primary: dark ? '#ccccff' : '#0000ff',
      accent: dark ? '#0000ff' : '#ccccff',
      notification: dark ? '#330000' : '#ffcccc',
    },
    fonts: fontConfig(baseTheme),
    sizes,
    styles: styleConfig,
  };
};

const TVThemeDark = tvTheme(true);
const TVThemeDefault = tvTheme(false);

// Our React context, provider, and hook
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
