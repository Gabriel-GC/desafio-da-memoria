// eslint-disable-next-line
import { createContext, useState } from "react";

export const LogicaJogoDaMemoriaContext = createContext();

export const LogicaJogoDaMemoriaProvider = ({ children }) => {
  const [cartas, definirCartas] = useState([]);
    
  const [idsDosParesEncontrados, definirIdsDosParesEncontrados] = useState([]);
  const [idsDasCartasViradas, definirIdDasCartasViradas] = useState([]);

  //Altera o placar
  const [quantidadeDeCartasViradas, definirQuantidadeDeCartasViradas] = useState(0);
  const [quantidadeDePontos, definirQuantidadeDePontos] = useState(0); 

  //Soma quantidade de cartas viradas e mostra no Painel
  const incrementarQuantidadeDeCartasViradas = () => {
    definirQuantidadeDeCartasViradas((quantidade) => quantidade + 1);
  };
    
  const virarCartas = ({ id, idDoPar }) => {
    incrementarQuantidadeDeCartasViradas();
    definirIdDasCartasViradas(ids => [...ids, id]);
  };

  const valor = {
    cartas,
    quantidadeDeCartasViradas,
    quantidadeDePontos,
    virarCartas,
    idsDasCartasViradas
  };
  return (
    <LogicaJogoDaMemoriaContext.Provider>
      {children}
    </LogicaJogoDaMemoriaContext.Provider>
  );
};
// eslint-disable-next-line