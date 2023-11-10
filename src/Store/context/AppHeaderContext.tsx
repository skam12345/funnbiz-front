// 레이아웃 관련 useContext 사용하여 State 관리
// 현재 탭스크린 헤더와, 메인 헤더 관리 중.
import React, { ReactNode, createContext, useState } from 'react';

const LayoutContext = createContext({});

interface LayoutProviderProps {
  children: ReactNode;
}

const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const [visibleMain, setVisibleMain] = useState(true);
  const [visibleTabHead, setVisibleTabHead] = useState(false);

  const contextValue = {
    visibleMain,
    setVisibleMain,
    visibleTabHead,
    setVisibleTabHead,
  };

  return (
    <LayoutContext.Provider value={contextValue}>
      {children}
    </LayoutContext.Provider>
  );
};

export { LayoutContext, LayoutProvider };
