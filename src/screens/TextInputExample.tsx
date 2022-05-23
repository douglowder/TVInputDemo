/*
 * Shows a bare TextInput, then TextInput components wrapped with Touchables
 * for more styling control
 */

import React from 'react';

import {
  PlainTextInput,
  RowContainer,
  SectionContainer,
  WrappedTextInput,
} from '../common/StyledComponents';

import 'react-native/tvos-types.d';

const TextInputExample = () => {
  const [inputText, setInputText] = React.useState('Dougie MacLowder');
  const [inputNumber, setInputNumber] = React.useState('655321');

  return (
    <SectionContainer title="Text Input">
      <RowContainer>
        <PlainTextInput
          label=""
          mode="flat"
          value={inputText}
          onChangeText={(src: React.SetStateAction<string>) => {
            setInputText(src);
          }}
        />
      </RowContainer>
      <RowContainer>
        <WrappedTextInput
          label="Full input"
          value={inputText}
          onChangeText={(src: React.SetStateAction<string>) => {
            setInputText(src);
          }}
        />
      </RowContainer>
      <RowContainer>
        <WrappedTextInput
          label="Number pad input"
          textContentType="telephoneNumber"
          keyboardType="number-pad"
          value={inputNumber}
          onChangeText={(src: React.SetStateAction<string>) =>
            setInputNumber(src)
          }
        />
      </RowContainer>
    </SectionContainer>
  );
};

export default TextInputExample;
