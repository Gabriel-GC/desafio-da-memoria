import { useContext } from 'react';
import { LogicaJogoDaMemoriaContext } from '../contexts/LogicaJogoDaMemoria';

//Facilita  uso da LogicaJogoDaMemoriaContext no Placar, sendo hookado pelo useJogoDaMemoria
export const useJogoDaMemoria = () => {
  const contexto = useContext(LogicaJogoDaMemoriaContext);
  return contexto;
};