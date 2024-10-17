import { createContext } from "react";

const LogicaJogoDaMemoriaContext = createContext();

export const LogicaJogoDaMemoriaProvider = ({ children }) => {
    const valor = {
        
    }
  return (
    <LogicaJogoDaMemoriaContext.Provider>
      {children}
    </LogicaJogoDaMemoriaContext.Provider>
  );
};
