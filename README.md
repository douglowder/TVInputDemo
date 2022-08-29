# TVInputDemo

A demo project for [React Native for TV](https://github.com/react-native-tvos/react-native-tvos).

### Demonstrations included

- Simple buttons
- Buttons that detect when they are focused (activated) by the TV focus engine
- Use of `Pressable`
- Use of `TextInput`
- React Native for TV focus management APIs (`TVFocusGuideView`, `nextFocus`, `hasTVPreferredFocus`)
- Apple TV menu key enablement with `TVEventControl`
- Dark/light theming with `useColorScheme()` and React context

### Third party frameworks used

- Navigation with [React Navigation](https://reactnavigation.org/)
- Animation with [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- Material design components from [React Native Paper](https://callstack.github.io/react-native-paper/)

### Getting started

- Clone this repo
- In the `TVInputDemo` directory, execute

```bash
yarn
npx pod-install
yarn tvos # for Apple TV
yarn android # for Android TV, a TV emulator should already be running
```

