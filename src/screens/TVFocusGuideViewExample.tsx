/*
 * Shows usage of TVFocusGuideView
 */

import React from 'react';
import { View, TVFocusGuideView } from 'react-native';

import {
  Button,
  RowContainer,
  SectionContainer,
  Spacer,
} from '../common/StyledComponents';

import styles from '../common/styles';

import 'react-native/tvos-types.d';

const TVFocusGuideViewExample = () => {
  const button1Ref = React.useRef();
  const button2Ref = React.useRef();

  const [focusGuidesAdded, setFocusGuidesAdded] = React.useState(false);
  const [focusGuidesVisible, setFocusGuidesVisible] = React.useState(false);

  const toggleFocusGuides = () => {
    if (focusGuidesAdded) {
      setFocusGuidesVisible(false);
    }
    setFocusGuidesAdded(!focusGuidesAdded);
  };

  const toggleFocusGuidesVisible = () => {
    setFocusGuidesVisible(!focusGuidesVisible);
  };

  return (
    <SectionContainer title="TVFocusGuideView example">
      <RowContainer>
        <Button onPress={() => toggleFocusGuides()}>
          {focusGuidesAdded ? 'Remove focus guides' : 'Add focus guides'}
        </Button>
        {focusGuidesAdded ? (
          <Button onPress={() => toggleFocusGuidesVisible()}>
            {focusGuidesVisible ? 'Hide focus guides' : 'Show focus guides'}
          </Button>
        ) : null}
      </RowContainer>
      <RowContainer>
        <Button ref={button1Ref} onPress={() => { }}>
          Button 1
        </Button>
        <Spacer />
        {focusGuidesAdded ? (
          <TVFocusGuideView
            style={
              focusGuidesVisible
                ? styles.focusGuideVisible
                : styles.focusGuideHidden
            }
            destinations={
              focusGuidesAdded && button2Ref?.current
                ? [button2Ref?.current]
                : []
            }
          />
        ) : (
          <View style={styles.emptyFocusGuide} />
        )}
      </RowContainer>
      <RowContainer>
        {focusGuidesAdded ? (
          <TVFocusGuideView
            style={
              focusGuidesVisible
                ? styles.focusGuideVisible
                : styles.focusGuideHidden
            }
            destinations={
              focusGuidesAdded && button1Ref?.current
                ? [button1Ref?.current]
                : []
            }
          />
        ) : (
          <View style={styles.emptyFocusGuide} />
        )}
        <Spacer />
        <Button ref={button2Ref} onPress={() => { }}>
          Button 2
        </Button>
      </RowContainer>
    </SectionContainer>
  );
};

export default TVFocusGuideViewExample;
