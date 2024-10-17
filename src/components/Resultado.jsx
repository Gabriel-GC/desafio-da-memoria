import classNames from "classnames";

export const Resultado = () => {
    const cn = classNames("resultado",{
        "resultado__aberto": false
    })
    return (
        <div className={cn}>
            <div className="resultado__box">
                <p>Se nível de memória é:</p>
                <h1>Bom</h1>
                <img src="/monkey-3.png" alt="Image referente ao nível de memória" height={150} />
                <p>
                    <strong>Taxa de acertos: </strong>
                    <span>60%</span>
                </p>
                <button className="button">
                    Nova Partida
                </button>
                <p>
                    <small>
                        * Essa análise é ilustrativa e não possui base científica.
                    </small>
                </p>
            </div>
        </div>
    )
}