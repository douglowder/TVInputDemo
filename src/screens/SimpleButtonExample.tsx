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
import useNavigationFocus from '../navigation/useNavigationFocus';

const SimpleButtonExample = (props: {navigation: any}) => {
  const {navigation} = props;
  const [focused, setFocused] = React.useState(false);
  useNavigationFocus(navigation, setFocused);
  return (
    <SectionContainer title="TV button example">
      <RowContainer>
        <Button>Button 1</Button>
        <Button hasTVPreferredFocus={focused}>
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
