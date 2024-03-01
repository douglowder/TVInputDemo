# TVInputDemo

A demo project for [React Native for TV](https://github.com/react-native-tvos/react-native-tvos).

This project uses the Expo SDK, as described in the Expo guide ["Build Expo apps for TV"](https://docs.expo.dev/guides/building-for-tv/).

### RNTV demonstrations included

- Simple buttons
- Buttons that detect when they are focused (activated) by the TV focus engine
- Use of `Pressable`
- Use of `TextInput`
- TV-specific focus management components and APIs (`TVFocusGuideView`, `nextFocus()`, `hasTVPreferredFocus()`)
- Apple TV menu key enablement with `TVEventControl`
- Handling remote control events explicitly with `useTVEventHandler()`
- Dark/light theming with `useColorScheme()` and React context

### Other demonstrations included

- Navigation with [React Navigation](https://reactnavigation.org/)
- Animation with [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- Material design components from [React Native Paper](https://callstack.github.io/react-native-paper/)
- Video demo using the [Video component](https://docs.expo.dev/versions/latest/sdk/video/) from the `expo-av` package

### Getting started

- Clone this repo
- In the `TVInputDemo` directory, execute

```bash
yarn
export EXPO_TV=1
npx expo prebuild --clean
yarn ios # for Apple TV
yarn android # for Android TV, a TV emulator should already be running
```

### Enabling Fabric

- In `app.json`, set `newArchEnabled` to `true` in the `expo-build-properties` plugin
- Then redo the above steps:

```bash
export EXPO_TV=1
npx expo prebuild --clean
yarn ios # for Apple TV
yarn android # for Android TV, a TV emulator should already be running
```

### Known issues

- Apple TV simulator issues (these will not occur when building for real devices, and seem to be actual bugs in the simulator):
  - You will need a tvOS 15.x simulator to test video (tvos 16 and 17 simulators won't play the video)
  - Video will pause after a few seconds if full screen video is selected in the video example

### Apple TV screenshots (light theme)

![Simulator Screen Shot - Apple TV - 2022-08-30 at 10 25 32](https://user-images.githubusercontent.com/6577821/187504206-5c1f6249-bb34-4b76-896f-0f133a3f0593.png) ![Simulator Screen Shot - Apple TV - 2022-08-30 at 10 25 52](https://user-images.githubusercontent.com/6577821/187504250-b487d85a-0553-4c56-a54d-ee1f9439cdef.png)

### Android TV screenshots (dark theme)

![Screenshot_1661880380](https://user-images.githubusercontent.com/6577821/187504274-a8ad1f99-5079-4a0d-a931-2e57282f236c.png) ![Screenshot_1661880443](https://user-images.githubusercontent.com/6577821/187504305-9c3e12d8-262f-4d75-bc1b-b6ecf9c364ee.png)
