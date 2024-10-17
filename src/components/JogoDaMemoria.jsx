import { paresDeCartas } from "../constants/cartas";
import { Carta } from "./Carta";
import { Placar } from "./Placar";

export const JogoDaMemoria = () => {
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
    </div>
  );
};