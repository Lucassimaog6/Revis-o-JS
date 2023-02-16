import { useRef, useState } from "react"



export default function Atv3() {
    const nome = useRef("")
    const nota1 = useRef(0)
    const nota2 = useRef(0)
    const nota3 = useRef(0)
    const [resultado, setResultado] = useState()

    const calcularParcelas = (e) => {
        e.preventDefault();
        const n1 = parseInt(nota1.current.value)
        const n2 = parseInt(nota2.current.value)
        const n3 = parseInt(nota3.current.value)
        const media = (n1 + n2 + n3) / 3

        console.log(media);

        if (media >= 7) {
            setResultado("Aprovado")
        } else {
            setResultado("Reprovado")
        }
    }

    return (
        <form onSubmit={e => calcularParcelas(e)} className="w-60 text-center flex flex-col gap-2">
            <small>
                Faça um script que leia o nome e as três notas de uma disciplina de um aluno e ao final
                escreva o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para
                aprovação é igual ou superior a 7.
            </small>
            <label className="text-left">Digite seu nome:  </label>
            <input type="text" ref={nome} />

            <label className="text-left">Digite a primeira nota:  </label>
            <input type="text" ref={nota1} />

            <label className="text-left">Digite a segunda nota:  </label>
            <input type="text" ref={nota2} />

            <label className="text-left">Digite terceira nota:  </label>
            <input type="text" ref={nota3} />

            <button>Calcular</button>
            {resultado !== undefined ? <h1>O aluno foi {nome.current.value} {resultado}</h1> : null}
        </form>
    );
}