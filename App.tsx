/**
 * Demo of TV input and focus APIs
 */

import React from 'react';

import {Provider as PaperProvider} from 'react-native-paper';

import {SafeAreaView} from 'react-native-safe-area-context';

import Navigation from './src/Navigation';

import TVTheme from './src/common/TVTheme';

import 'react-native/tvos-types.d';

const App = () => {
  const containerStyle = {
    flex: 1,
    backgroundColor: TVTheme.colors.surface,
  };

  return (
    <SafeAreaView style={containerStyle}>
      <PaperProvider theme={TVTheme}>
        <Navigation />
      </PaperProvider>
    </SafeAreaView>
  );
};

App.title = 'Test';

export default App;
