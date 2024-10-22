import { paresDeCartas } from "../constants/cartas";

export const buscarCartas = async () => {
  await delay(5200);
  return embaralharLista(paresDeCartas);
};

const delay = async (tempo = 2000) => {
  return new Promise((resolve) => {
    setTimeout(resolve, tempo);
  });
};

const embaralharLista = (lista = []) => {
  for (let indice = lista.length - 1; indice > 0; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * (indice + 1));

    const item = lista[indice];
    const itemAleatorio = lista[indiceAleatorio];

    lista[indice] = itemAleatorio;
    lista[indiceAleatorio] = item;
  }
  return lista;
};
