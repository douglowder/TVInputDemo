/*
 * Very simple navigation wrapper that shows a list of buttons to navigate to any of the provided examples.
 * Includes support for navigation back to the list with the menu key (Apple TV) or back key (Android TV).
 */

import React from 'react';
import {BackHandler, Platform, TVEventControl, View} from 'react-native';

import {BackButton, Button, SectionContainer} from './common/StyledComponents';

import SimpleButtonExample from './screens/SimpleButtonExample';
import ButtonsWithFocusHandlingExample from './screens/ButtonsWithFocusHandlingExample';
import TextInputExample from './screens/TextInputExample';
import TVFocusGuideViewExample from './screens/TVFocusGuideViewExample';
import NextFocusExample from './screens/NextFocusExample';

import 'react-native/tvos-types.d';
import {useTVTheme} from './common/TVTheme';

type NavigationScreen = {
  key: string;
  title: string;
  component: any;
  worksOnAndroid: boolean;
};

const Navigation = (): any => {
  const [screen, setScreen] = React.useState<any>(null);
  const {styles} = useTVTheme();

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
      title: 'Simple button example',
      component: <SimpleButtonExample />,
      worksOnAndroid: true,
    },
    {
      key: 'ButtonsWithFocusHandlingExample',
      title: 'Buttons with focus and blur handling',
      component: <ButtonsWithFocusHandlingExample />,
      worksOnAndroid: true,
    },
    {
      key: 'TextInputExample',
      title: 'Text input example',
      component: <TextInputExample />,
      worksOnAndroid: true,
    },
    {
      key: 'TVFocusGuideViewExample',
      title: 'TVFocusGuideView example',
      component: <TVFocusGuideViewExample />,
      worksOnAndroid: false,
    },
    {
      key: 'NextFocusExample',
      title: 'nextFocus API example',
      component: <NextFocusExample />,
      worksOnAndroid: true,
    },
  ];
  if (screen != null) {
    return (
      <View style={styles.container}>
        {screen}
        <View style={styles.container} />
        <BackButton onPress={() => setScreen(null)}>Back</BackButton>
      </View>
    );
  }
  return (
    <SectionContainer title="Menu">
      <View>
        {navigation
          .filter((item) => Platform.OS === 'ios' || item.worksOnAndroid)
          .map((item, i) => (
            <Button
              mode="contained"
              key={item.key}
              onPress={() => setScreen(item.component)}>
              ({i + 1}) {item.title}
            </Button>
          ))}
      </View>
    </SectionContainer>
  );
};

export default Navigation;
