/*
 * Simple button example, with demo of how onFocus and onBlur methods can be used
 * to track focus, change state
 */

import React, {useState} from 'react';
import {View} from 'react-native';

import {
  Button,
  RowContainer,
  SectionContainer,
  Text,
} from '../common/StyledComponents';

import styles from '../common/styles';

import 'react-native/tvos-types.d';

const ButtonsWithFocusHandlingExample = () => {
  const [button1Focused, setButton1Focused] = useState(false);
  const [button2Focused, setButton2Focused] = useState(false);
  return (
    <SectionContainer title="TV button example with focus handling">
      <RowContainer>
        <Button
          style={styles.button}
          onFocus={() => setButton1Focused(true)}
          onBlur={() => setButton1Focused(false)}>
          Button 1
        </Button>
        <Button
          style={styles.button}
          onFocus={() => setButton2Focused(true)}
          onBlur={() => setButton2Focused(false)}>
          Button 2
        </Button>
      </RowContainer>
      <View style={styles.text}>
        <Text>Button 1 is {button1Focused ? 'focused' : 'not focused'}</Text>
        <Text>Button 2 is {button2Focused ? 'focused' : 'not focused'}</Text>
      </View>
    </SectionContainer>
  );
};

export default ButtonsWithFocusHandlingExample;
