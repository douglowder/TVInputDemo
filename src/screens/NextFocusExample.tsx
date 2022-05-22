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
  const [left, setLeft] = React.useState(null);
  const [right, setRight] = React.useState(null);

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
