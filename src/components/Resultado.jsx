import classNames from "classnames";
import { useJogoDaMemoria } from "../hooks/useJogoDaMemoria";
import { useMemo } from "react";
import { resultados } from "../constants/resultados";

export const Resultado = () => {
  const {
    idsDosParesEncontrados,
    cartas,
    quantidadeDeCartasViradas,
    reinicarJogo,
  } = useJogoDaMemoria();

  const jogoAberto = useMemo(
    () => cartas.length > 0 && cartas.length === idsDosParesEncontrados.length * 2,
    [idsDosParesEncontrados.length]
  );
  const cn = classNames("resultado", {
    resultado__aberto: jogoAberto,
  });

  const taxaDeAcertos = (cartas.length / quantidadeDeCartasViradas) * 100;
  const resultado = useMemo(() => {
    return resultados.find(({ min }) => min < taxaDeAcertos);
  }, [taxaDeAcertos]);

  return (
    <div className={cn}>
      <div className="resultado__box">
        <p>Se nível de memória é:</p>
        <h1>{resultado?.titulo}</h1>
        <img
          src={resultado?.imagem}
          alt="Image referente ao nível de memória"
          height={200}
        />
        <p>
          <strong>Taxa de acertos: </strong>
          <span>{taxaDeAcertos.toFixed(0)}%</span>
        </p>
        <button className="button" onClick={reinicarJogo}>
          Nova Partida
        </button>
        <p>
          <small>
            * Essa análise é ilustrativa e não possui base científica.
          </small>
        </p>
      </div>
    </div>
  );
};
