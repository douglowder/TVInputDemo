/*
 * Demo of nextFocus APIs
 */

import React from 'react';
import {View, findNodeHandle} from 'react-native';

import {List} from 'react-native-paper';

import {Button, RowContainer} from '../common/StyledComponents';

import styles from '../common/styles';

import 'react-native/tvos-types.d';

const NextFocusExample = () => {
  const button1Ref = React.useRef<any>();
  const button2Ref = React.useRef<any>();

  return (
    <List.Section title="nextFocus API example">
      <RowContainer>
        <Button
          ref={button1Ref}
          onPress={() => {}}
          nextFocusRight={findNodeHandle(button2Ref?.current)}>
          Button 1
        </Button>
        <View style={styles.spacer} />
        <Button onPress={() => {}}>-----</Button>
      </RowContainer>
      <RowContainer>
        <Button onPress={() => {}}>-----</Button>
        <View style={styles.spacer} />
        <Button
          ref={button2Ref}
          onPress={() => {}}
          nextFocusLeft={findNodeHandle(button1Ref?.current)}>
          Button 2
        </Button>
      </RowContainer>
    </List.Section>
  );
};

export default NextFocusExample;
