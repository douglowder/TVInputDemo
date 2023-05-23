/*
 * Very simple navigation wrapper that shows a list of buttons to navigate to any of the provided examples.
 * Includes support for navigation back to the list with the menu key (Apple TV) or back key (Android TV).
 */

import React from 'react';
import {
  BackHandler,
  Modal,
  Platform,
  StyleSheet,
  TVEventControl,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createStackNavigator} from '@react-navigation/stack';

import {
  BackButton,
  Button,
  SectionContainer,
  Text,
} from '../common/StyledComponents';
import {useTVTheme} from '../common/TVTheme';
import {routes, componentForRoute} from './routes';

import 'react-native/tvos-types.d';

const About = () => {
  const [modalShown, setModalShown] = React.useState(false);
  const {colors} = useTVTheme();

  const modalStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    opacity: 0.95,
  };

  const aboutStyle = {
    minHeight: 100,
  };

  const version =
    global.HermesInternal?.getRuntimeProperties?.()['OSS Release Version'] ??
    '';

  const hermesText = global.HermesInternal ? `Engine: Hermes ${version}` : '';

  return (
    <View style={aboutStyle}>
      <Button onPress={() => setModalShown(!modalShown)}>About</Button>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalShown}
        onRequestClose={() => setModalShown(false)}>
        <View style={modalStyle}>
          <SectionContainer title="About">
            <Text>
              A demo of various APIs and components provided by React Native for
              TV.
            </Text>
            <Text>
              {hermesText}
            </Text>
            <Button mode="contained" onPress={() => setModalShown(false)}>
              Dismiss
            </Button>
          </SectionContainer>
        </View>
      </Modal>
    </View>
  );
};

const HomeScreen = (props: {navigation: any}) => {
  const {navigation} = props;

  return (
    <SectionContainer title="">
      <View>
        {Object.keys(routes)
          .map((item) => {
            return {...routes[item], key: item};
          })
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
      {componentForRoute(route.name, {navigation})}
      <View style={styles.container} />
      <BackButton onPress={() => navigation.goBack()}>Back</BackButton>
    </View>
  );
};

//const Stack = (Platform.OS === 'android') ? createNativeStackNavigator(): createStackNavigator();
const Stack = createNativeStackNavigator();

const Navigation = (): any => {
  const {colors, dark} = useTVTheme();

  const headerOptions = {
    headerShown: true,
    title: 'React Native TV demo',
    headerLeft: () => <View />,
    headerRight: () => <About />,
    headerStyle: { backgroundColor: colors.background },
    headerTitleStyle: { fontSize: 40, color: colors.text },
  };
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

  return (
    <NavigationContainer theme={navigationTheme}>
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
              options={{headerShown: false}}
            />
          ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    paddingVertical: 30,
  },
});
