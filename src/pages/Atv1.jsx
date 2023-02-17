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
        <form onSubmit={e => calculateIncrease(e)} className="w-96 flex flex-col gap-2">
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium text-center">
                    Clique para ver o enunciado
                </div>
                <div className="collapse-content">
                    <p>Faça um script que entre com o nome e o salário de um funcionário e mostre seu novo
                        salário, sabendo que o mesmo teve um aumento de 10%.</p>
                </div>
            </div>
            <label className="text-left label-text">Digite seu nome: </label>
            <input className="input w-full" type="text" ref={name} />

            <label className="text-left label-text mt-4">Digite seu Salário: </label>
            <input className="input w-full" type="text" ref={wage} />

            <button className="btn w-fit mx-auto">Calcular</button>
            {result !== undefined ? <h1>Parabéns {name.current.value}, seu salário agora é {result}!!!</h1> : null}
        </form>
    );
}