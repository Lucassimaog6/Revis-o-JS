import { useRef, useState } from "react"

export default function Atv3() {
    const numero = useRef(0)
    const [resultado, setResultado] = useState()

    const calcularParcelas = (e) => {
        e.preventDefault();
        switch (parseInt(numero.current.value)) {
            case 1:
                setResultado("Janeiro")
                break;
            case 2:
                setResultado("Fevereiro")
                break;
            case 3:
                setResultado("Março")
                break;
            case 4:
                setResultado("Abril")
                break;
            case 5:
                setResultado("Maio")
                break;
            case 6:
                setResultado("Junho")
                break;
            case 7:
                setResultado("Julho")
                break;
            case 8:
                setResultado("Agosto")
                break;
            case 9:
                setResultado("Setembro")
                break;
            case 10:
                setResultado("Outubro")
                break;
            case 11:
                setResultado("Novembro")
                break;
            case 12:
                setResultado("Dezembro")
                break;
        }
    }

    return (
        <form onSubmit={e => calcularParcelas(e)} className="w-96 flex flex-col gap-2">
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium text-center">
                    Clique para ver o enunciado
                </div>
                <div className="collapse-content">
                    <p>Faça um script que receba um número de 1 a 12 e retorne com o nome do respectivo mês
                        referente ao número. Ex - Entrou com número 1 saída: Janeiro e assim sucessivamente.</p>
                </div>
            </div>
            <label className="text-left label-text">Digite o número:  </label>
            <input className="input" type="text" ref={numero} />

            <button className="btn w-fit mx-auto">Calcular</button>
            {resultado !== undefined ? <h1>O mês {numero.current.value} é o {resultado}</h1> : null}
        </form>
    );
}