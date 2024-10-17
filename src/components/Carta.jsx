import classNames from 'classnames';
import { useJogoDaMemoria } from '../hooks/useJogoDaMemoria';

export const Carta = ({id, idDopar, imagem}) => {

  const {virarCarta, idsDasCartasViradas} = useJogoDaMemoria();

  const controlarClique = () => {
    virarCarta({id, idDopar});
  };


  const cartaViarada = idsDasCartasViradas.includes(id);

  const cn = classNames('carta', {
    'carta--virada': cartaViarada,});

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