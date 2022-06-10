/*
 * Very simple navigation wrapper that shows a list of buttons to navigate to any of the provided examples.
 * Includes support for navigation back to the list with the menu key (Apple TV) or back key (Android TV).
 */

import React from 'react';
import {BackHandler, Platform, TVEventControl, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {BackButton, Button, SectionContainer} from '../common/StyledComponents';
import {useTVTheme} from '../common/TVTheme';
import routes from './routes';

import 'react-native/tvos-types.d';

const HomeScreen = (props: {navigation: any}) => {
  const {navigation} = props;
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
  React.useEffect(() => {
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
      {routes[route.name].component}
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

  return (
    <NavigationContainer>
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
          .filter((item) => Platform.OS === 'ios' || item.worksOnAndroid)
          .map((item) => (
            <Stack.Screen
              name={item.key}
              component={ExampleScreen}
              options={headerOptions}
            />
          ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
