import React, { createContext, useContext, useState, useMemo } from "react";

interface AppContextType {
  hideSidebar: boolean;
  setHideSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [hideSidebar, setHideSidebar] = useState(false);

  const value = useMemo(
    () => ({ hideSidebar, setHideSidebar }),
    [hideSidebar, setHideSidebar]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppCtx = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppCtx must be used within a AppContextProvider");
  }
  return context;
};
