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

type NavigationScreen = {
  key: string;
  title: string;
  component: any;
  worksOnAndroid: boolean;
};

const Navigation = (): any => {
  const [routeKey, setRouteKey] = React.useState<string | null>(null);
  const [previousRouteKey, setPreviousRouteKey] = React.useState<string | null>(
    null,
  );
  const {styles} = useTVTheme();

  const navigateBack = () => {
    setPreviousRouteKey(routeKey);
    setRouteKey(null);
  };

  React.useEffect(() => {
    if (routeKey !== null) {
      TVEventControl.enableTVMenuKey();
    } else {
      TVEventControl.disableTVMenuKey();
    }
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (routeKey !== null) {
          navigateBack();
        }
        return true;
      },
    );

    return () => backHandler.remove();
  });

  if (routeKey !== null) {
    return (
      <View style={styles.container}>
        {routes[routeKey].component}
        <View style={styles.container} />
        <BackButton onPress={() => navigateBack()}>Back</BackButton>
      </View>
    );
  }
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
