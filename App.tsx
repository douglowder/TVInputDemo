/**
 * Demo of TV input and focus APIs
 */

import React from 'react';

import {Provider as PaperProvider} from 'react-native-paper';

import {SafeAreaView} from 'react-native-safe-area-context';

import Navigation from './src/Navigation';

import {useTVTheme} from './src/common/TVTheme';

import 'react-native/tvos-types.d';

const App = () => {
  const theme = useTVTheme();

  const containerStyle = {
    flex: 1,
    backgroundColor: theme.colors.surface,
  };

  return (
    <SafeAreaView style={containerStyle}>
      <PaperProvider theme={theme}>
        <Navigation />
      </PaperProvider>
    </SafeAreaView>
  );
};

App.title = 'Test';

export default App;
