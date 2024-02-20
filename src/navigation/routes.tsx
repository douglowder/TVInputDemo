import React from 'react';

import ButtonsWithFocusHandlingExample from '../screens/ButtonsWithFocusHandlingExample';
import NextFocusExample from '../screens/NextFocusExample';
import PressableExample from '../screens/PressableExample';
import SimpleButtonExample from '../screens/SimpleButtonExample';
import TVFocusGuideViewExample from '../screens/TVFocusGuideViewExample';
import TextInputExample from '../screens/TextInputExample';
import VideoExample from '../screens/VideoExample';

const routes: any = {
  SimpleButtonExample: {
    title: 'Simple button example',
  },
  ButtonsWithFocusHandlingExample: {
    title: 'Buttons with focus and blur handling',
  },
  PressableExample: {
    title: 'Pressable example',
  },
  TextInputExample: {
    title: 'Text input example',
  },
  TVFocusGuideViewExample: {
    title: 'TVFocusGuideView example',
  },
  NextFocusExample: {
    title: 'nextFocus API example',
  },
  VideoExample: {
    title: 'Video example',
  },
};

const componentForRoute = (routeKey: string, props: any) => {
  switch (routeKey) {
    case 'SimpleButtonExample':
      return <SimpleButtonExample {...props} />;
    case 'ButtonsWithFocusHandlingExample':
      return <ButtonsWithFocusHandlingExample {...props} />;
    case 'PressableExample':
      return <PressableExample {...props} />;
    case 'TextInputExample':
      return <TextInputExample {...props} />;
    case 'TVFocusGuideViewExample':
      return <TVFocusGuideViewExample {...props} />;
    case 'NextFocusExample':
      return <NextFocusExample {...props} />;
    case 'VideoExample':
      return <VideoExample {...props} />;
  }
};

export {routes, componentForRoute};
