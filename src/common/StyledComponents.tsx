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
import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';

import TVTheme from './TVTheme';

import 'react-native/tvos-types.d';

const Button = React.forwardRef(
  (props: React.ComponentPropsWithoutRef<typeof PaperButton>, ref: any) => {
    return (
      <PaperButton {...props} ref={ref} style={styles.button} uppercase={false}>
        {props.children}
      </PaperButton>
    );
  },
);

const PlainTextInput = (props: React.ComponentProps<any>) => {
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
  const textInputRef = React.useRef<any>();
  return (
    <TouchableOpacity
      style={styles.container}
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
  return <PaperText style={styles.text}>{props.children}</PaperText>;
};

const Spacer = () => {
  return <View style={styles.spacer} />;
};

const RowContainer = (props: React.ComponentProps<typeof View>) => {
  return <View style={styles.row}>{props.children}</View>;
};

const SectionContainer = (props: React.ComponentProps<typeof List.Section>) => {
  return (
    <List.Section title={props.title} titleStyle={styles.titleStyle}>
      {props.children}
    </List.Section>
  );
};

const scale = Platform.isTV && Platform.OS === 'ios' ? 2.0 : 1.0;

const sizes = {
  buttonMargin: 10.0 * scale,
  rowPadding: 10.0 * scale,
  textPadding: 10.0 * scale,
  spacerWidth: 250.0 * scale,
  labelFontSize: 15.0 * scale,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: TVTheme.colors.surface,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: sizes.rowPadding,
  },
  text: {
    padding: sizes.textPadding,
    color: TVTheme.colors.primary,
  },
  textInput: {
    fontSize: TVTheme.fonts.regular.fontSize,
    color: TVTheme.colors.primary,
  },
  labelStyle: {
    color: TVTheme.colors.primary,
  },
  titleStyle: {
    color: TVTheme.colors.primary,
  },
  button: {
    margin: sizes.buttonMargin,
    uppercaseLabel: false,
  },
  spacer: {
    width: sizes.spacerWidth,
  },
});

export {
  Button,
  PlainTextInput,
  RowContainer,
  SectionContainer,
  Spacer,
  Text,
  WrappedTextInput,
};
