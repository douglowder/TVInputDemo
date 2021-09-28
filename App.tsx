/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Platform, StyleSheet, ScrollView, View} from 'react-native';

import {List, Button, useTheme} from 'react-native-paper';

import 'react-native/tvos-types.d';

const App = () => {
  const {colors} = useTheme();

  return (
    <ScrollView
      style={[styles.container, {backgroundColor: colors.background}]}>
      <List.Section title="Button examples">
        <View style={styles.row}>
          <Button onPress={() => {}} style={styles.button}>
            Default
          </Button>
          <Button
            tvParallaxProperties={{enabled: true, magnification: 1.1}}
            icon="camera"
            onPress={() => {}}
            style={styles.button}>
            Icon
          </Button>
        </View>
      </List.Section>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: Platform.isTV ? 30 : 15,
  },
  button: {
    margin: 4,
  },
});

App.title = 'Test';

export default App;
