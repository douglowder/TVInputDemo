/*
 * Wrapped Button component using react-native-paper
 */
import React from 'react';
import {
  Button as PaperButton,
  List,
  Text as PaperText,
  TextInput as PaperTextInput,
} from 'react-native-paper';
import {TouchableOpacity, View} from 'react-native';

import {useTVTheme} from './TVTheme';

import 'react-native/tvos-types.d';

const Button = React.forwardRef(
  (props: React.ComponentPropsWithoutRef<typeof PaperButton>, ref: any) => {
    const {styles} = useTVTheme();
    return (
      <PaperButton {...props} ref={ref} style={styles.button} uppercase={false}>
        {props.children}
      </PaperButton>
    );
  },
);

const BackButton = React.forwardRef(
  (props: React.ComponentPropsWithoutRef<typeof PaperButton>, ref: any) => {
    const {styles} = useTVTheme();
    return (
      <Button
        {...props}
        ref={ref}
        mode="contained"
        style={styles.button}
        uppercase={false}>
        {props.children}
      </Button>
    );
  },
);

const PlainTextInput = (props: React.ComponentProps<any>) => {
  const {styles} = useTVTheme();
  return (
    <PaperTextInput
      {...props}
      autoComplete="off"
      mode="flat"
      style={[styles.textInput]}
    />
  );
};

const WrappedTextInput = (props: React.ComponentProps<any>) => {
  const {styles} = useTVTheme();
  const textInputRef = React.useRef<any>();
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => textInputRef?.current?.focus()}>
      <PaperTextInput
        {...props}
        autoComplete="off"
        ref={textInputRef}
        style={styles.textInput}
        mode="outlined"
      />
    </TouchableOpacity>
  );
};

const Text = (props: React.ComponentProps<typeof PaperText>) => {
  const {styles} = useTVTheme();
  return <PaperText style={styles.text}>{props.children}</PaperText>;
};

const Spacer = () => {
  const {styles} = useTVTheme();
  return <View style={styles.spacer} />;
};

const RowContainer = (props: React.ComponentProps<typeof View>) => {
  const {styles} = useTVTheme();
  return <View style={styles.row}>{props.children}</View>;
};

const SectionContainer = (props: React.ComponentProps<typeof List.Section>) => {
  const {styles} = useTVTheme();
  return (
    <List.Section title={props.title} titleStyle={styles.titleStyle}>
      {props.children}
    </List.Section>
  );
};

export {
  BackButton,
  Button,
  PlainTextInput,
  RowContainer,
  SectionContainer,
  Spacer,
  Text,
  WrappedTextInput,
};
