/*
 * Implements a react-native-paper theme provider and hook using React context
 * Adds our styles to the theme object so those can be picked up by our
 * styled components.
 * Switches between dark and light themes with the RN useColorScheme hook.
 */

import React from 'react';
import {useColorScheme, Platform, StyleSheet} from 'react-native';
import type {ViewStyle, TextStyle} from 'react-native';
import {DarkTheme, DefaultTheme} from 'react-native-paper';
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
  headerHeight: Platform.OS === 'ios' ? 100.0 * scale : 60.0 * scale,
  headerTitleSize: 30.0 * scale,
  headerLeftRightWidth: 200.0 * scale,
};

interface Styles {
  container: ViewStyle;
  row: ViewStyle;
  text: TextStyle;
  textInput: TextStyle;
  button: ViewStyle;
  spacer: ViewStyle;
  header?: ViewStyle;
  headerLeft: ViewStyle;
  headerRight: ViewStyle;
  headerCenter: ViewStyle;
  headerTitle: TextStyle;
}

// Now define the styles based on the above sizes
const styleConfig = (theme: Theme) =>
  StyleSheet.create<Styles>({
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
    },
    spacer: {
      width: sizes.spacerWidth,
    },
    header: {
      flex: 1,
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
      height: sizes.headerHeight,
    },
    headerLeft: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: sizes.headerLeftRightWidth,
    },
    headerRight: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: sizes.headerLeftRightWidth,
    },
    headerCenter: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerTitle: {
      fontSize: sizes.headerTitleSize,
      fontWeight: 'bold',
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
    styles: styleConfig(baseTheme),
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
