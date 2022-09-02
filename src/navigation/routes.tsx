import React from 'react';

import SimpleButtonExample from '../screens/SimpleButtonExample';
import ButtonsWithFocusHandlingExample from '../screens/ButtonsWithFocusHandlingExample';
import TextInputExample from '../screens/TextInputExample';
import TVFocusGuideViewExample from '../screens/TVFocusGuideViewExample';
import NextFocusExample from '../screens/NextFocusExample';
import PressableExample from '../screens/PressableExample';
import VideoExample from '../screens/VideoExample';

const routes: any = {
  VideoExample: {
    title: 'Video example',
    component: <VideoExample />,
  },
  SimpleButtonExample: {
    title: 'Simple button example',
    component: <SimpleButtonExample />,
  },
  ButtonsWithFocusHandlingExample: {
    title: 'Buttons with focus and blur handling',
    component: <ButtonsWithFocusHandlingExample />,
  },
  PressableExample: {
    title: 'Pressable example',
    component: <PressableExample />,
  },
  TextInputExample: {
    title: 'Text input example',
    component: <TextInputExample />,
  },
  TVFocusGuideViewExample: {
    title: 'TVFocusGuideView example',
    component: <TVFocusGuideViewExample />,
  },
  NextFocusExample: {
    title: 'nextFocus API example',
    component: <NextFocusExample />,
  },
};

export default routes;
