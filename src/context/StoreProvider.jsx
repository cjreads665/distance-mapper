import React, { createContext } from "react";
import Store from "./Store";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const useContext = Store();
  return (
    <StoreContext.Provider value={useContext}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;