import React from 'react';

const LastScreenContext = React.createContext({
  lastScreen: 'PressableExample',
  setLastScreen: (_lastScreen: string) => {},
});

const useLastScreen = () => {
  const {lastScreen, setLastScreen} = React.useContext(LastScreenContext);
  return {lastScreen, setLastScreen};
};

const LastScreenProvider = (props: {
  value: {lastScreen: string; setLastScreen: (_lastScreen: string) => void};
  children: any;
}) => {
  return (
    <LastScreenContext.Provider value={props.value}>
      {props.children}
    </LastScreenContext.Provider>
  );
};

export {LastScreenProvider, useLastScreen};
