/**
 * Demo of TV input and focus APIs
 */

import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

import {TVThemeProvider, useTVTheme} from './src/common/TVTheme';
import Navigation from './src/navigation/Navigation';

const Container = () => {
  const theme = useTVTheme();
  const containerStyle = {
    flex: 1,
    backgroundColor: theme.colors.background,
  };

  return (
    <SafeAreaView style={containerStyle}>
      <PaperProvider theme={theme}>
        <Navigation />
      </PaperProvider>
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <TVThemeProvider>
      <Container />
    </TVThemeProvider>
  );
};

App.title = 'Test';

export default App;
