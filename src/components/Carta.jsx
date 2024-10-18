import classNames from 'classnames';
import { useJogoDaMemoria } from '../hooks/useJogoDaMemoria';

export const Carta = ({id, idDopar, imagem}) => {

  const {virarCarta, idsDasCartasViradas, idsDosParesEncontrados} = useJogoDaMemoria();

  const controlarClique = () => {
    virarCarta({id, idDopar});
  };

  const cartaEncontrada = idsDosParesEncontrados.includes(idDopar);

  const cartaVirada = cartaEncontrada || idsDasCartasViradas.includes(id);

  const bloqueado = cartaVirada;

  const cn = classNames('carta', {
    'carta--virada': cartaVirada,
  });

  return (
    <button  id={id} className={cn} onClick={controlarClique} disabled={bloqueado}>
      <div className="carta__conteudo">
        <div className="carta__frente"></div>
        <div className="carta__costas">
          <img src={imagem} alt={idDopar} width={300} />
        </div>
      </div>
    </button>
  );
};