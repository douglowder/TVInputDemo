/**
 * Demo of TV input and focus APIs
 */

import React from 'react';

import {
  useTheme,
  Provider as PaperProvider,
  DefaultTheme,
} from 'react-native-paper';

import {SafeAreaView} from 'react-native-safe-area-context';

import Navigation from './src/Navigation';

import styles from './src/common/styles';

import 'react-native/tvos-types.d';

const App = () => {
  const {colors} = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <PaperProvider theme={DefaultTheme}>
        <Navigation />
      </PaperProvider>
    </SafeAreaView>
  );
};

App.title = 'Test';

export default App;
