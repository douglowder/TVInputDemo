import React from 'react';

const useNavigationFocus = (
  navigation: any,
  setFocus: (focus: boolean) => void,
) => {
  React.useEffect(() => {
    const unsubscribeFocus = navigation.addListener('focus', () => {
      setFocus(true);
    });
    const unsubscribeBlur = navigation.addListener('blur', () => {
      setFocus(false);
    });
    return () => {
      unsubscribeFocus();
      unsubscribeBlur();
    };
  }, [navigation, setFocus]);
};

export default useNavigationFocus;
