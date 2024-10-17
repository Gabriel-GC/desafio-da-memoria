import { paresDeCartas } from "../constants/cartas";
import { Carta } from "./Carta";
import { Placar } from "./Placar";
import { Resultado } from "./Resultado";
import { LogicaJogoDaMemoriaProvider } from "../contexts/LogicaJogoDaMemoria";

export const JogoDaMemoria = () => {
  return (
    <LogicaJogoDaMemoriaProvider>
      <JogoDaMemoriaConteudo />
    </LogicaJogoDaMemoriaProvider>
  );
};

export const JogoDaMemoriaConteudo = () => {
  return (
    // titulo, placar e as cartas
    <div className="jogo-da-memoria">
      <div className="jogo-da-memoria__conteudo">
        <h1>Jogo da Memória</h1>
        <Placar />
        <div className="jogo-da-memoria__cartas">
          {paresDeCartas.map((carta) => (
            <Carta key={carta.id} {...carta} />
          ))}
        </div>
      </div>
      <Resultado />
    </div>
  );
};
