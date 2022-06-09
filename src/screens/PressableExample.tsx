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
          onBlur={() => setButton1Focused(false)}
          label={(pressed: boolean, focused: boolean) => {
            return pressed || focused
              ? 'Pressable 1 highlighted'
              : 'Pressable 1';
          }}
        />
        <Pressable
          onFocus={() => setButton2Focused(true)}
          onBlur={() => setButton2Focused(false)}
          label={() => 'Pressable 2'}
        />
      </RowContainer>
      <Text>Pressable 1 is {button1Focused ? 'focused' : 'not focused'}</Text>
      <Text>Pressable 2 is {button2Focused ? 'focused' : 'not focused'}</Text>
    </SectionContainer>
  );
};

export default PressableExample;
