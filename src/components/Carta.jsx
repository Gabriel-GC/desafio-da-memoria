import { useJogoDaMemoria } from "../hooks/useJogoDaMemoria"

export const Carta = ({id, idDopar, imagem}) => {

    const {virarCarta} = useJogoDaMemoria()

    const controlarClique = () => {
        virarCarta({id, idDopar})
    }

    return (
        <button  id={id} className="carta" onClick={controlarClique}>
            <div className="carta__conteudo">
                <div className="carta__frente"></div>
                <div className="carta__costas">
                    <img src={imagem} alt={`Carta ${id}`} width={300} />
                </div>
            </div>
        </button>
    )
}