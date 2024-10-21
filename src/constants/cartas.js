const imagens = [
  "carta-1.jpg",
  "carta-2.jpg",
  "carta-3.jpg",
  "carta-4.jpg",
  "carta-5.jpg",
  "carta-6.jpg",


];

const cartasUnicas = imagens.map((imagem, idDoPar) => ({
  idDoPar,
  imagem,
}));

export const paresDeCartas = [...cartasUnicas, ...cartasUnicas].map(
  (carta, id) => ({
    ...carta,
    id,
  })
);
