import { useRef, useState } from "react"



export default function Atv2() {
    const intA = useRef(0)
    const intB = useRef(0)
    const [intC, setIntC] = useState()

    const calculateSum = (e) => {
        e.preventDefault();
        if (intA.current.value === intB.current.value) {
            setIntC(parseInt(intA.current.value) + parseInt(intB.current.value))
        } else {
            setIntC(parseInt(intA.current.value) * parseInt(intB.current.value))
        }
    }
    return (
        <form onSubmit={e => calculateSum(e)} className="w-96 flex flex-col gap-2">
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium text-center">
                    Clique para ver o enunciado
                </div>
                <div className="collapse-content">
                    <p>Faça um script que leia dois valores inteiros A e B, se os valores forem iguais, os mesmos
                        devem ser somados, caso contrário multiplique A por B, ao final do cálculo atribuir o
                        resultado para uma variável C e exibir o resultado.</p>
                </div>
            </div>
            <label className="text-left label-text">Digite o primeiro número:  </label>
            <input className="input" type="text" ref={intA} />

            <label className="text-left label-text mt-4">Digite o segundo número: </label>
            <input className="input" type="text" ref={intB} />

            <button className="btn w-fit mx-auto">Calcular</button>
            {intC !== undefined ? <h1>A soma é: {intC}</h1> : null}
        </form>
    );
}