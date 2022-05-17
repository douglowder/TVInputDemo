/*
 * Demo of nextFocus APIs
 */

import React, { useEffect } from 'react';
import {View} from 'react-native';

import {List} from 'react-native-paper';

import {Button, RowContainer} from '../common/StyledComponents';

import styles from '../common/styles';

import 'react-native/tvos-types.d';

const NextFocusExample = () => {

  const [left, setLeft] = React.useState(null);
  const [right, setRight] = React.useState(null);

  return (
    <List.Section title="nextFocus API example">
      <RowContainer>
        <Button
          ref={(c: any) => setLeft(c)}
          nextFocusLeft={right}
          nextFocusRight={right}
          onPress={() => {}}>
              Button 1
        </Button>
        <View style={styles.spacer} />
      </RowContainer>
      <RowContainer>
        <View style={styles.spacer} />
        <Button
          ref={(c: any) => setRight(c)}
          nextFocusLeft={left}
          nextFocusRight={left}
          onPress={() => {}}>
              Button 2
        </Button>
      </RowContainer>
    </List.Section>
  );
};

export default NextFocusExample;
