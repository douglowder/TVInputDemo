import React from 'react';

import SimpleButtonExample from '../screens/SimpleButtonExample';
import ButtonsWithFocusHandlingExample from '../screens/ButtonsWithFocusHandlingExample';
import TextInputExample from '../screens/TextInputExample';
import TVFocusGuideViewExample from '../screens/TVFocusGuideViewExample';
import NextFocusExample from '../screens/NextFocusExample';
import PressableExample from '../screens/PressableExample';

const routes: any = {
  SimpleButtonExample: {
    title: 'Simple button example',
    component: <SimpleButtonExample />,
    worksOnAndroid: true,
  },
  ButtonsWithFocusHandlingExample: {
    title: 'Buttons with focus and blur handling',
    component: <ButtonsWithFocusHandlingExample />,
    worksOnAndroid: true,
  },
  PressableExample: {
    title: 'Pressable example',
    component: <PressableExample />,
    worksOnAndroid: true,
  },
  TextInputExample: {
    title: 'Text input example',
    component: <TextInputExample />,
    worksOnAndroid: true,
  },
  TVFocusGuideViewExample: {
    title: 'TVFocusGuideView example',
    component: <TVFocusGuideViewExample />,
    worksOnAndroid: false,
  },
  NextFocusExample: {
    title: 'nextFocus API example',
    component: <NextFocusExample />,
    worksOnAndroid: true,
  },
};

export default routes;
