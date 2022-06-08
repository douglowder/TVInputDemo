/*
 * Shows how Pressable can be used on TV
 */

import React from 'react';

import {
  Pressable,
  RowContainer,
  SectionContainer,
  Text,
} from '../common/StyledComponents';

import 'react-native/tvos-types.d';

const PressableExample = () => {
  const [button1Focused, setButton1Focused] = React.useState(false);
  const [button2Focused, setButton2Focused] = React.useState(false);

  return (
    <SectionContainer title="TV Pressable example with focus handling">
      <RowContainer>
        <Pressable
          onPress={() => {}}
          onFocus={() => setButton1Focused(true)}
          onBlur={() => setButton1Focused(false)}>
          Pressable 1
        </Pressable>
        <Pressable
          onFocus={() => setButton2Focused(true)}
          onBlur={() => setButton2Focused(false)}>
          Pressable 2
        </Pressable>
      </RowContainer>
      <Text>Pressable 1 is {button1Focused ? 'focused' : 'not focused'}</Text>
      <Text>Pressable 2 is {button2Focused ? 'focused' : 'not focused'}</Text>
    </SectionContainer>
  );
};

export default PressableExample;
