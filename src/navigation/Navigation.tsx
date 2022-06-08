/*
 * Very simple navigation wrapper that shows a list of buttons to navigate to any of the provided examples.
 * Includes support for navigation back to the list with the menu key (Apple TV) or back key (Android TV).
 */

import React from 'react';
import {BackHandler, Platform, TVEventControl, View} from 'react-native';

import {BackButton, Button, SectionContainer} from '../common/StyledComponents';
import {useTVTheme} from '../common/TVTheme';
import routes from './routes';

import 'react-native/tvos-types.d';

const Navigation = (): any => {
  // Defines which screen (route) we are showing
  const [routeKey, setRouteKey] = React.useState<string | null>(null);
  // If we have navigated back, this represents the screen we navigated from.
  // Used to make sure that TV focus defaults to the right button on the home screen.
  const [previousRouteKey, setPreviousRouteKey] = React.useState<string | null>(
    null,
  );
  const {styles} = useTVTheme();

  const navigateBack = () => {
    setPreviousRouteKey(routeKey);
    setRouteKey(null);
  };

  React.useEffect(() => {
    // On Apple TV, the menu key must not have an attached gesture handler,
    // otherwise it will not navigate out of the app back to the Apple TV main screen
    // as expected by Apple guidelines.
    if (routeKey !== null) {
      TVEventControl.enableTVMenuKey();
    } else {
      TVEventControl.disableTVMenuKey();
    }
    // Enable back navigation with Apple TV menu key or Android back button
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (routeKey !== null) {
          navigateBack();
        }
        return true;
      },
    );
    // This cleans up the back nav handler on unmount
    return () => backHandler.remove();
  });

  // If one of the example screens is selected, show it
  if (routeKey !== null) {
    return (
      <View style={styles.container}>
        {routes[routeKey].component}
        <View style={styles.container} />
        <BackButton onPress={() => navigateBack()}>Back</BackButton>
      </View>
    );
  }
  // Otherwise, show the main navigation screen, and have focus default
  // to the button that was previously selected (if we have back navigated)
  return (
    <SectionContainer title="Menu">
      <View>
        {Object.keys(routes)
          .map((item) => {
            return {...routes[item], key: item};
          })
          .filter((item) => Platform.OS === 'ios' || item.worksOnAndroid)
          .map((item, i) => (
            <Button
              mode="contained"
              key={item.key}
              hasTVPreferredFocus={item.key === previousRouteKey}
              onPress={() => setRouteKey(item.key)}>
              ({i + 1}) {item.title}
            </Button>
          ))}
      </View>
    </SectionContainer>
  );
};

export default Navigation;
