/*
 * Very simple navigation wrapper that shows a list of buttons to navigate to any of the provided examples.
 * Includes support for navigation back to the list with the menu key (Apple TV) or back key (Android TV).
 */

import React from 'react';
import {BackHandler, TVEventControl, View} from 'react-native';

import {Button, SectionContainer} from './common/StyledComponents';

import SimpleButtonExample from './screens/SimpleButtonExample';
import ButtonsWithFocusHandlingExample from './screens/ButtonsWithFocusHandlingExample';
import TextInputExample from './screens/TextInputExample';
import TVFocusGuideViewExample from './screens/TVFocusGuideViewExample';
import NextFocusExample from './screens/NextFocusExample';

import 'react-native/tvos-types.d';

type NavigationComponent = JSX.Element | null;

type NavigationScreen = {
  key: string;
  title: string;
  component: NavigationComponent;
};

const Navigation = () => {
  const [screen, setScreen] = React.useState<NavigationComponent>(null);

  React.useEffect(() => {
    if (screen !== null) {
      TVEventControl.enableTVMenuKey();
    } else {
      TVEventControl.disableTVMenuKey();
    }
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (screen !== null) {
          setScreen(null);
        }
        return true;
      },
    );

    return () => backHandler.remove();
  }, [screen]);

  const navigation: NavigationScreen[] = [
    {
      key: 'SimpleButtonExample',
      title: '(1) Simple button example',
      component: <SimpleButtonExample />,
    },
    {
      key: 'ButtonsWithFocusHandlingExample',
      title: '(2) Buttons with focus and blur handling',
      component: <ButtonsWithFocusHandlingExample />,
    },
    {
      key: 'TextInputExample',
      title: '(3) Text input example',
      component: <TextInputExample />,
    },
    {
      key: 'TVFocusGuideViewExample',
      title: '(4) TVFocusGuideView example',
      component: <TVFocusGuideViewExample />,
    },
    {
      key: 'NextFocusExample',
      title: '(5) nextFocus API example',
      component: <NextFocusExample />,
    },
  ];
  if (screen != null) {
    return screen;
  }
  return (
    <SectionContainer title="Menu">
      <View>
        {navigation.map((item) => (
          <Button key={item.key} onPress={() => setScreen(item.component)}>
            {item.title}
          </Button>
        ))}
      </View>
    </SectionContainer>
  );
};

export default Navigation;
