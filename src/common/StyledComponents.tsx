/*
 * Wrapped Button component using react-native-paper
 */
import React from 'react';
import {
  Button as PaperButton,
  List,
  Text as PaperText,
} from 'react-native-paper';
import { View } from 'react-native';

import styles from './styles';

import 'react-native/tvos-types.d';

const Button = React.forwardRef(
  (props: React.ComponentPropsWithoutRef<typeof PaperButton>, ref: any) => {
    return (
      <PaperButton
        {...props}
        ref={ref}
        style={styles.button}
        tvParallaxProperties={props.tvParallaxProperties ||
          { pressMagnification: 1.1, pressDuration: 0.2 }}
        uppercase={false}>
        {props.children}
      </PaperButton>
    );
  },
);

const Text = (props: React.ComponentProps<typeof PaperText>) => {
  return <PaperText style={styles.text}>{props.children}</PaperText>;
};

const Spacer = () => {
  return <View style={styles.spacer} />;
};

const RowContainer = (props: React.ComponentProps<typeof View>) => {
  return <View style={styles.row}>{props.children}</View>;
};

const SectionContainer = (props: React.ComponentProps<typeof List.Section>) => {
  return <List.Section title={props.title}>{props.children}</List.Section>;
};

export { Button, RowContainer, SectionContainer, Spacer, Text };
