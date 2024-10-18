import { Carta } from "./Carta";
import { Placar } from "./Placar";
import { Resultado } from "./Resultado";
import { LogicaJogoDaMemoriaProvider } from "../contexts/LogicaJogoDaMemoria";
import { useJogoDaMemoria } from "../hooks/useJogoDaMemoria";
import { useEffect } from "react";

export const JogoDaMemoria = () => {
  return (
    <LogicaJogoDaMemoriaProvider>
      <JogoDaMemoriaConteudo />
    </LogicaJogoDaMemoriaProvider>
  );
};

export const JogoDaMemoriaConteudo = () => {
  const { cartas, iniciarJogo } = useJogoDaMemoria();
  
  useEffect(() => {
    iniciarJogo();
  }, []);
  
  return (
    // titulo, placar e as cartas
    <div className="jogo-da-memoria">
      <div className="jogo-da-memoria__conteudo">
        <h1>Jogo da Memória</h1>
        <Placar />
        <div className="jogo-da-memoria__cartas">
          {cartas.map((carta) => (
            <Carta key={carta.id} {...carta} />
          ))}
        </div>
      </div>
      <Resultado />
    </div>
  );
};
