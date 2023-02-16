import { useRef, useState } from "react";

// Faça um script que entre com o nome e o salário de um funcionário e 
// mostre seu novo salário, sabendo que o mesmo teve um aumento de 10%.

export default function Atv1() {
    const name = useRef("")
    const wage = useRef(0)
    const [result, setResult] = useState()

    const calculateIncrease = (e) => {
        e.preventDefault();
        const wageIncreased = (parseInt(wage.current.value) * 1.1).toFixed(2);
        setResult(wageIncreased)
    }
    return (
        <form onSubmit={e => calculateIncrease(e)} className="w-60 text-center flex flex-col gap-2">
            <small>
                Faça um script que contenha um menu de seleção deste exercício e execute os mesmos
                mediante seleção: Ex. selecionei 1, deve executar a primeira atividade e assim por diante.
            </small>
            <label className="text-left">Digite seu nome: </label>
            <input type="text" ref={name} />

            <label className="text-left mt-4">Digite seu Salário: </label>
            <input type="text" ref={wage} />

            <button>Calcular</button>
            {result !== undefined ? <h1>Parabéns {name.current.value}, seu salário agora é {result}!!!</h1> : null}
        </form>
    );
}