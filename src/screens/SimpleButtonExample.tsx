/*
 * Shows buttons with empty onPress methods.
 * Also demonstrates setting preferred focus, and the Apple TV parallax properties.
 */

import React from 'react';

import {
  Button,
  RowContainer,
  SectionContainer,
} from '../common/StyledComponents';

import 'react-native/tvos-types.d';

const SimpleButtonExample = () => {
  return (
    <SectionContainer title="TV button example">
      <RowContainer>
        <Button>Button 1</Button>
        <Button hasTVPreferredFocus={true}>
          Button 2 gets preferred focus
        </Button>
        <Button tvParallaxProperties={{magnification: 1.1}}>
          Button 3 magnifies on focus (tvOS)
        </Button>
      </RowContainer>
    </SectionContainer>
  );
};

export default SimpleButtonExample;
