/*
 * Simple button example, with demo of how onFocus and onBlur methods can be used
 * to track focus, change state
 */

import React from 'react';

import {
  Button,
  RowContainer,
  SectionContainer,
  Text,
} from '../common/StyledComponents';

const ButtonsWithFocusHandlingExample = () => {
  const [button1Focused, setButton1Focused] = React.useState(false);
  const [button2Focused, setButton2Focused] = React.useState(false);
  return (
    <SectionContainer title="TV button example with focus handling">
      <RowContainer>
        <Button
          onFocus={() => setButton1Focused(true)}
          onBlur={() => setButton1Focused(false)}>
          Button 1
        </Button>
        <Button
          onFocus={() => setButton2Focused(true)}
          onBlur={() => setButton2Focused(false)}>
          Button 2
        </Button>
      </RowContainer>
      <Text>Button 1 is {button1Focused ? 'focused' : 'not focused'}</Text>
      <Text>Button 2 is {button2Focused ? 'focused' : 'not focused'}</Text>
    </SectionContainer>
  );
};

export default ButtonsWithFocusHandlingExample;
