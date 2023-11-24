import React, { ReactNode, createContext, useState } from 'react';

const GuestContext = createContext({});

interface LayoutProviderProps {
  children: ReactNode;
}

const GuestProvider = ({ children }: LayoutProviderProps) => {
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [adultStyle, setAdultStyle] = useState({
    backgroundColor: 'grey',
  });
  const [childStyle, setChildStyle] = useState({
    backgroundColor: 'grey',
  });
  const [buttonStyle, setButtonStyle] = useState({
    backgroundColor: 'grey',
  });

  const contextValue = {
    adult,
    setAdult,
    child,
    setChild,
    adultStyle,
    setAdultStyle,
    childStyle,
    setChildStyle,
    buttonStyle,
    setButtonStyle,
  };

  return (
    <GuestContext.Provider value={contextValue}>
      {children}
    </GuestContext.Provider>
  );
};

export { GuestContext, GuestProvider };
