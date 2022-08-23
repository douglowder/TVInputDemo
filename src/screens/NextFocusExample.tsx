/*
 * Demo of nextFocus APIs
 */

import React from 'react';

import {
  Button,
  RowContainer,
  SectionContainer,
  Spacer,
} from '../common/StyledComponents';

import 'react-native/tvos-types.d';

const NextFocusExample = () => {
  // Hold refs to the two buttons in states
  const [left, setLeft] = React.useState(undefined);
  const [right, setRight] = React.useState(undefined);

  // We enable both nextFocusLeft and nextFocusRight for the buttons,
  // so that either left or right arrow/swipe will take us to the other button
  return (
    <SectionContainer title="nextFocus API example">
      <RowContainer>
        <Button
          ref={(c: any) => setLeft(c)}
          nextFocusLeft={right}
          nextFocusRight={right}
          onPress={() => {}}>
          Button 1
        </Button>
        <Spacer />
      </RowContainer>
      <RowContainer>
        <Spacer />
        <Button
          ref={(c: any) => setRight(c)}
          nextFocusLeft={left}
          nextFocusRight={left}
          onPress={() => {}}>
          Button 2
        </Button>
      </RowContainer>
    </SectionContainer>
  );
};

export default NextFocusExample;
