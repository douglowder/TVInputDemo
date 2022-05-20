/*
 * Shows two buttons with empty onPress methods
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
        <Button>Button 2</Button>
      </RowContainer>
    </SectionContainer>
  );
};

export default SimpleButtonExample;
