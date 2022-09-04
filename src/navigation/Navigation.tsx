/*
 * Very simple navigation wrapper that shows a list of buttons to navigate to any of the provided examples.
 * Includes support for navigation back to the list with the menu key (Apple TV) or back key (Android TV).
 */

import React from 'react';
import {BackHandler, TVEventControl, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {BackButton, Button, SectionContainer} from '../common/StyledComponents';
import {useTVTheme} from '../common/TVTheme';
import {routes, componentForRoute} from './routes';

import 'react-native/tvos-types.d';
import useNavigationFocus from './useNavigationFocus';
import {LastScreenProvider, useLastScreen} from './LastScreen';

const HomeScreen = (props: {navigation: any}) => {
  const {navigation} = props;

  // State used to track which screen was last navigated to, and set
  // TV focus to the button for that screen when navigating back home
  const {lastScreen} = useLastScreen();
  const [needPreferredFocus, setNeedPreferredFocus] = React.useState(false);

  useNavigationFocus(navigation, setNeedPreferredFocus);

  return (
    <SectionContainer title="Menu">
      <View>
        {Object.keys(routes)
          .map((item) => {
            return {...routes[item], key: item};
          })
          .map((item, i) => (
            <Button
              hasTVPreferredFocus={
                needPreferredFocus && lastScreen === item.key
              }
              mode="contained"
              key={item.key}
              onPress={() => navigation.navigate(item.key)}>
              ({i + 1}) {item.title}
            </Button>
          ))}
      </View>
    </SectionContainer>
  );
};

const ExampleScreen = (props: {navigation: any; route: any}) => {
  const {navigation, route} = props;
  const {styles} = useTVTheme();
  const {setLastScreen} = useLastScreen();
  React.useEffect(() => {
    // Set last screen context for the home navigation screen
    setLastScreen(route.name);
    // On Apple TV, the menu key must not have an attached gesture handler,
    // otherwise it will not navigate out of the app back to the Apple TV main screen
    // as expected by Apple guidelines.
    TVEventControl.enableTVMenuKey();
    // Enable back navigation with Apple TV menu key or Android back button
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        navigation.goBack();
        return true;
      },
    );
    // This cleans up the back nav handler on unmount
    return () => {
      backHandler.remove();
      TVEventControl.disableTVMenuKey();
    };
  });
  return (
    <View style={styles.container}>
      {componentForRoute(route.name, {navigation})}
      <View style={styles.container} />
      <BackButton onPress={() => navigation.goBack()}>Back</BackButton>
    </View>
  );
};

const Stack = createStackNavigator();

const Navigation = (): any => {
  const headerOptions = {
    headerShown: false,
  };
  const {colors, dark} = useTVTheme();

  const navigationTheme = {
    dark,
    colors: {
      primary: colors.primary,
      background: colors.background,
      card: colors.backdrop,
      text: colors.text,
      border: colors.surface,
      notification: colors.error,
    },
  };

  const [lastScreen, setLastScreen] = React.useState('');

  return (
    <NavigationContainer theme={navigationTheme}>
      <LastScreenProvider value={{lastScreen, setLastScreen}}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={headerOptions}
          />
          {Object.keys(routes)
            .map((item) => {
              return {...routes[item], key: item};
            })
            .map((item) => (
              <Stack.Screen
                name={item.key}
                key={item.key}
                component={ExampleScreen}
                options={headerOptions}
              />
            ))}
        </Stack.Navigator>
      </LastScreenProvider>
    </NavigationContainer>
  );
};

export default Navigation;
