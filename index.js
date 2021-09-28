/**
 * @format
 */

import * as React from 'react';
import {AppRegistry, Platform} from 'react-native';
import {
  Provider as PaperProvider,
  DefaultTheme,
  configureFonts,
} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {name as appName} from './app.json';
import App from './App';

const fontConfig = {
  ios: {
    regular: {
      fontWeight: 'normal',
      fontSize: Platform.isTV ? 40 : 20,
    },
  },
  android: {
    regular: {
      fontWeight: 'normal',
    },
  },
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
  fonts: configureFonts(fontConfig),
};

export default function Main() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </SafeAreaProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
