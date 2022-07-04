import React, { useState } from "react";
import { globalState } from "./data";

export const GlobalContext = React.createContext();

export const AppContext = ({ children }) => {
  const [contextState, setContextState] = useState(globalState);

  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      {children}
    </GlobalContext.Provider>
  );
};
