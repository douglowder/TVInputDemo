/*
 * Shows two buttons with empty onPress methods
 */

import React from 'react';
import {View} from 'react-native';

import {List} from 'react-native-paper';
import {Button, RowContainer} from '../common/StyledComponents';

import styles from '../common/styles';

import 'react-native/tvos-types.d';

const SimpleButtonExample = () => {
  return (
    <List.Section title="TV button example">
      <RowContainer>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </RowContainer>
    </List.Section>
  );
};

export default SimpleButtonExample;
