/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {Platform, StyleSheet, ScrollView, View} from 'react-native';

import {List, Button, Text, useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

import 'react-native/tvos-types.d';

const App = () => {
  const {colors} = useTheme();
  const [button1Focused, setButton1Focused] = useState(false);
  const [button2Focused, setButton2Focused] = useState(false);
  /*
  useTVEventHandler((evt: HWKeyEvent) => {
    if (evt.eventType !== 'focus' && evt.eventType !== 'blur') {
      setMessage(evt.eventType);
    }
  });
 */
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={[styles.container, {backgroundColor: colors.background}]}>
        <List.Section title="TV button example">
          <View style={styles.row}>
            <Button
              style={styles.button}
              onPress={() => {}}
              onFocus={() => setButton1Focused(true)}
              onBlur={() => setButton1Focused(false)}>
              Button 1
            </Button>
            <Button
              style={styles.button}
              onPress={() => {}}
              onFocus={() => setButton2Focused(true)}
              onBlur={() => setButton2Focused(false)}>
              Button 2
            </Button>
          </View>
        </List.Section>
        <List.Section title="Messages">
          <View style={styles.text}>
            <Text>
              Button 1 is {button1Focused ? 'focused' : 'not focused'}
            </Text>
            <Text>
              Button 2 is {button2Focused ? 'focused' : 'not focused'}
            </Text>
          </View>
        </List.Section>
      </ScrollView>
    </SafeAreaView>
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
  text: {
    paddingHorizontal: Platform.isTV ? 30 : 15,
  },
  button: {
    margin: 4,
  },
});

App.title = 'Test';

export default App;
