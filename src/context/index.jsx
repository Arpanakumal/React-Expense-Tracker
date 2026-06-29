import { createContext } from "react";

export const GlobalContext = createContext(null);

const Index = ({ children }) => {
  return (
    <GlobalContext.Provider value={{}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Index;
