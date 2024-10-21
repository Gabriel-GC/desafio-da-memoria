import { createContext, useState } from "react";
import { paresDeCartas } from "../constants/cartas";
import { PONTOS, TEMPO_MS } from "../constants/configuracoes";
import { buscarCartas } from "../services/buscarCartaParaOJogo";

export const LogicaJogoDaMemoriaContext = createContext();

export const LogicaJogoDaMemoriaProvider = ({ children }) => {
  const [cartas, definirCartas] = useState([]);
  const [carregandoCartas, definirCarregandoCartas] = useState(false);
  const [idsDosParesEncontrados, definirIdsDosParesEncontrados] = useState([]);
  const [idsDasCartasViradas, definirIdDasCartasViradas] = useState([]);
  //Altera o placar
  const [quantidadeDeCartasViradas, definirQuantidadeDeCartasViradas] =
    useState(0);
  const [quantidadeDePontos, definirQuantidadeDePontos] = useState(0);
  //Soma quantidade de cartas viradas e mostra no Painel
  const incrementarQuantidadeDeCartasViradas = () => {
    definirQuantidadeDeCartasViradas((quantidade) => quantidade + 1);
  };

  const incrementarPontos = () => {
    definirQuantidadeDePontos((pontos) => pontos + PONTOS.ENCONTRAR_CARTA);
  };

  const iniciarJogo = async () => {
    definirCarregandoCartas(true);
    const cartas = await buscarCartas();
    definirCartas(cartas);
    definirCarregandoCartas(false);

  };

  const reinicarJogo = () => {
    definirIdsDosParesEncontrados([]);
    definirIdDasCartasViradas([]);
    definirCartas(paresDeCartas);
    definirQuantidadeDeCartasViradas(0);
    definirQuantidadeDePontos(0);
    iniciarJogo();
  };

  const registrarParEncontrado = (idDoPar) =>
    definirIdsDosParesEncontrados((ids) => [...ids, idDoPar]);

  const compararCartas = ([id1, id2]) => {
    const idPar1 = cartas.find(({ id }) => id === id1)?.idDoPar;
    const idPar2 = cartas.find(({ id }) => id === id2)?.idDoPar;
    return idPar1 === idPar2;
  };

  const virarCarta = ({ id, idDoPar }) => {
    incrementarQuantidadeDeCartasViradas();

    const cartaJaVirada =
      idsDasCartasViradas.includes(id) ||
      idsDosParesEncontrados.includes(idDoPar);

    if (cartaJaVirada) return;

    if (idsDasCartasViradas.length >= 2) {
      return;
    }

    if (idsDasCartasViradas.length === 0) {
      return definirIdDasCartasViradas([id]);
    }

    const id1 = idsDasCartasViradas[0];
    const id2 = id;
    const ids = [id1, id2];
    definirIdDasCartasViradas(ids);

    const cartasIguais = compararCartas(ids);
    if (cartasIguais) {
      incrementarPontos();
      registrarParEncontrado(idDoPar);
    }
    //Fas as cartas voltarem viradas depois de 1s, se as cartas forem igual tempo zera
    const tempo = cartasIguais ? 0 : TEMPO_MS.VIRAR_CARTAS;

    setTimeout(() => {
      definirIdDasCartasViradas([]);
    }, tempo);
  };

  const valor = {
    cartas,
    idsDosParesEncontrados,
    idsDasCartasViradas,

    quantidadeDeCartasViradas,
    quantidadeDePontos,
    carregandoCartas,

    iniciarJogo,
    virarCarta,
    reinicarJogo,
  };
  return (
    <LogicaJogoDaMemoriaContext.Provider value={valor}>
      {children}
    </LogicaJogoDaMemoriaContext.Provider>
  );
};
