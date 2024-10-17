import classNames from 'classnames';
import { useJogoDaMemoria } from '../hooks/useJogoDaMemoria';

export const Carta = ({id, idDopar, imagem}) => {

  const {virarCarta, idsDasCartasViradas, idsDosParesEncontrados} = useJogoDaMemoria();

  const controlarClique = () => {
    virarCarta({id, idDopar});
  };

  const cartaEncontrada = idsDosParesEncontrados.includes(idDopar)
  const cartaViarada = cartaEncontrada || idsDasCartasViradas.includes(id);
  const bloqueado = cartaViarada;

  const cn = classNames('carta', {
    'carta--virada': cartaViarada,
  });

  return (
    <button  id={id} className={cn} onClick={controlarClique}>
      <div className="carta__conteudo">
        <div className="carta__frente"></div>
        <div className="carta__costas">
          <img src={imagem} alt={`Carta ${id}`} width={300} />
        </div>
      </div>
    </button>
  );
};